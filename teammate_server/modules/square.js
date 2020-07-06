var moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'square',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            account:{
                type: DataTypes.STRING,
                field: 'account'
            },
            user_name:{
                type: DataTypes.STRING,
                field: 'user_name'
            },
            square_time: {
                type: DataTypes.DATE,
                field: 'square_time'               
            },
            square_photo: {
                type: DataTypes.STRING,
                field: 'square_photo'
            },
            content: {
                type: DataTypes.STRING,
                field: 'content'
            },                              
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }
    );
}