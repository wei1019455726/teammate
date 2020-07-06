// 定义数据库操作类

//引入db配置
const db = require('../config/mysql_sequelize')

//引入sequelize对象
const Sequelize = db.sequelize

//引入数据表模型
const user=Sequelize.import(__dirname+'/user.js')//__dirname（动态获取）可以用来获取当前文件模块所属目录的绝对路径
const role=Sequelize.import(__dirname+'/role.js')
const user_role=Sequelize.import(__dirname+'/user_role.js')
const activity=Sequelize.import(__dirname+'/activity.js')
const user_activity=Sequelize.import(__dirname+'/user_activity.js')
const announce=Sequelize.import(__dirname+'/announce.js')
const task=Sequelize.import(__dirname+'/task.js')
const square=Sequelize.import(__dirname+'/square.js')
const schedule=Sequelize.import(__dirname+'/schedule.js')
//自动创建表
user.sync({ force: false }); 

//用户与角色多对多  foreignKey让你可以设置through关系中的源模型，而otherKey让你可以through关系中的目标模型。
user.belongsToMany(role, { through: 'user_role', foreignKey: 'account', sourceKey: 'account'});
role.belongsToMany(user, { through: 'user_role', foreignKey: 'role_id', sourceKey: 'id' });


//用户与活动多对多
user.belongsToMany(activity, { through: 'user_activity', foreignKey:'account', sourceKey:'account'});
activity.belongsToMany(user, { through: 'user_activity', foreignKey: 'activity_id', sourceKey:'id'});


//比赛与队伍一对多
announce.hasMany(activity, {foreignKey:'id', sourceKey:'id'})
activity.belongsTo(announce, { foreignKey:'id',targetKey:'id'})

//活动与队伍一对一
user_activity.hasOne(activity, { foreignKey:'id', sourceKey:'activity_id' })
activity.belongsTo(user_activity, { foreignKey: 'id', targetKey:'activity_id' })

//活动与任务一对一
task.hasOne(activity, { foreignKey:'id', sourceKey:'activity_id' })
activity.belongsTo(task, { foreignKey: 'id', targetKey:'activity_id' })

//队伍与用户一对多
user_activity.hasMany(user, {foreignKey:'account', sourceKey:'account'})
user.belongsTo(user_activity, { foreignKey:'account',targetKey:'account'})



module.exports={user,role,user_role,activity,announce,user_activity,task,square,schedule}

