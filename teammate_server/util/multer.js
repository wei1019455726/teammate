//图片上传模块
const multer = require('koa-multer');
//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/') /**配置图片上传的目录 注意:图片上传的目录必须存在 */
    },
    //图片上传重命名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");  /**获取后缀名 分割数组*/
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage })

module.exports = {upload}