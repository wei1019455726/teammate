

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'activity',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            activity_title: {
                type: DataTypes.STRING,
                field: 'activity_title'
            },
            activity_time: {
                type: DataTypes.DATE,
                field: 'activity_time',
                
            },
            activity_stime: {
                type: DataTypes.DATE,
                field: 'activity_stime',
                
            },
            activity_etime: {
                type: DataTypes.DATE,
                field: 'activity_etime',
                
            },
            activity_leader: {
                type: DataTypes.STRING,
                field: 'activity_leader'
            },
            activity_cleader: {
                type: DataTypes.STRING,
                field: 'activity_cleader'
            },
            activity_person: {
                type: DataTypes.STRING,
                field: 'activity_person'
            },
            activity_content: {
                type: DataTypes.STRING,
                field: 'activity_content'
            },  
            announce_id:{
                type: DataTypes.INTEGER,
                field: 'announce_id'
            }, 
            activity_status: {
                type: DataTypes.INTEGER,
                field: 'activity_status',
            },
            task_id:{
                type: DataTypes.INTEGER,
                field: 'task_id'
            },                     
        },
        {
            // ORM框架所谓“自动化”的功能。关闭时间戳和数据表自动加s。
            timestamps: false,
            freezeTableName: true,
        }
    );
}