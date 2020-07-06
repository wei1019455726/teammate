<template>
  <div id="duiwu">
  <mt-header fixed title="队伍名称" style="background: #2C3E50">
    <router-link to="/fa" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    </mt-header>
    
    <div id="neirong2" style="margin-top:80px">
      <div style="text-align:center;padding-top:20px">
        队长留言
      </div>
      <div class="box" style="display:flex;">
        <div class="picture">
           <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div> 
            <div class="data">
                <div class="name"> {{message.activity_title}}</div>
                <div class="data-neirong"> {{message.activity_content}}</div>
            </div>
          
      </div>
      <div class="data-footer">qq:516165156165 </div>
    </div>
    <div id="neirong2">
    <div style="text-align:center;padding-top:20px">队伍简介</div>
     
    <div class="box" >
      <div class="box-data"> <span class="el-icon-timer" style="margin-right:-1px;color: rgb(255, 118, 77);" ></span> <span style="font-size:14px;">报名开始日期</span><div class="box-text">{{message.activity_stime}}</div></div>
      <div class="box-data"> <span class="el-icon-timer" style="margin-right:-1px;color: rgb(255, 118, 77);"></span> <span style="font-size:14px;">报名截止日期</span><div class="box-text">{{message.activity_etime}}</div></div>
      <div class="box-data"> <span class="el-icon-phone" style="margin-right:3px;color: rgb(255, 118, 77);"></span><span style="font-size:14px;">联系方式</span><div class="box-text">{{message.activity_cleader}}</div></div>
      <div class="box-data"> <span class="el-icon-location-outline" style="margin-right:3px;color: rgb(255, 118, 77);"></span><span style="font-size:14px;">活动地点</span><div class="box-text">按时</div></div>
      <div class="box-data"> <span class="el-icon-user" style="margin-right:3px;color: rgb(255, 118, 77);"></span><span style="font-size:14px;margin-right:-5px;">队内人数</span> <div class="box-text">{{message.activity_person}}</div></div>
    </div>
    </div>
    <div  class="footer">
      <div class="footer-left"> 
          <a ></a>
      <span>正在报名中</span>
      </div>
    <div class="footer-right"><el-button type="danger"   class="button"  @click="open">加入队伍</el-button></div>
  </div>
<router-view></router-view>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('user')

export default {
  data(){
    return{
      message:[],
      id: this.$route.params.id,
    }
  },
methods: {
      open() {
            this.$messagebox({
              title: '提示',
              message: '确定要加入该队伍吗',
              showCancelButton: true,
              confirmButtonText:"确定",
              cancelButtonText:"取消"
            }).then(action => {
              if(action == 'confirm'){
                this.$api.team.postTeam(this.id).then(res => {  
                  console.log('确认')      
       })
              }else{
                console.log('取消')
              }
          })
        }

    },
  computed:{
    ...mapState({
      user_name:state=>state.name
      
      })
  },

  mounted: function() {
    console.log('main传过来的activity_id'+this.$route.params.id)
      this.$api.team.teaminfo(this.id)
        .then(res => {
          this.message = res.data
          console.log(this.message)
        }).catch((reject) => {
          console.log('无法获取')
        })
    },

 
  
}
</script>
<style scoped>
.caidan{
  margin-top: 25%;
}
#neirong{
margin-top:50px;

}
#neirong2{
  margin-top:30px;
  margin-left: 10%;
  width: 80%;
  height: auto;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 8px;
 
}

.box{
  
  margin-top:10px;
  width:255px;
  padding: 10px 20px 30px 20px
 
}
.footer{
  width: 100%;
  position:fixed;
  left: 0px;
  bottom:0px;
     z-index:9999;
   display:flex;
   height: 40px;
}
.footer-left a:before{
  
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: rgb(22, 224, 83);
    vertical-align: middle;
    margin-right: 7px;
    border-radius: 4px;

}
.footer-left{
  flex: 1.5;
  background: #ffffff;
  padding-left: 30px;
  bottom: 0px;
  margin:auto;
  padding-top:10px;
  height: 30px;
}
.footer-right{
  flex: 1;
  width: 100%;
}
.button{
  width:100%;
  border-radius: 0px;
 
}
.box-data{
  margin-top: 7px;
}
.box-text{
display: inline;
font-size: 14px;
margin-left: 7px;

}
.picture{
    flex: 1;
    
   
}
.data{
  flex: 4.5;
 
}
.name{
  font-size: 14px;
  padding-left: 5px;
}
.data-neirong{
  font-size: 13px;
  color: #606266;
  padding: 5px;
}
.data-footer{
  border-top:1px solid #E4E7ED;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  padding-top:15px;
  padding-bottom:15px;
  font-size: 14px;
}
.el-message-box {
  width: 300px;
  height: 400px;
  background: green;
}
.el-message-box {
    width: 200px;
}
.el-message-box--center {
    padding-bottom: 100px;
}
.el-message-box__header{
  width:100px;
}
</style>