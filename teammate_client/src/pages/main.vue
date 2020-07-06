
<template>
    <div id="main" >       
 <div>         
<div> <div class="page-search">
    <mt-search 
    	autofocus 
    	v-model="value" 
    	:result="filterResult"
      style="z-index:99">
    </mt-search>
  </div>

</div>
</div>


<el-row class="warp" style="width:100%">
    <el-col :span="12" class="warp-breadcrum" style="width:100%">
      <el-breadcrumb separator="/">
      
      </el-breadcrumb>
      <el-carousel :interval="5000" type="card" height="300px">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
           <img :src="item.idView" class="image"  style="width:100%;height:300px">
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>

<div class="page-navbar">
    <div class="page-title" style="text-align:center; margin-top:20px;font-size:	20px " >比赛分类</div>
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
    <div class="tab">
  
      <mt-tab-item id="学术研究类">  <i class=" el-icon-reading" style="font-size:32px;"></i><br>学术研究类</mt-tab-item>
      </div>
       <div class="tab">
     
      <mt-tab-item id="娱乐活动类" ><i class="el-icon-collection-tag" style="font-size:32px;"></i><br>娱乐活动类</mt-tab-item>
       </div>
        <div class="tab">
      
      <mt-tab-item id="体育艺术类"><i class="el-icon-basketball" style="font-size:32px;"></i><br>体育艺术类</mt-tab-item>
       </div>
    </mt-navbar>
 

 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="学术研究类">
          <el-row>
  <el-col :span="20" v-for="(item, index) in messages" :key="index" >
<el-button type="text" class="button" v-if=" item.announce_status === 0" @click="$router.push({name:'fa',params:{id:item.id,display:true}})">
    <el-card :body-style="{ padding: '0px' }" style="width:315px;">
      <img :src="'http://localhost:3000/uploads/'+ item.announce_photo " class="image">
      <div style="padding: 14px;">
        <span>{{item.announce_title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ item.announce_time }}</time>
          <div class="text">{{ item.announce_content }}</div>
        </div>
      </div>
    </el-card>
</el-button>
  </el-col>
</el-row>
      </mt-tab-container-item>
      <mt-tab-container-item id="娱乐活动类">
       <el-row>
  <el-col :span="20" v-for="(item, index) in messages" :key="index" >
<el-button type="text" class="button" v-if=" item.announce_status === 1" @click="$router.push({name:'fa',params:{id:item.id}})">
    <el-card :body-style="{ padding: '0px' }" style="width:315px;">
      <img :src="'http://localhost:3000/uploads/'+ item.announce_photo " class="image">
      <div style="padding: 14px;">
        <span>{{item.announce_title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ item.announce_time }}</time>
          <div class="text">{{ item.announce_content }}</div>
        </div>
      </div>
    </el-card>
</el-button>
  </el-col>
</el-row>
      </mt-tab-container-item>
      <mt-tab-container-item id="体育艺术类">
        <el-row>
  <el-col :span="20" v-for="(item, index) in messages" :key="index" >
<el-button type="text" class="button" v-if=" item.announce_status === 2" @click="$router.push({name:'fa',params:{id:item.id}})">
    <el-card :body-style="{ padding: '0px' }" style="width:315px;">
      <img :src="'http://localhost:3000/uploads/'+ item.announce_photo " class="image">
      <div style="padding: 14px;">
        <span >{{item.announce_title}}</span>
        <div class="bottom clearfix">
          <div class="time">{{ item.announce_time }}</div>
          <div class="text">{{ item.announce_content }}</div>
        </div>
      </div>
    </el-card>
</el-button>
  </el-col>
</el-row>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>


      
       <div class="box">
        <div class="icon-box"><router-link to="/" tag="li">
           <a> <div class="icon-img" >
            <span class="iconfont icon-shouye" style="color:#409EFF"></span><br>
            </div>
            <div class="icon-desc" >  首页
            </div>    </a> </router-link>
            
        </div>
        <div class="icon-box"><router-link to="/square" tag="li">
             <a><div class="icon-img">
            <span class="iconfont icon-shequ"></span>
            </div>
            <div class="icon-desc"> 广场</div>    </a>
             
            </router-link>
        </div>
        <div class="icon-box"><router-link to="/my" tag="li">
            <a> <div class="icon-img">
            <span class="iconfont icon-wode"></span>
            </div>
            <div class="icon-desc"> 我的</div>
            
                </a>
            </router-link>
        </div>
    </div>
    </div>


    
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import { get } from 'http'
import { Toast } from 'mint-ui';
export default {
    data(){
        return{

          messages:[],
            dingdans:[],
             imagesbox:[{id:0,idView:require("../../public/images/haibao1.jpg")},     
              {id:1,idView:require("../../public/images/haibao2.jpg")},
              {id:2,idView:require("../../public/images/haibao3.jpg")}],

      selected: '学术研究类',
      currentDate: new Date(),
      value: '',defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ],           
        }
    },
    methods:{
  
    
    },
     computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  },

    created(){
         
         this.display = true;
         this.childComponent = false;
    },
    mounted: function() {
      this.$api.announce.announceinfo()
        .then(res => {
          this.messages = res.data
        }).catch((reject) => {
          console.log('无法获取')
        })
    },
    
    
    
}

</script>

<style scoped>
     .icon-img .iconfont{
        font-size: 1.2rem;
        color:#303133;
         }
    .box{
            width: 100%;
            margin: auto;
            position: fixed;
            bottom: 0px;
            display:flex;
           margin-left: -10px;
        }
    .icon-box{
                flex:1;
                text-align: center;
                background: rgb(236, 245, 244);
                
        }
    
    .icon-desc{
        color: black;
        margin-top:-10px
    }
    .router-link-hover{
        background: rgb(188, 188, 235)
    }
  
   
   li  .icon-desc{
    display: block;
    font-size: 13px;
    text-align: center;
    padding: 10px 15px;
    overflow: hidden;
}
 
li  :hover .icon-desc {
    transform: rotate(5deg) scale(1.2);
    margin-left: 20px;
    color:  #409EFF
}           
li  :hover .iconfont{
      color:  #409EFF;
      transform: rotate(5deg) scale(1.2);
}          

li  .icon-desc:before, li  .icon-desc:after {
    opacity: 0;
    border: 1px solid #409EFF;
    content: '';
    display: block;
    position: relative;
    z-index: -1;
    margin: auto;
    width: 0px;
}
 
li  .icon-desc:before {
    top: 23px;
    left: -25px;
    transform: rotate(115deg) translateY(-50%) translateX(-50%);
}
 
li  .icon-desc:after {
    top: -20px;
    left: 25px;
    transform: rotate(-65deg) translateY(-50%) translateX(-50%);
}                
li  :hover .icon-desc:before, li  :hover .icon-desc:after{
    transition: all 0.5s ease;
    opacity: 1;
    width: 20px;
}


.lunbo img{
    width:320px;
    height:200px;
    
}
.page-search{
    
    height:50px;
}
.page-part{
  display:flex;

}
.tab{
    flex:1

}
.text item{
  width:90%;
  float: left;  
}
.box1{
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     padding:20px;
     margin:20px
  }

  .time {
    font-size: 13px;  
    color: #999;
    float: left;
  }
    .text {
    font-size: 14px; 
    width: 100%;
    height: 100%;
    color: rgb(0, 0, 0);
    margin-top: 10px;
    float: left;
    display: flex;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    margin:30px 30px -10px 30px;
    width:315px;
    left:50px;
    float:left
  }

  .image {
    width: 90%;
    display: block;
    margin:5% 5% 0 5%;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
.tab{
  
}
.mint-navbar {
  background: rgb(243, 243, 243)
}
.mint-tab-container{
  margin-bottom: 150px;
}
</style>
