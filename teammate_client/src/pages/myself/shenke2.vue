<template>
  <div id="shenke">
  
   <mt-header fixed title="队伍审核" style="background: #2C3E50">
    <router-link to="/myteam" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      
    </mt-header>
 <div class="page-navbar">
    
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="已审核">已审核</mt-tab-item>
      <mt-tab-item id="未审核">未审核</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
 
 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="已审核">
       <div v-for="o in 4" :key="o" class="text item">
    <div class="box"> 
    <div style="">
    <mt-cell title="队伍名字" label="" is-link :to="{ path:'/shenke' }" style="font-size:16px;color:#E6A23C;width:170px;height:10px;top:-20px;left:-20px;float:left">
       
          <span class="iconfont  icon-zhanghaoguanli" slot="icon"  style="font-size:32px;color:#E6A23C;margin-right:10px;" ></span>
         
        </mt-cell> <el-tag type="warning" style="float:right;margin-top:-10px;border:1px solid #E6A23C;background:#FFFFFF">审核成功</el-tag></div>
<br><el-divider style="margin-top:150px"></el-divider>

       <div class="title">队长名字:<span style="font-size:16px;color:#303133;margin-left:20px">哈哈哈</span>  </div>
       <div class="title">联系方式:<span style="font-size:16px;color:#303133;margin-left:20px">123213123123</span>  </div>
       <div class="title">队长名字:<span style="font-size:16px;color:#303133;margin-left:20px">哈哈哈</span>  </div>
       <div class="title">队长名字:<span style="font-size:16px;color:#303133;margin-left:20px">哈哈哈</span>  </div>
       <el-button type="primary" plain style="margin-left:200px"  @click="Xiangqing2">队伍详情</el-button>
    </div>

   
     </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="未审核">
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>


  </div>
</template>
<script>

export default {
 data() {
    return {
      selected: '1'
    };
  }, 
  methods: {
        
        
           
    
        
           Xiangqing2(){
      this.$router.push('/task2');
    }
    },

};
</script>

<style scoped>
.card{
  width:375px;
}
 .box{
     border-radius: 4px;
     border:1px solid #409EFF;
     padding:20px;
     margin:20px
  }
.title{
  color:#67C23A;
  margin:10px;
}
.page-navbar{
  margin-top:50px
}
</style>