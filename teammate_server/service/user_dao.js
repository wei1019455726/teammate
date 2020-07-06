const {user,role,user_role} = require('../modules/index')
var Sequelize = require('sequelize-values')();

//数据库操作类
class userDao {


    static async getUserInfo(account) {
        return await user.findOne({
            where:{
                account
            },
            include:[{model:role}]
        }).then(function (user) {
            return Sequelize.getValues(user);
        })
    }

    static async getUserAdminInfo(account) {
        return await user.findOne({
            where: {
                account
            },
            include: {
                model: role
            }
        }).then(function (user) {
            return Sequelize.getValues(user);
        })
    }

    //分页-获取所有用户信息
    static async userInfoPagination(searchCondition,sikpPage,pageSize) {
        return await user.findAndCountAll({
            limit:pageSize, //查询由offset/limit指定的所有匹配行，并返回查询条件所匹配的总数量。
            offset:sikpPage,
            where:searchCondition,
            attributes: ['id', 'account', 'user_name', 'user_status'],//attributes可以获取一个对象中的一个属性，并且作为对象来调用，注意在这里要使用“[]”；
            include:[{
                model:role
            }]
        }).then(function (user) {
            return Sequelize.getValues(user);
        })
    }

    static async getAllUser(){
        return await user.findAll({
            include:{
                model:role
            },
            raw:true    //返回原始数据
        })
    }

    static async createUser(body){
        return await user.findOrCreate({
            where:{
               account:body.account
            },
            defaults:{
                account:body.account,
                password:body.password,
                user_name:body.user_name,
                user_sex:body.user_sex,
                user_phone:body.user_phone,               
                user_status:body.user_status,
                solt:body.solt
            },
            raw:true
        })
    }


    //修改用户角色表
    static async putUserRole(account, roleId) {
        return await user_role.create({
            where: {
                account: account,
                role_id: roleId
            },
            defaults: {
                account: account,
                role_id: roleId
            },
            raw: true
        })
    }

    //新增用户角色表
    static async postUserRole(account, roleId) {
        return await user_role.findOrCreate({
            where: {
                account: account,
                role_id: roleId
            },
            defaults: {
                account: account,
                role_id: roleId
            },
            raw: true
        })
    }

    //编辑用户
    static async putUser(editResult) {
        return await user.update({
            password:editResult.password,
            user_name: editResult.userName,
            user_sex: editResult.userSex,
            user_phone: editResult.userPhone,
            user_status: editResult.userStatus,
            solt: editResult.solt

        },{
            where:{
                account:editResult.account
            }
        })
    }

    //修改名字
    static async putuser(params,account) {
        return await user.findOrCreate({
            defaults:{
            user_name:params.user_name,
            nickname:params.nickname,
            user_phone:params.user_phone,
            user_school:params.user_school,
            user_major:params.user_major,
            user_experience:params.user_experience,
            user_introduce:params.user_introduce,
            user_age:params.user_age
        },      
        where:{
                account:account
            },
        })
    }

    
    static async delectUser(body){
        return await user.destroy({
            where:{
                account:body
            }
        })
    }

    static async deleteUserRole(account) {
        return await user_role.destroy({
            where: {
                account: account
            }
        })
    }
   
    
 }

module.exports = userDao
