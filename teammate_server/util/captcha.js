//引入验证码模块
var svgCaptcha = require('svg-captcha');

module.exports = {

    //生成验证码的方法
    captcha: async(ctx,next) => {
         
     var captcha = svgCaptcha.create({
         size:4,
         fontSize:50,
         width:100,
         height:40,
         background:'#cc9966'
     });

     return captcha;

    }
}

