const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session')

const index = require('./routes/index')
const users = require('./routes/users')
const roles = require('./routes/roles')
const teams = require('./routes/teams')
const activitys = require('./routes/activitys')
const myself = require('./routes/myself')
const announces = require('./routes/announces')
const api_users = require('./routes/api/users')
const api_teams = require('./routes/api/teams')
const api_announces = require('./routes/api/announces')


const koaBody = require('koa-body');
const log4js = require('./util/log4j')
const passport = require('./util/passport')
const errorhandle = require('./middlewares/error')

const cors = require('./config/cors_config')
// error handler
onerror(app)

app.keys = ['this is my secret set'];



app.use(koaBody({//koa2 post请求ctx.request.body空获取不到的解决办法
  multipart: true,// 允许上传多个文件
  formidable: {
    maxFieldsSize: 200 * 1024 * 1024,  //设置上传文件大小最大限制,默认2M
    multipart: true // 是否支持 multipart-formdate 的表单
  }
}))



app.use(session({
  key: 'koa:sess', /** cookie的名称，可以不管 */
  maxAge: 7200000, /** (number) maxAge in ms (default is 1 days)，cookie的过期时间，这里表示2个小时 */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
},app));

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text'],
  extended: false
}))
// app.use(koaBody)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  // extension: 'ejs'
  map:{html:'ejs'}
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  log4js.resLogger(ctx,ms);
})

app.use(passport.initialize())
app.use(passport.session())

app.use(cors)

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(roles.routes(), roles.allowedMethods())
app.use(teams.routes(), teams.allowedMethods())
app.use(announces.routes(), announces.allowedMethods())
app.use(activitys.routes(), activitys.allowedMethods())
app.use(myself.routes(), myself.allowedMethods())
app.use(api_users.routes(), api_users.allowedMethods())
app.use(api_teams.routes(), api_teams.allowedMethods())
app.use(api_announces.routes(), api_announces.allowedMethods())

app.use(errorhandle);

// error-handling
app.on('error', (err, ctx) => {
  log4js.errLogger(ctx, err)
  console.error('server error', err, ctx)
});

module.exports = app
