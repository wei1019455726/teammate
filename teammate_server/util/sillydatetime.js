var sd = require('silly-datetime');

module.exports = {

    //时间格式化
    formatTime(params) {

     return sd.format(new Date(params), 'YYYY-MM-DD HH:mm:ss');

    },

    DateToTimestamp(time){
        return (new Date(time)).getTime() / 1000
    }

}