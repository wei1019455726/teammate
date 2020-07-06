var moment = require('moment');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'task',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            task_status: {
                type: DataTypes.INTEGER,
                field: 'task_status',
                default:0
            },
            content: {
                type: DataTypes.STRING,
                field: 'content'
            }, 
            task_stime: {
                type: DataTypes.DATE,
                field: 'task_stime',            
            },
            task_etime: {
                type: DataTypes.DATE,
                field: 'task_etime',     
            },
            user_name:{
                type: DataTypes.STRING,
                field: 'user_name'
            }, 
            activity_id: {
                type: DataTypes.STRING,
                field: 'activity_id'
            },                     
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }
    );
}