<template>
  <div id="square">
   
<div class="page-navbar">
  <div class="nav-bar">
    <div class="touxiang"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div>
    <div class="top-icon"><i class="el-icon-document-copy"></i></div>
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="关注">关注
        <div class="line"></div>
      </mt-tab-item>
      <mt-tab-item id="推荐">
          
          推荐
          <div class="line"></div></mt-tab-item>
     
    </mt-navbar>
 </div>
 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="推荐">
     <el-card class="box-card2">

  <div v-for="(item, index) in messages" :key="index" class="text item" >
 
     <div class="box2">
       <div class="header">
         <div class="picture">
           <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div> 
           <span class="xinxi">
             <div class="name">{{item.user_name}}</div>
             <div class="time">{{item.account}}</div>
            </span>
          <div class="more">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link" >
                  
                    <i class="el-icon-arrow-down el-icon--right"></i>
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
            
       <div class="neirong">

            {{item.content}}

       </div>
       <div class="img">
    
    <el-image :src="'http://localhost:3000/client/upload/'+ item.square_photo"></el-image>

    <div class="footer">
     <el-button type="info" plain class="footer-bottom"> <span  style="padding-right:.1rem; font-size:18px" class="iconfont icon-xiaoxi"> </span></el-button>
 <el-button type="info" plain class="footer-bottom"  style="margin-left:30px"><i   style="padding-right:.1rem;font-size:20px" class="iconfont icon-good"></i></el-button>


    </div>
  </div>
       </div>
       
  </div>
</el-card>
      </mt-tab-container-item>
      <mt-tab-container-item id="关注">
        <el-card class="box-card2">

  <div v-for="o in 10" :key="o" class="text item">
 
     <div class="box2">
       <div class="header">
         <div class="picture">
           <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div> 
           <span class="xinxi">
             <div class="name">张三</div>
             <div class="time">10点</div>
            </span>
          <div class="more">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link" >
                  
                    <i class="el-icon-arrow-down el-icon--right"></i>
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
            
       <div class="neirong">

            撒刁圣诞节艾斯欧就打死哦加斯哦电视

       </div>
       <div class="img">
    
    <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>

    <div class="footer">
     <el-button type="info" plain class="footer-bottom"> <span  style="padding-right:.1rem; font-size:18px" class="iconfont icon-xiaoxi"> </span></el-button>
 <el-button type="info" plain class="footer-bottom" style="margin-left:30px"><i   style="padding-right:.1rem;font-size:20px" class="iconfont icon-good"></i></el-button>


    </div>
  </div>
       </div>
       
  </div>
</el-card>
      </mt-tab-container-item>
     
    </mt-tab-container>
    </div>
<el-button  icon="el-icon-plus" circle class="button"  @click="send"></el-button>
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
            <span class="iconfont icon-shequ" style="color:#409EFF"></span>
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

export default {
 data() {
    return {
      selected: '推荐',
      messages:[],
    };
  },
   methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      },
      send(){
      this.$router.push('/sendSquare');
    }

    },
    mounted: function() {
      this.$api.team.getsquare()
        .then(res => {
          console.log(res.data)
          this.messages = res.data
        }).catch((reject) => {
          console.log('无法获取')
        })
    },
};
</script>

<style scoped>
.page-navbar{
  margin-bottom: 70px;
   
}
.card{
  width:375px;
  
}
 .box2{
     border-radius: 2px;
    
     background: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     width:305px;
     padding:10px 20px 10px 20px;
     margin:60px 10px -20px -10px
  }
  .box-card2 {
    width: 375px;
    margin-top:-20px;
    border-top:3px solid #ffffff;
  }

 .nav-bar{
      position: fixed;
    width: 100%;
    background: rgb(243, 243, 243);
    z-index: 10;

  }
  .button2{
     
  width:375px;
    border:0;
   background: rgb(243, 243, 243);
    margin-left: -20px;
  }

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
.mint-navbar {
  width: 50%;
  margin: auto;
  background: Transparent;
  
}
.mint-tab-item{
  padding: -30px;
}

.mint-navbar .mint-tab-item.is-selected{
   transform: scale(1.2);
   border:0px;
   font-weight: bold
}
.mint-navbar .mint-tab-item.is-selected .line{
  border-bottom: 3px solid #409EFF;
}
.mint-tab-container{
  margin-top:-0px;
  border-top:2px solid #ffffff;
}

.line{
  width: 20px;
  height: 20px;
  margin:-10px 0 0 23px;
  
}
.el-card {
  background:Transparent;
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
.more{
  float: right;
}
  .el-dropdown-link {
    cursor: pointer;
    
  }
  .el-icon-arrow-down {
    font-size: 16px;
    margin-top: 10px;
  }

  .neirong{
    margin-bottom: 15px
  }
  .footer-bottom{
    border: 0px;
    background: #FFFFFF;
    height: 40px;
    margin-top: 20px;
    width: 44.9%
  }
  .el-button--info.is-plain{
    background: #FFFFFF;
  }


  .page-part{
  width:35%;
}
.touxiang{
float: left;
margin: 5px 0px 0px 5px;
}
.top-icon{
float: right;
margin: 7px 15px 0px 0px;
font-size: 24px;
color: rgb(204, 190, 0);
font-weight: bold;
}

.button{
    position:fixed; right: 20px; bottom:70px; font-size:24px; z-index:9999;
    background: rgb(4, 216, 181);
    color: #ffffff;
  }
</style>