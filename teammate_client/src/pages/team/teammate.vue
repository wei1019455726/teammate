<template>
  <div id="teammate">
<mt-header fixed title="详细信息" style="background: #2C3E50">
    <router-link to="/task" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    </mt-header>

      <div class="head">
            <div class="head-img"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="70"></el-avatar></div>
            <div class="head-name"> {{message.user_name}}  <span style="margin:0px 10px 0px 10px">{{message.user_age}}岁</span> 
            <i class="el-icon-male"  style="color:blue;font-size:20px;font-weight:bold" v-if="message.user_sex === 1"></i> 
            <i class="el-icon-female"  style="color:red;font-size:20px;font-weight:bold" v-if="message.user_sex === 2"></i> 
            </div>
      </div>
    <div class="data">
      <div class="school"><i class=" icon el-icon-school"></i> <div class="txt">现读 {{message.user_school}}</div></div>
       <div class="specialty"><i class=" icon el-icon-s-order"></i> <div class="txt">{{message.user_major}}</div></div>
       <div class="like"><i class=" icon el-icon-s-grid"></i> <div class="txt "><el-tag class="el-tag">篮球</el-tag>
       <el-tag class="el-tag">阅读</el-tag></div></div>
        <div class="myactivity"><i class="icon el-icon-coin"></i> <span style="margin-left:10px;font-weight:bold">比赛经历</span>
              <div class="txt2">{{message.user_experience}}</div>
        </div>
              <div class="myjianjie"><i class="icon el-icon-user-solid"></i> <span style="margin-left:10px;font-weight:bold">个人简介</span>
              <div class="txt2">{{message.user_introduce}}</div>
              </div>
    </div>
  <router-view></router-view>
  </div>
    
</template>
<script>

export default {
  data() {
    return {
     issex:true,
     id: this.$route.params.id,
     message:[]
    };
},
 created(){
 
},
mounted: function() {
      //获取个人信息
      this.$api.team.getuserinfo(this.id)
      .then(res => {
        this.message = res.data          
        console.log( message );
        }).catch((reject) => {
    })
    },
}
</script>

<style scoped>
.head{
  margin: auto;
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  margin-top: 60px;
  text-align: center;
}
 .head-img{
    margin-bottom: 10px;
 }
 .icon{
   font-size: 24px;
   color: #909399;
   margin-left: 20px;
 }
 .txt{
   border-bottom: 2px solid #C0C4CC;
   padding-bottom: 20px;
   display: inline-block;
   width:75%;
   margin-left: 10px;
 }
  .txt2{
   border-bottom: 2px solid #C0C4CC;
   padding-bottom: 20px;
   margin-top: 30px;
   width:75%;
   margin-left: 60px;
   font-size: 16px;
 }
 .data div{
   margin-bottom: 10px;
 }
 .el-tag{
   margin-left: 10px;
   background: rgb(175, 255, 166);
   border: 1px solid rgb(175, 255, 166);
   color: black;
 }
</style>