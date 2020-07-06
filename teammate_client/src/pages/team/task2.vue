<template>
  <div id="task">
    <div v-show="display">
   <mt-header fixed title="队伍任务" style="background: #2C3E50">
    <router-link to="/myteam" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      
    </mt-header>
     <div class="page-navbar">
    
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="我的任务">我的任务</mt-tab-item>
      <mt-tab-item id="队友信息">队友信息</mt-tab-item>
      <mt-tab-item id="项目进程">项目进程</mt-tab-item>
    </mt-navbar>
 
 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="我的任务">
       <div v-for="(item, index) in message" :key="index" class="text item">
         	<!-- 待完成任务-->
    <div class="box" v-if="item.task_status ===1"> 
    <div style="">
   <el-tag  style="font-size:18px" >时间：<i  style="font-size:18px"></i> {{ item.task_stime | stime(nowtime,item.task_etime)}}</el-tag>

  <el-tag type="danger" effect="plain" style="font-size:18px" >进度：<i class="el-icon-loading" style="font-size:18px"></i> 进行中</el-tag>

  </div>
<el-divider style="margin-top:150px"></el-divider>

       <div class="title"><i class="el-icon-tickets" style="font-size:20px;margin-right:10px"></i>内容:<span style="font-size:14px;color:#303133;margin-left:20px">{{item.content}}</span>  </div>
        <div class="time"> <span class="el-icon-time" style="font-size:20px;margin-right:10px;color:#ee0000"></span><span style="font-size:14px;margin-left:0px;color: #ee0000;background: #ffcccc;padding:5px 10px 5px 10px">截止日期:{{item.task_etime | formatDate}}</span>  </div>
<div class="task-footer">
   <el-button round size="mini" @click="add">添加至日程</el-button>
   <el-button round size="mini" @click="posttask">提交任务</el-button>
</div>
    </div>
    	<!-- 已完成 -->
     <div class="box" v-if="item.task_status === 2"> 
    <div style="">
    <el-tag   style="font-size:18px;"  >时间：<i  style="font-size:18px"></i> {{ item.task_stime | stime(nowtime,item.task_etime)}}</el-tag>
<el-tag type="success" effect="plain" style="font-size:18px;"  >进度：<i class="el-icon-finished" style="font-size:18px"></i> 已完成</el-tag>
  </div>
<el-divider style="margin-top:150px"></el-divider>

       <div class="title"><i class="el-icon-tickets" style="font-size:20px;margin-right:10px"></i>内容:<span style="font-size:14px;color:#303133;margin-left:20px">{{item.content}}</span>  </div>
        <div class="time"> <span class="el-icon-time" style="font-size:20px;margin-right:10px;color:#ee0000"></span><span style="font-size:14px;margin-left:0px;color: #ee0000;background: #ffcccc;padding:5px 10px 5px 10px">截止日期:{{item.task_etime | formatDate}}</span>  </div>
         <div class="task-footer">
   
   
</div>
    </div>
   	<!-- 未完成 -->
     <div class="box" v-if="item.task_status === 3">  
    <div style="">
<el-tag  style="font-size:18px;"  >时间：<i  style="font-size:18px"></i> {{ item.task_stime | stime(nowtime,item.task_etime)}}</el-tag>
<el-tag type="warning" effect="plain" style="font-size:18px;"  >进度：<i class="el-icon-sort" style="font-size:18px"></i> 未完成</el-tag>
  </div>
<el-divider style="margin-top:150px"></el-divider>

       <div class="title"><i class="el-icon-tickets" style="font-size:20px;margin-right:10px"></i>内容:<span style="font-size:14px;color:#303133;margin-left:20px">{{item.content}}</span>  </div>
        <div class="time"> <span class="el-icon-time" style="font-size:20px;margin-right:10px;color:#ee0000"></span><span style="font-size:14px;margin-left:0px;color: #ee0000;background: #ffcccc;padding:5px 10px 5px 10px">截止日期:{{item.task_etime | formatDate}}</span>  </div>
         <div class="task-footer">
   <el-button round size="mini" @click="repost">申请补交</el-button>
   
</div>
    </div>
    
   
     </div>
      </mt-tab-container-item>




      <mt-tab-container-item id="队友信息">
        
        <div class="teammate-data"  v-for="(items, index) in users" :key="index">
          <!-- <div v-for="(items, index) in users" :key="index" class="text item">
              <div class="box-teammate">
                  <div class="teammate-title">
                    <div class="teammate-title-left">
                       <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="50"></el-avatar>
                    </div>
                    <div class="teammate-title-right"> 
                        <div class="teammate-name">{{items.account}}</div>
                         <div class="teammate-sex"> <i class="el-icon-male"  style="color:blue;font-size:20px;font-weight:bold" v-if="issex"></i> 
                                          <i class="el-icon-female"  style="color:red;font-size:20px;font-weight:bold" v-else></i></div>
                       
                    </div>
                   <div class="teamate-title-center">
                    
                    
                    
                   </div>
                  </div>
                  
                  <div class="teammate-number"> <span>联系方式:</span>12312312312312312312</div>

                  <div class="teammate-footer">

                     <div class="teammate-desc" style="margin-right:10px"><el-button size="mini"  @click="$router.push({name:'teammate1',params:{id:items.account}})">队员详情</el-button></div>
                    <div class="teammate-desc"> <el-button   size="mini" @click="follow">关注队员</el-button></div>
                  </div>
              </div>

          </div>          -->
          <div class="text item"  v-if="items.status === '1'">
              <div class="box-teammate">
                <div class="teammate-shenfen">
                          <el-tag type="danger" style="font-size:16px;background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);color:#ffffff"  v-if="items.user_status === '2'" size="medium"> 
                          <i class="iconfont icon-renyuanxinxi" style="font-size:24px;margin-right:5px;"></i>队长</el-tag>
                          <el-tag type="danger" style="font-size:16px;background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);color:#ffffff" v-if="items.user_status === '3'"  size="small"> 
                          <i class="iconfont icon-renyuanxinxi" style="font-size:24px;margin-right:5px;"></i>队员</el-tag>
                         </div>
                  <div class="teammate-title">
                    
                    <div class="teammate-title-left">
                       
                    </div>
                    <div class="teammate-title-right"> 
                      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="50"></el-avatar>
                                <div class="teammate-name">{{items.account}}</div>
                       
                       
                         <div class="tag-shenhe">   
               <el-tag type="danger" style="font-size:14px;"
              v-if="items.status === '0'" size="small"> 待审核</el-tag>
               <el-tag type="success" style="" v-if="items.status === '1'">已批准</el-tag>
              
                      </div> 
                    </div>
                   <div class="teamate-title-center">
                    
                    
                    
                   </div>
                  </div>
                  

                  <div class="teammate-footer">

                     <div class="teammate-desc" style="margin-right:10px"><el-button size="mini" @click="$router.push({name:'teammate1',params:{id:items.account}})">队员详情</el-button></div>                   
                  </div>
              </div>

          </div> 
        </div>
      </mt-tab-container-item>



            <mt-tab-container-item id="项目进程">
     <div class="steps">
  <el-steps direction="horizontal" :active="active" finish-status="success">
    <el-step title="队伍组队中" description="目前队内人数:5/7"></el-step>
    <el-step title="项目制作中"></el-step>
    <el-step title="项目完成" ></el-step>
  </el-steps>

  
        </div>

          <div class="liuyanban">
           


      <el-dialog title="留言信息" :visible.sync="dialogFormVisible" style="width:600px;margin-left:-100px;margin-top:-10vh">
  <el-form :model="form" >
    <el-form-item label="留言人" :label-width="formLabelWidth" style="margin-left:-10px">
     <v-input v-model="username"></v-input>
    </el-form-item>
    <el-form-item label="留言栏" :label-width="formLabelWidth" style="margin-left:-10px">
 <v-textarea v-model="message" ref="message"></v-textarea>
     
    </el-form-item>
    <el-form-item label="文件上传" :label-width="formLabelWidth">
      <el-upload 
    :file-list="fileList"
    :auto-upload="false">
    <el-button slot="trigger" type="primary">选择文件</el-button>
   
</el-upload>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
     <el-button type="primary" @click="handleSend" >确 定</el-button>
  </div>
</el-dialog>


            
    <h4 style="margin-bottom:-40px;margin-left:40%;">留言板</h4>
         <el-button  class="send-button"  @click="dialogFormVisible = true" type="primary" plain size="medium ">发送留言</el-button>
    <v-list :list="list" @reply="handleReply" :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)" ></v-list>
    <div class="block">
  
  
      <div class="tabListPage" >
           <el-pagination   
            @size-change="handleSizeChange" 
                          @current-change="handleCurrentChange" 
                          :current-page="currentPage" 
                          :page-sizes="pageSizes" 
                          :page-size="PageSize" layout="total, sizes, prev, pager, next" 
                          :total="totalCount" > 
             </el-pagination>
       </div>




</div>
          </div>
          </mt-tab-container-item>
    </mt-tab-container>
  </div>

    </div>
 <div v-if="childComponent">
      <router-view></router-view>
      </div>

  </div>
</template>
<script>
import {formatDate,DateToTimestamp} from '@/utils/mUtils'
import { Toast } from 'mint-ui'
import vInput from '../../components/input.vue'
import vTextarea from '../../components/Textarea.vue'
import vList from '../../components/List.vue'
export default {
  data() {
    return {
      display:true,
      childComponent:this.$route.params.display,
      id: this.$route.params.id,
      message:[],
      users:[],
      list: [],
      selected: '我的任务',
      issex:true,
      status:'1',
      active:0,
      values: 3,
       currentPage: 1,
      pageSize: 1,
      total: 0,
            // 总数据
           tableData:[],
           // 默认显示第几页
           currentPage:1,
           // 总条数，根据接口获取数据长度(注意：这里不能为空)
           totalCount:1,
           // 个数选择器（可修改）
           pageSizes:[1,2,3,4],
           // 默认每页显示的条数（可修改）
           PageSize:1,

    };
},
components: {
    vInput,
    vTextarea,
    vList
  },
 methods: {
   index(){ //在当前页面只显示我的组件
             this.display = true;
             this.childComponent = false;
         },
     child(){//在当前页面只展示子组件
             this.display = false;
             this.childComponent = true;
         },
       
           go(){
      this.$router.push('/setTeam');
    },
        //添加日程
        add () {
      Toast({
        message: '添加成功',
        position: 'center',
  iconClass: 'icon el-icon-check',
        duration: 2000,
        className: 'toasts'
      })
    },

    posttask(){

    },
    repost(){

    },
     follow () {
      Toast({
        message: '关注成功',
        position: 'center',
  iconClass: 'icon el-icon-check',
        duration: 2000,
        className: 'toasts'
      })
    },

    getData(){
             // 这里使用axios，使用时请提前引入
             axios.post(url,{
                  orgCode:1
             },{emulateJSON: true},
             {
               headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",} 
              }
              ).then(reponse=>{
                   console.log(reponse)
                   
              }) 
         },
       // 分页
        // 每页显示的条数
       handleSizeChange(val) {
           // 改变每页显示的条数 
           this.PageSize=val
           // 注意：在改变每页显示的条数时，要将页码显示到第一页
           this.currentPage=1
       },
         // 显示第几页
       handleCurrentChange(val) {
           // 改变默认的页数
           this.currentPage=val
       },



    handleSend: function () {
      
      if (this.username === '') {
        window.alert('请输入昵称')
        return
      }
      if (this.message === '') {
        window.alert('请输入留言内容')
        return
      }
    this.dialogFormVisible = false




      
      // 数组list存储了所有的留言内容，通过函数给list添加一项留言数据，添加成功后把文本框置空
      this.list.push({
        name: this.username,
        message: this.message
      })
      // 将数据赋值给tableData
                   
      this.message = '',
      dialogFormVisible = false;
    },
    handleReply: function (index) {
      this.dialogFormVisible = true
      var name = this.list[index].name
      this.message = '回复@' + name + ':'
       dialogFormVisible = true
      this.$refs.message.focus()
    },
 handleSizeChange(newSize) {
      // pagesize改变触发
      this.pageSize = newSize
    },
    handleCurrentChange(newPage) {
      // 页码改变触发
      this.currentPage = newPage
      
    },
 async getUserList() {
      
      this.total = this.list.length
      console.log(this.userList)
    },
         
},
created(){
this.getUserList();
      this.display = true;
    this.childComponent = false;

  this.nowtime = formatDate(new Date())
    //获取任务
      this.$api.team.getTask(this.id)
      .then(res => {
          this.message = res.data     
          console.log(this.message)
        }).catch((reject) => {
          console.log('无法获取')
        })

        //获取队员信息
      this.$api.team.getTeamuser(this.id)
      .then(res => {
          this.users = res.data     
        }).catch((reject) => {
          console.log('无法获取')
        })
},

filters:{
       stime(task_stime,nowtime,task_etime){
       const stime = DateToTimestamp(task_stime);
       const ntime = DateToTimestamp(nowtime);
       const etime = DateToTimestamp(task_etime);
       if(ntime < stime){ 
         return '未开始'
       }else if((stime<=ntime) && (ntime<=etime)){
         return '进行中'
       }else if(ntime>etime){
         return '已结束'
       }
     },
     
  formatDate (time) {
    let date = new Date(time)
    return formatDate(date, 'YYYY-MM-dd')
},
},
watch:{
         $route(to){
         if(to.path == '/task2' || to.path == '/task2/'){
             this.index()
         }else{
             this.child()
         }
         },
         childComponent(newValue){
            // 通过监测传过来的参数的变化来显示子组件，如果是直接输入子组件路径，没有监测到参数，则跳到我的页面
            if(!newValue){ //传过来为true,取非,显示我的组件
              this.index();
              this.$router.push('/task2')
            }else if(newValue){
                this.child();
            }
         }
        
    }
}
</script>

<style scoped>
  .card{
  width:375px;
}
 .box{
     border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
     padding:20px;
     margin:20px;
     background: #eaf1ff;
  }
.title{
  color:#67C23A;
  margin:10px;
  font-size:18px;
}
.page-navbar{
  margin-top:50px
}
.time{
 
  margin:10px;
  font-size:14px;
}
 .button{
    position:fixed; left:120px; bottom:55px; font-size:18px; z-index:9999;
  }
  .task-footer{
    text-align: right;
    margin-top: 30px;
  }



  .box-teammate{
       border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
     padding:20px;
     margin:20px;
     background: #eaf1ff;
     margin-bottom: 30px;
  }

  .teammate-footer{
      text-align: right;
      display: inline-flex;
      margin-left: 140px;
      margin-top: 30px;
  }

  .teammate-title{
    display: flex;
    margin-bottom: -20px;
  }
 .teammate-title-left{
    flex: 1;
    margin-top:30px
  }
  .teammate-title-right{
    margin-right: 10px;
    margin-top: 35px;
    flex: 3
  }
  
  .teammate-name{
    font-size: 18px;
    color: #303133;
  }
  .teammate-sex{
    font-size: 16px;
    margin-top: 5px;
    color: #909399;
  }
  .tag-shenhe{
    float: right;margin-top: -50px;
    margin-right: 20px;

  }
  .teammate-number{
    text-align: left;
    margin-top: 40px;
    margin-left: 5%;
    color: #606266;
  }
  .teammate-desc{
  }

    .steps{
      height: 300px;
      margin-left: 10%;
      margin-top: 30px;
    }
  .steps-but{
    text-align: center;
    margin-top: 40px;
  }
   .steps{
      height: auto;
      width: 80%;
      margin-left: 5%;
      margin-top: 30px;
    }
  .steps-but{
    text-align: center;
    margin-top: 40px;
  }



  .message {
    margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.message div{
  margin-bottom: 12px;
  flex-direction: row;
}
.message input:focus,
.message textarea:focus{
  border: 1px solid #3399ff;
  border-radius: 5px;
}
.message .btn-con{
  text-align: center;
  display: inline-block;
}
.message .btn{
  padding: 6px 15px;
  border: 1px solid #39f;
  border-radius: 4px;
  color: #fff;
  background-color: #39f;
  cursor: pointer;
  outline: none;
}
.send-button{
  position:fixed; left:140px; bottom:0px; font-size:18px; z-index:10;
  
}
.liuyanban{
  border: 0px solid rgb(173, 173, 173);
  background: #fff;
  margin-left: 10px;
  margin-right: 20px;
  padding-top: 15px;
  margin-top: 50px;
}
</style>





