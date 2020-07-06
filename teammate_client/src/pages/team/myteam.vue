<template>
  <div id="myteam">
   <!-- <div v-show="display"> -->
    <mt-header fixed title="我的队伍" style="background: #2C3E50">
    <router-link to="/my" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      
    </mt-header>
    <div class="page-navbar">
    
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="创建的队伍">创建的队伍</mt-tab-item>
      <mt-tab-item id="加入的队伍">加入的队伍</mt-tab-item>
     
    </mt-navbar>
 
 
	<!-- tabcontainer -->
  <!-- -------- 加入的队伍 ------------ -->
    <mt-tab-container v-model="selected" v-for="(item, index) in messages" :key="index">
      <mt-tab-container-item id="加入的队伍" >
     <el-card class="box-card" v-if="item.user_status === '3'">

  <div class="text item">
  <div class="button1" >
     <div class="box" >
       <div class="team-name" >
       {{ item.activity.activity_title }}
        </div>
      <div class="team-people">
        <div class="teammate-left">
          <div class="teammate-title">队长</div>
          <div class="teammate-data">
             <div class="picture">
           <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="width:40px;"></el-avatar></div>
              <div class="teammate-name">队长名字:{{ item.activity.activity_leader }}</div> 
              <div class="teammate-tel"><span style="margin-left:-15px;">电话：</span>{{ item.activity.activity_cleader }}</div>
          </div>
          <hr style="float:left;margin-top:15px;margin-left:-20px;margin-right:-20px;width:150px;border: 0;height: 1px;background: #666;background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));">         
          <router-link to="/data" tag="li"> <div class="teammate-footer">队长详细信息></div></router-link>
          </div>
        <div class="teammate-right">
          <div class="teammate-title">队员</div>
        <el-row class="div1">
  <el-col :span="7" v-for="(o, index) in 7" :key="o" :offset="index > 7 ? 5 : 0" style="background:#f3fcd2;border-radiu:20px">     
      <el-avatar class="img" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="width:30px;height:30px;border-radiu:30px;"></el-avatar>    
  </el-col>
</el-row>

         <hr style="float:left;margin-top:15px;margin-left:-20px;margin-right:-20px;width:150px;border: 0;height: 1px;background: #666;background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));">
         <router-link to="/data" tag="li"><div class="teammate-footer" style="">已加入5/7个队员></div></router-link>
        </div>
      </div>
       <div class="footer">
           <div class="tab-icon" @click="$router.push({name:'task2',params:{id:item.activity_id}})"> 项目详情<span class="el-icon-d-arrow-right" style="color:#409EFF;font-size:24px;margin-top:10px;"></span></div>
        </div>
       </div></div>
  </div>
</el-card>
      </mt-tab-container-item>

<!-- -------- 创建的队伍 ------------ -->
      <mt-tab-container-item id="创建的队伍">
        <el-card class="box-card" v-if="item.user_status === '2'">

  <div  class="text item">
    <div class="button1">
  <div class="box">
      <div class="team-name">
        队名 {{ item.activity.activity_title }} 
        <el-button class="team-icon"  icon="iconfont icon-icon-test" circle size="mini" @click="prompt()"></el-button>
        </div> <div class="team-status">
        <el-tag type="success" style="border:1px solid #E6A23C;background:#FFFFFF;border-radius:100px; "  v-if="item.activity.activity_status === 1 ">已审核</el-tag>       
        <el-tag type="danger" style="border:1px solid #E6A23C;background:#FFFFFF;border-radius:100px; "  v-if="item.activity.activity_status === 0 ">未审核</el-tag>  
        </div>

        <div class="activity-title">
         <span  style="font-size:14px;color:#909399"> 比赛主题： </span> 
         <el-tag class="status1"  size="mini">文体艺术类</el-tag>
         <el-tag  class="status2" size="mini">书法大赛</el-tag>
        </div>

        <div class="duiyuan-data">
          <div class="duiyuan">
              <div class="duiyuan-tab">
                <div class="duiyuan-tab-top">{{ item.activity.activity_person }}</div><br/>
                <div class="duiyuan-tab-bottom">队内人数</div>
              </div>
                <div class="duiyuan-tab2">
                   <div class="duiyuan-tab-top">{{ item.activity.activity_stime | formatDate}}</div>
                <div class="duiyuan-tab-bottom">开始时间</div>
                </div>
                <div class="duiyuan-tab">
                   <div class="duiyuan-tab-top">{{ item.activity.activity_etime | formatDate}}</div>
                <div class="duiyuan-tab-bottom">结束时间</div>
                </div>
          </div>
         
        </div>
        <div class="footer">
           <div class="tab-icon"  @click="$router.push({name:'task',params:{id:item.activity_id}})"> 项目详情<span class="el-icon-d-arrow-right" style="color:#409EFF;font-size:24px;"></span></div>
        </div>
    </div></div>
  </div>
</el-card>
      </mt-tab-container-item>
     
    </mt-tab-container>
    </div>
      
   </div> 
</template>
<script>
import {formatDate,DateToTimestamp} from '@/utils/mUtils'
export default {
  data() {
    return {
      messages:[],
      selected: '创建的队伍', 
    };
  },
   methods: {

      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
       prompt(){
			this.$messagebox({
                    $type:'prompt',
                    title:'修改队伍名字',
                    message:' ',
                    showInput:true,
                    showCancelButton:true,
                    confirmButtonText:'提交'
                }).then(({ value, action }) => {
                    console.log(value);
                });
			},        
    },
     created() {       
      //获取队伍信息      
        this.$api.team.useractivityinfo()
      .then(res => {
          this.messages = res.data 
        }).catch((reject) => {
          console.log('无法获取')
        })
      },

      
filters: {
  formatDate (time) {
    let date = new Date(time)
    return formatDate(date, 'YYYY-MM-dd')
},

status(activity_status){
       if(activity_status = 1){
         return '已审核'
       }else if(activity_status = 0){
         return '未审核'
       }
     },

     statuscolors(activity_status){
       if(activity_status = 1){         
         return 'warning'
       }else if(activity_status = 0){
         return "danger"
       }
     },
},
};
  

</script>

<style scoped>
  .card{
  width:375px;
}
 .box{
     border-radius: 4px;
     
     
    
  }
  .el-card {
background: rgb(238, 238, 238);
  }
.title{
  color:#67C23A;
  margin:10px;
}
.page-navbar{
  margin-top:50px
}

  .box-card {
    width: 375px;
    margin-top:5px
  }
  .box{
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     width:305px;
     padding:20px;
     margin:0px 0 0 -20px;
     background: #ffffff;
  }
 
  .button1{
      margin:10px 0px 20px 15px;
  width:345px;
    border:0;
    
    float:left
  }
  .team-name{
    text-align: center
  }
  .team-people{
    display: flex;
    width: 100%;
    margin-top: 20px;
    font-size: 13px;
    
  }
  .teammate-left{
    flex: 1;
    background: #f3fcd2;
   padding: 20px;
   border-radius: 4px;
    margin-left: -7px;
   margin-right: 20px;
    box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .teammate-right{
    flex:1.1;
     background: #f3fcd2;
    
     padding: 20px;
     border-radius: 4px;
      box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
     
  }
  .teammate-title{
    float: left;
    margin-left: -10px;
    margin-top: -10px;
  }
  .picture{
    display: inline-block;
    margin-left: 20px;
    margin-top: 10px;
     
}
.teammate-name{
  margin-top: 10px;
  text-align: center;
}
.teammate-tel{
  margin-top: 15px;
   text-align: center;
}
.teammate-footer{
  margin-top: 25px;
  margin-left: 0px;
 text-align: center;
}

.teammates{
  width: 100px;
  height:auto;
  background: #67C23A;
  
  position: relative;
  margin-top: 30px;
  margin-left: -35px;
  display:flex;
  max-height: 70px;
  max-width: 100px;
            line-height: 20px;
            word-wrap: break-word;
            word-break: break-all;
  
}

.img{
  
 
  
  border:1px solid rgb(169, 182, 163);
  border-radius: 20px;
  height: 20px;
  width: 20px;
 
}
.div1{
  margin-top: 10px;
  
  width: 110px;
}
.team-icon{
 background: #a4e5ffa2;
 border-color: #f0d898a2;
}
.el-message-box{
  width: 30px;
}
.duiyuan-data{
  margin-top: 20px;
}
.tab-icon{
  left: 200px;
  

  position: relative;
}
.footer{
 padding:10px;
 margin-top: 10px;
}
.duiyuan{
  display: flex;
  width: 320px;
  
  margin-left: -10px;
}
.duiyuan-tab{
  flex: 1;

  
  padding: 0px 10px 0 10px;
  text-align: center;
}
.duiyuan-tab2{
  flex: 1;
  padding: 0px 10px 0 10px;
  text-align: center;
  border-left: 2px solid #d8d8d8;
   border-right: 2px solid #d8d8d8;
}
.duiyuan-tab2::before{
  position: relative;
	display: inline-block;
	outline: none;
	text-decoration: none;
	color: #000;
	font-size: 32px;
	padding: 5px 10px;
}

.duiyuan-tab-top{
      color: #303133;
        font-size: 16px;
        font-weight: bold;
}
.duiyuan-tab-bottom{
  color: #909399;
  font-size: 13px;
}
.team-status{
  float: right;
  position: relative;
  top: -30px;
  right: 0px;
}
.activity-title{
  padding: 10px;
  margin-top: 10px;
}
.status1{
border:1px solid rgb(89, 241, 0);background:rgb(212, 247, 239);
color:#303133;
}
.status2{
border:1px solid rgb(14, 247, 14);background:rgb(232, 255, 189);
margin-left: 10px;
color:#303133;
}
</style>