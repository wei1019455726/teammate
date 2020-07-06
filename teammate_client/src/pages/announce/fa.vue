<template>
  <div id="xinxi">
   <div v-show="display">
    <mt-header fixed  title="比赛名字" style="background: #2C3E50">
      <router-link to="/main" slot="left">
      <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="title">
     <img :src="imgUrl" style="width:100%;height:100px;margin-top:30px">
     <div class="zhezhu"></div>
    <div class="text">
      <span class="img" style="width:30%">
         <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
      </span>
      <div class="neirong">
          <div class="announce-title">{{message.announce_title}}</div>
          <div class="announce-people">发布人：{{message.announce_sperson}}</div>
          <div class="announce-phone">联系号码：{{message.announce_phone}}</div>
          <div class="announce-time">发布时间：{{message.announce_time}}</div>
      </div>
      <div class="announce-data" style="margin-top:15px;">
        <div class="text more" ref="more">
        占位
      </div>
      <div class="content" v-for="(item, index) in curData" :key="index">
        <div class="text">
          <div :class="{'retract': item.status}" :style="{'max-height':item.status ? textHeight: ''}" ref="textContainer">
           比赛内容： {{message.announce_content}}
          </div>
          <div class="btn">
            <p v-if="item.status" @click="item.status = false">展开</p>
            <p v-if="item.status == false" @click="item.status = true">收起</p>
          </div>
        </div>
      </div>

      </div>

    </div>
      </div>
<!-- 创建按钮 -->
<el-button type="primary" icon="el-icon-s-flag" circle class="button" @click="$router.push({name:'setTeam',params:{id:id}})"></el-button>
      <el-card class="box-card">

  <div v-for="(item, index) in messages" :key="index"  class="text1 item1" >
  
     <div class="box" v-if=" item.activity_status === 1">
       <div class="header">
         <div class="picture">
           <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="width:40px;"></el-avatar></div> 
           <span class="xinxi">
             <div class="name">张三</div>
             <div class="time">10点</div>
            </span>
            <div class="code"><el-tag type="danger"  effect="plain" >{{ item.activity_stime | time(nowtime,item.activity_etime)}}</el-tag> </div>
          <div class="more1">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link" >
                  
                    <i class="el-icon-arrow-down" style="color：gray"></i>
                </span>
                <el-dropdown-menu slot="dropdown" style="margin-right:-30px">
                <el-dropdown-item command="a">关注用户</el-dropdown-item>
               <el-dropdown-item command="b">不感兴趣</el-dropdown-item>
               <el-dropdown-item command="c">举报帖子</el-dropdown-item>
                
            </el-dropdown-menu>
              </el-dropdown>

          </div>
       </div>
          <el-divider style="margin-top:-50px"></el-divider>
       <div class="team-title">{{ item.activity_title }}</div>
        <div class="team-data">
            <div class="team-place">活动地点</div>
            <div class="team-time">活动时间:{{ item.activity_stime }}</div>
            <div class="team-people">目前人数：{{ item.activity_person }}</div>
            <div class="team-tel">联系电话:{{ item.activity_cleader }}</div>
        </div>
        <div class="footer">
          <!-- 查看详细按钮 -->
          <el-button plain style="font-size:16px" @click="$router.push({name:'teamdata',params:{id:item.id}})" > <span class="el-icon-position" style="margin-right:10px;font-size:16px"></span>详情</el-button>
       </div>
       </div>
       
  </div>
</el-card>


  </div>
  <div v-if="childComponent">
      <router-view></router-view>
      </div>
    </div>
  
</template>

<script>
import { Toast } from 'mint-ui';
import {formatDate,DateToTimestamp} from '@/utils/mUtils'
export default {
    name:'xinxi',
     data() {
      return {
        display:true,
        childComponent:this.$route.params.display,
        imgUrl:require('../../../public/images/guanggao.jpg'),
        curData:[],
        messages:[],
         curData: [
          { desc: '' },         
        ],
        textHeight: null,
        id: this.$route.params.id,

      message:{
        announce_content:'',
        announce_time:'',
        announce_photo:'',
        announce_title:'',
        announce_phone:'',
        announce_sperson:''

      },

      nowtime:''
      }
    },

//判定组队时间
     filters:{
       time(activity_stime,nowtime,activity_etime){
       const stime = DateToTimestamp(activity_stime);
       const ntime = DateToTimestamp(nowtime);
       const etime = DateToTimestamp(activity_etime);
       if(ntime < stime){ 
         return '未开始'
       }else if((stime<=ntime) && (ntime<=etime)){
         return '进行中'
       }else if(ntime>etime){
         return '已结束'
       }
     },
     
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
        
        // 计算文字 显示展开 收起
      calculateText() {
        // 获取一行文字的height 计算当前文字比较列表文字
        let oneHeight = this.$refs.more.scrollHeight
        let twoHeight = oneHeight * 1.8 || 40
        this.textHeight = `${twoHeight}px`
        let txtDom = this.$refs.textContainer
        for (let i = 0; i < txtDom.length; i++) {
          let curHeight = txtDom[i].offsetHeight
          if (curHeight > twoHeight) {
            this.$set(this.curData, i, Object.assign({}, this.curData[i], { status: true }))
          } else {
            this.$set(this.curData, i, Object.assign({}, this.curData[i], { status: null }))
          }
        }
      },
    },
   created() { 
      this.display = true;
      this.childComponent = false;

      this.nowtime = formatDate(new Date())

      console.log('mian传过来的announce_id'+this.id)

//获取比赛
      this.$api.announce.getOneAnnounce(this.id)
      .then(res => {
          this.message = res.data     
        }).catch((reject) => {
          console.log('无法获取')
        })
//获取队伍      
        this.$api.team.activityinfo(this.id)
      .then(res => {
          this.messages = res.data 
        }).catch((reject) => {
          console.log('无法获取')
        }),


        this.curData.forEach((ele, index) => {
        this.$set(this.curData, index, Object.assign({}, ele, { status: null }))
      })
      // DOM 加载完执行
      this.$nextTick(() => {
        this.calculateText()
      })

      window.onresize = () => {
        this.curData.forEach((ele, index) => {
          this.$set(this.curData, index, Object.assign({}, ele, { status: null }))
        })
        setTimeout(() => {
          this.calculateText()
        }, 0)
      }

      },

   watch:{
         $route(to){
         if(to.path == '/fa' || to.path == '/fa/'){
             this.index()
         }else{
             this.child()
         }
         },
         childComponent(newValue){
            // 通过监测传过来的参数的变化来显示子组件，如果是直接输入子组件路径，没有监测到参数，则跳到我的页面
            if(!newValue){ //传过来为true,取非,显示我的组件
              this.index();
              this.$router.push('/fa')
            }else if(newValue){
                this.child();
            }
         }
        
    }
      
    }

      
    

    

</script>

<style scoped>
.data{
  margin-top: 25%
}
 .image{
   margin-top:20px;
   width:100%;
   height:100px;
   margin-bottom:20px
 }
 .text{
     padding:16px;
     font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
     font:14px Base;
     
 }
 .text {
    font-size: 14px;
  }

  .item1 {
    padding: 18px 0;
    margin-left: 5px
  }

  .box-card {
    width: 375px;
    border-radius: 20px
  }
  .box{
     border-radius: 2px;
    position: relative;
     background: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     border-radius: 4px;
     width:305px;
     padding:10px 20px 10px 20px;
     margin:-20px 10px 0 -10px
  }
  .button{
    position:fixed; left:300px; bottom:50px; font-size:32px; z-index:9999;
  }
  
  
  .text span{
    width: 30%;
    display: inline-block;
    
  }
  .neirong{
    
   float: right;
   display: table-cell;
    margin-right: 10%;
    width: 50%;
    word-wrap:break-word; overflow:hidden;
    top:-5px;
    position: relative;
  }
  .img .el-image {
      width: 100%;
      margin-left: 15px;
      height: 105px;
  }
  .announce-title{
    position: relative;
    font-size: 18px;
  }
 .announce-people{
   font-size: 13px ;
  margin-top: 5px;
   color: rgb(121, 121, 121)
 }
  .announce-phone{
   font-size: 13px ;
  margin-top: 5px;
   color: rgb(121, 121, 121)
 }
 .announce-time{
   font-size: 13px ;
  margin-top: 5px;
   color: rgb(121, 121, 121)
 }

.header{
  margin-bottom: -20px;
}
.picture{
    display: inline-block;
}
.xinxi{
    display: inline-block;
    margin-left: 1rem;
    font-size:12px ;
    font-weight:lighter;
}
.name{
  margin-bottom:5px;
}
.code{
  position: relative;
   top: -10px;
  display: inline;
 
  margin-left: 100px;
}
.el-tag.el-tag--danger {
  margin-top:10px;
 
 width: 60px;
}
.more1{
  float: right;
}
  .el-dropdown-link {
    cursor: pointer;
    
  }
  .el-icon-arrow-down {
    font-size: 16px;
    margin-top: px;
  }
 .team-data{
   background: rgb(240, 240, 240);
   margin:10px 10px 10px 0px;
   width:  285px;
   
   padding: 10px 10px 10px 10px;
 }
 .team-data div{
   color:grey;
   margin-top: 10px;
 }
.footer{
  margin-left: 70%;
}
.el-button{
  border: 0px
}

 .content {
      display: flex;
      margin-bottom: 10px;
    }

    .text {
      position: relative;
      font-size: 13px;
      line-height: 21px;
      float: right;
      color: #666666;
      padding-top:0px;
    }

    .retract {
      position: relative;
      overflow: hidden;
    }

    .retract:after {
      content: '...';
      position: absolute;
      bottom: 0;
      right: 0px;
      width: 25px;
      padding-left: 30px;
      background: linear-gradient(to right, transparent, rgb(243, 243, 243) 45%);
    }

    .btn {
      position: absolute;
      right: -10px;
     
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 2px;
      color: #FFAD41;
      cursor: pointer;
    }

    .more {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 2px;
      color: #666666;
      margin-right: -40px;
      visibility: hidden;
      
    }
.zhezhu{
  background: rgb(243, 243, 243);
  height: 20px;
  width: 100%;
  position:absolute;
  margin-top:-20px;
}
</style>