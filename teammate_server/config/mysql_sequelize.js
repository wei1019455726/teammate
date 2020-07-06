var Sequelize = require("sequelize")
var sequelize = new Sequelize('teammate','root','0929',{
    host:'localhost',
    dialect:'mysql',
    //operatorsAliases:false,
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        collate:'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define:{
        paranoid:false,
        operatorsAliases: false,
        timestamps: false,
        freezeTableName: true
    },
      // 时区
    timezone: '+08:00'
    

});

module.exports = {
    sequelize,
    Sequelize
};