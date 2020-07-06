<template>
  <div id="my">
        <div class="touxiang">
          
       <div class="gerenxinxi">
           <div class="data-left"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="60"></el-avatar></div>
            <div class="data-center"><div class="data-name">{{messages.user_name}}</div>
            <div class="data-id">{{messages.nickname}}</div>
            </div>
             <div class="data-right"><router-link to="/myxinxi" tag="li"><i>编辑信息</i><i class="el-icon-arrow-right"></i></router-link></div>
       </div>

        </div>
        <div class="mydata">
           
            <div class="aLine">-</div>
            <div class="box1">
                 <div class="mydata-head">我的队伍</div>
                  
                <div class="tab">
                    <div class="tab-icon"><router-link to="/myteam" tag="li"> <span class="iconfont icon-chuanyuanxinxi" style="color:red"></span></router-link></div>
                    <div class="tab-desc" >我的队伍</div>
                </div>
                <div class="tab">
                    <div class="tab-icon"><router-link to="/myteam" tag="li"> <span class="iconfont icon-ziyuan199" style="color:#7ef5c3"></span></router-link></div>
                    <div class="tab-desc">我的审核</div>
                </div>
                <div class="tab">
                    <div class="tab-icon"> <router-link to="/myteam" tag="li"><span class="iconfont icon-ziyuan154" style="color:#7ba9fd "></span></router-link></div>
                    <div class="tab-desc">项目进程</div>
                </div>
                <div class="tab">
                    <div class="tab-icon"> <router-link to="/myteam" tag="li"><span class="iconfont icon-daipingjia" style="color:rgb(247, 178, 31)"></span></router-link></div>
                    <div class="tab-desc">项目评价</div>
                </div>
            </div>
        </div>
        <div class="xinxi">
        <router-link tag="div" to="/myteam">

  <div class="but"  >
     <div class="cell">
         <i class="cell-icon el-icon-star-on" style="color:#f18f4e"></i>
       <i class="cell-left" >我的关注</i>
       
       <i class="icon el-icon-arrow-right"></i>
 
  
     </div></div></router-link>

   <router-link tag="div" to="/liuyanban">

  <div class="but"  >
     <div class="cell">
         <i class="cell-icon el-icon-chat-line-square" style="color:#89be6a" ></i>
       <i class="cell-left" >留言板</i>
       
       <i class="icon el-icon-arrow-right"></i>
 
  
     </div></div></router-link>
 <router-link tag="div" to="/shenke">

  <div class="but"  >
     <div class="cell">
         <i class="cell-icon iconfont  icon-zhanghaoguanli" style="color:#05d8aa"></i>
       <i class="cell-left" >我的审核</i>
       
       <i class="icon el-icon-arrow-right"></i>
 
  
     </div></div></router-link>

       <router-link tag="div" to="/tool">

  <div class="but"  >
     <div class="cell">
         <i class="cell-icon iconfont  icon-riqian" style="color:#d600dd"></i>
       <i class="cell-left" >日程</i>
       
       <i class="icon el-icon-arrow-right"></i>
 
  
     </div></div></router-link>
        
        </div>
         <el-button type="primary" round  @click="go" style="width:230px;text-align:center;margin:30px 0 80px 70px"><span class="iconfont icon-tuichudenglu" style="font-size:20px;margin-right:10px;"></span>注销</el-button>
          <div class="box">
        <div class="icon-box"><router-link to="/" tag="li">
           <a> <div class="icon-img" >
            <span class="iconfont icon-shouye" ></span><br>
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
            <span class="iconfont icon-wode" style="color:#409EFF"></span>
            </div>
            <div class="icon-desc"> 我的</div>
            
                </a>
            </router-link>
        </div>
    </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            messages:[],
        }
    },
    mounted: function() {
      this.$api.user.userinfo()
        .then(res => {
          this.messages = res.data
          console.log(this.messages)
        }).catch((reject) => {
          console.log('无法获取')
        })
    },
    methods: {
        
        
           go(){
      this.$router.push('/Login');
    }
    },
    computed:{
    
  }
}

</script>
<style scoped>
 .icon-img .iconfont{
        font-size: 1.2rem;
        color:#000000;
         }
    .box{
            width: 100%;
            margin: auto;
            position: fixed;
            bottom: 0px;
            display:flex;
           margin-left: -20px;
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
        background: rgb(247, 207, 31)
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
    border: 1px solid rgb(64, 255, 105);
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
    #my {
        
        
        justify-content:center;
       
    }
  
    .iconfont{
         
     font-size:32px;
    }
    


    .touxiang{
        height:150px;
        color: #303133;
        background-image: linear-gradient(-90deg, #b8deff 50%, #7ba9fd 100%);
        padding: 10px;
    }

    .gerenxinxi{
     display: flex;
     margin-top: 20px;
    }
    .data-id{
        font-size: 14px;
        margin-top: 5px;
    }
    .data-name{
        font-size: 16px;
    }
    .data-left{
        flex: 1;
    }
    .data-center{
        flex: 2.2;
        margin-top: 10px;
    }
    .data-right{
        flex: 1;
        margin-top: 20px;
    }

    .mydata{
        width: 100%;
        height: auto;
        padding: 20px;
        
    }
    .aLine {
       margin-top: -20px ;
            line-height: 1px;
            position: absolute;
            z-index: 99;
            margin-left: 0px;
            border-right: 330px solid rgb(219, 219, 219);
            text-align: center;
            font-size: 1px;
}

    .mydata-head{
       float: left;
       margin-top: -10%;
       margin-left: -5px;
       position:absolute;
       font-size: 14px;
       color: #606266;
    }
    .box1{
        width: 84%;
        background: #ffffff;
        padding: 20px;
        padding-top: 50px;
        padding-bottom: 30px;
        margin-left: -10px;
        border-radius: 8px;
        position: absolute;
        margin-top: -60px;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, .04);
        display: flex;
        
    }
    .tab{
        flex: 1;
        text-align: center;
    }
    .tab-desc{
        font-size: 14px;
        color: #303133;
        margin-top: 10px;
    }
    .tab-icon .iconfont{
        font-size: 32px;
    }

.xinxi{
        margin-top: 90px;
        border: 0px;
       
    }


  .cell{
    text-align: left;
    width: 95%;
    height: auto;
    margin-top: -10px;
    
    
  }
  .cell-left{ 
    margin-left: 5px;
    margin-top: 20px;
    float: left;
    font-size: 16px;
  }
  .cell-icon{
    float: left;
    margin-top: 18px;
    margin-right: 5px;
    
    font-size: 24px;
  }
  .icon{
    margin-top: 20px;
     margin-right: 5px;
    float: right;
     color:#414141;
       font-size: 24px;
  }
  .but{
    padding:10px;
    background: #ffffff;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid rgb(192, 192, 192);
  }


</style>
