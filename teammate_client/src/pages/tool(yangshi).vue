<template>
  <div id="tool">
   
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>日程卡</span>
 <el-button type="primary" icon="el-icon-edit" circle style="float: right;margin-left:20px; "></el-button>
    <el-button style="float: right;margin-left:0px; " type="text" >添加日程</el-button>
   
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    <div class="box">{{'列表内容 ' + o }}</div>
  </div>
</el-card>
  </div>
</template>
<script>

export default {
 
};
</script>

<style scoped>
  #tool{
    width:80%;
    
  }
  .box{
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     padding:20px;
  }
   .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 375px;
  }
</style>