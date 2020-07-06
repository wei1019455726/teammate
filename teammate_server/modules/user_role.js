module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user_role',
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
            role_id: {
                type: DataTypes.STRING,
                field: 'role_id'
            }
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }
    );
}
