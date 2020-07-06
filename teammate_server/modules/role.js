module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'role',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            role_name: {
                type: DataTypes.STRING,
                field: 'role_name'
            },
            description: {
                type: DataTypes.STRING,
                field: 'description'
            }
           
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }
    );
}

