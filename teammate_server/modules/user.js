// 定义模型
module.exports = function(sequelize,DataTypes){
    return sequelize.define(
        'user',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            account:{
                type: DataTypes.STRING,
                field: 'account'
            },
            password:{
                type: DataTypes.STRING,
                field: 'password'
            },
            user_name:{
                type: DataTypes.STRING,
                field: 'user_name'
            },
            user_sex: {
                type: DataTypes.INTEGER,
                field: 'user_sex',
                default:0
            },
            user_age: {
                type: DataTypes.STRING,
                field: 'user_age',
            },
            user_phone: {
                type: DataTypes.STRING,
                field: 'user_phone'
            },
            user_school:{
                type: DataTypes.STRING,
                field: 'user_school'
            },
            user_major:{
                type: DataTypes.STRING,
                field: 'user_major'
            },
            user_experience:{
                type: DataTypes.STRING,
                field: 'user_experience'
            },
            user_introduce:{
                type: DataTypes.STRING,
                field: 'user_introduce'
            },
            nickname:{
                type: DataTypes.STRING,
                field: 'nickname'
            },
            user_status: {
                type: DataTypes.INTEGER,
                field: 'user_status',
                default:0
            },
            solt:{
                type: DataTypes.STRING,
                field: 'solt'
            }
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }        
    );
}

