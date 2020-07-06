module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'team',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            activity_id: {
                type: DataTypes.INTEGER,
                field: 'activity_id'
            },
            announce_id: {
                type: DataTypes.INTEGER,
                field: 'announce_id'
            },
            account:{
                type: DataTypes.STRING,
                field: 'account'
            },
            user_name:{
                type: DataTypes.STRING,
                field: 'user_name'
            },                      
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }
    );
}