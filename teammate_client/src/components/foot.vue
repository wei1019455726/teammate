<template>
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
</template>
<style>
  
</style>
<script>
export default {
  name:'foot'
}
</script>

<style scoped>
.iconfont{
        font-size: 1rem   ;
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
       margin-top:-10px;
        color: black
       
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
    top: 25px;
    left: -37px;
    transform: rotate(120deg) translateY(-50%) translateX(-50%);
}
 
li  .icon-desc:after {
    top: -20px;
    left: 35px;
    transform: rotate(-60deg) translateY(-50%) translateX(-50%);
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
  width:100%
}
.box1{
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     padding:20px;
     margin:20px
  }



   .time {
    font-size: 13px;
    color: #999;
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


