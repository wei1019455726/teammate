const db = require('../config/mysql_sequelize')

const Op = db.Sequelize.Op;

var Sequelize = require('sequelize-values')();

const {role} = require('../modules/index')

//数据库操作类
class roleDao {

    static async getRoleInfo(role_id) {
        return await role.findOne({
            where: {
                role_id
            }
        })
    }

    static async getAllRole(){
        return await role.findAll({
            raw:true    //返回原始数据
        })
    }

    //新增角色
    static async postRole(roleInfo) {
        return await role.create({
            role_name:roleInfo.role_name,
            description:roleInfo.description,
        })
    }

    //获取一个角色信息
    static async getOneRoleInfo(roleName,id){
        return await role.findOne({
            where:{
                [Op.or]:[{role_name:roleName},{id:id}]
            }
        })
    }

    static async delectRole(body){
        return await role.destroy({
            where:{
                id:body
            }
        })
    }

   
    
 }

module.exports = roleDao
