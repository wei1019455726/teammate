
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'announce',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            announce_title: {
                type: DataTypes.STRING,
                field: 'announce_title'
            },
            announce_time: {
                type: DataTypes.INTEGER,
                field: 'announce_time',
               
            },                  
            announce_sperson: {
                type: DataTypes.STRING,
                field: 'announce_sperson'
            },
            announce_phone: {
                type: DataTypes.STRING,
                field: 'announce_phone'
            },
            announce_photo: {
                type: DataTypes.STRING,
                field: 'announce_photo'
            },
            announce_content: {
                type: DataTypes.STRING,
                field: 'announce_content'
            }, 
            announce_status: {
                type: DataTypes.INTEGER,
                field: 'announce_status',
                default:0
            }, 
            team_id: {
                type: DataTypes.INTEGER,
                field: 'team_id',
            },                     
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }
    );
}