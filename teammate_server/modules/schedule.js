
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'schedule',
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
            schedule: {
                type: DataTypes.STRING,
                field: 'schedule'
            }, 
            schedule_time: {
                type: DataTypes.DATE,
                field: 'schedule_time',            
            }                                     
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }
    );
}