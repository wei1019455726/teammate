module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user_activity',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            account: {
                type: DataTypes.STRING,
                field: 'account'
            },
            activity_id: {
                type: DataTypes.STRING,
                field: 'activity_id'
            },
            user_status: {
                type: DataTypes.STRING,
                field: 'user_status',
                default: 2
            },
            status:{
                type: DataTypes.STRING,
                field: 'status',
                default: 0
            },
           
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }
    );
}
