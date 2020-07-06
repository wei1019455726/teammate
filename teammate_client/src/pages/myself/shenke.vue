<template>
  <div id="shenke">
  
   <mt-header fixed title="查看审核" style="background: #2C3E50">
    <router-link to="/myteam" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      
    </mt-header>
 <div class="page-navbar">
    
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="活动审核">活动审核</mt-tab-item>
      <mt-tab-item id="队员审核">队员审核</mt-tab-item>
    </mt-navbar>
 
 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected" v-for="(item, index) in messages" :key="index">
      <mt-tab-container-item id="活动审核" v-if="item.user_status === '2'">
       <div  class="text item">
    <div class="box"> 
    <div class="box-head" style="margin-bottom:35px;">
    <mt-cell  label="" is-link :to="{ path:'/shenke' }" style="font-size:22px;color:#E6A23C;width:170px;height:10px;top:-20px;left:-20px;float:left">
       
          <span class="iconfont  icon-zhanghaoguanli" slot="icon"  style="font-size:20px;color:#E6A23C;margin-right:13px;" >{{ item.activity.activity_title }}</span>
         
        </mt-cell> 
        <el-tag type="danger" style="float:right;margin-top:-10px;background:#FFFFFF" v-if="item.activity.activity_status === 0">待审核</el-tag>
        <el-tag type="warning" style="float:right;margin-top:-10px;border:1px solid #E6A23C;background:#FFFFFF" v-if="item.activity.activity_status === 1">已审核</el-tag>
        </div>
<el-divider style="margin-top:150px"></el-divider>

       
      <div class="footer"> <el-button  plain style="" size="small" @click="$router.push({name:'task',params:{id:item.activity_id}})">活动详情</el-button>
         <el-button type="danger" size="small" @click="$router.push({name:'task',params:{id:item.activity_id}})">审核队员</el-button></div>
    </div>

   
     </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="队员审核" >
         <div  class="text item" v-if="item.user_status === '3'">
    <div class="box"> 
    <div class="box-head" style="margin-bottom:35px;">
    <mt-cell  label="" is-link :to="{ path:'/shenke' }" style="font-size:22px;color:#E6A23C;width:170px;height:10px;top:-20px;left:-20px;float:left">
       
          <span class="iconfont  icon-zhanghaoguanli" slot="icon"  style="font-size:20px;color:#E6A23C;margin-right:10px;" >{{ item.activity.activity_title }}</span>
         
        </mt-cell> <el-tag type="success" style="float:right;margin-top:-10px;" v-if="item.status === '1'">已批准</el-tag>
               <el-tag type="danger" style="float:right;margin-top:-10px;" v-if="item.status === '0'">未批准</el-tag></div>
<el-divider style="margin-top:150px"></el-divider>

<div class="footer"> 
  
  <el-button type="danger" size="small" @click="$router.push({name:'task2',params:{id:item.activity_id}})">查看比赛</el-button>
  </div>
    </div>
       
    

   
     </div>
      </mt-tab-container-item>          
    </mt-tab-container>
  </div>


  </div>
</template>
<script>

export default {
 data() {
    return {
      selected: '活动审核',
      isshow:true,
      messages:[],
    };
  }, 
  methods: {
        
        shenhe(){
        this.$messagebox({
              title: '提示',
              message: '您同意该队员加入队伍吗',
              showCancelButton: true,
              confirmButtonText:"同意",
              cancelButtonText:"不同意"
            }).then(action => {
              if(action == 'confirm'){
                console.log('同意')
              }else{
                console.log('不同意')
              }
          })},
           
            giveup(){
        this.$messagebox({
              title: '提示',
              message: '您放弃该加入队伍吗',
              showCancelButton: true,
              confirmButtonText:"确认",
              cancelButtonText:"取消"
            }).then(action => {
              if(action == 'confirm'){
                console.log('确认')
              }else{
                console.log('取消')
              }
          })},
        
           Xiangqing(){
      this.$router.push('/teammate');
    }
    },
              revice(){
      this.$router.push('/task');
    },
    created() {       
      //获取队伍信息      
        this.$api.team.useractivityinfo()
      .then(res => {
          this.messages = res.data 
          console.log(res.data)
        }).catch((reject) => {
          console.log('无法获取')
        })
      },
    
};
</script>

<style scoped>
.card{
  width:375px;
}
 .box{
     border-radius: 4px;
    
     padding:20px;
     margin:20px;
     background: #ffffff;
  }
.title{
  color:#67C23A;
  font-size: 16px;
  margin:10px;
  height: auto;
  width: 100%;
}
.page-navbar{
  margin-top:40px
}
.mint-tab-item{
  border-left: 1px solid rgb(199, 199, 199);
  border-bottom: 1px solid rgb(199, 199, 199);
  
  font-size: 25px
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 2px solid #F56C6C;
    color: #F56C6C;
    
}
.footer{
  text-align: right;
}
</style>