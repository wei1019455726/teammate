<template>
  <div id="xinxi">
     <mt-header fixed title="我的资料" style="background: #2C3E50">
    <router-link to="/my" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      
    </mt-header>
    <div class="one">
    <button class="but" style="" @click="actionSheet">
     <div class="cell1">
       <i class="cell-left" style="margin-top:0px">头像</i>
  <i class="el-icon-picture" style="font-size:32px;float:left;margin-left:260px;margin-top:-5px"></i>  <i class="icon el-icon-arrow-right" style="margin-top:5px"></i>
  
     </div></button>
    </div>
     

    <div class="form">
        <div class="head">基本资料</div>
      

       <router-link tag="div" :to="{path: '/xinxirevice', query: { data: '请填写你的账号昵称，让大家认识你吧！' ,name:'昵称',type:'text',status:1}}">
      <button class="but"  >
     <div class="cell">
       <i class="cell-left" >昵称</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right"> {{message.nickname}}</span>  
  
     </div></button></router-link>

     <router-link tag="div" :to="{path: '/xinxirevice', query: { data: '请填写你的真实姓名信息',name:'真实姓名',type:'text',status:2}}">
     <button class="but"  >
     <div class="cell">
       <i class="cell-left" >真实姓名</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right"> 
        {{message.user_name}}
        </span>  
  
     </div></button></router-link>

<router-link tag="div" :to="{path: '/xinxirevice', query: { data: '请填写你的电话号码',name:'电话号码',type:'tel',status:3}}">
    <button class="but"  >
     <div class="cell">
       <i class="cell-left" >电话</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right"> {{message.user_phone}}</span>  
  
     </div></button></router-link>
    
    <button class="but"  @click="getpopupVisible">
     <div class="cell">
       <i class="cell-left" >性別</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right"> 男</span>  
  
     </div></button>
     
     <router-link tag="div" :to="{path: '/xinxirevice', query: { data: '请填写你的年龄',name:'年龄',type:'number',status:4}}">
     <button class="but"  >
     <div class="cell">
       <i class="cell-left" >年龄</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right"> {{message.user_age}}岁</span>  
  
     </div></button></router-link>
   
</div>

<div class="order">
 <div class="head">其他资料</div>


<router-link tag="div" :to="{path: '/xinxirevice', query: { data: '请选择你的学校',name:'就读学校',type:'',status:5}}">
<button class="but"  >
     <div class="cell">
       <i class="cell-left" >就读学校</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right"> {{message.user_school}}</span>  
  
     </div></button></router-link>


     <router-link tag="div" :to="{path: '/xinxirevice', query: { data: '请填写你的专业',name:'专业',type:'text',status:6}}">

  <button class="but"  >
     <div class="cell">
       <i class="cell-left" >专业</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right"> {{message.user_major}}</span>  
  
     </div></button></router-link>

<button class="but"  >
     <div class="cell">
       <i class="cell-left" >兴趣爱好</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right">    <el-tag class="status1"  size="mini">唱歌</el-tag>
         <el-tag  class="status2" size="mini">游戏</el-tag></span>  
  
     </div></button>

     <router-link tag="div" :to="{path: '/xinxirevice', query: { data: '请更改你的比赛经历',name:'比赛经历',type:'textarea',status:7}}">

     <button class="but"  >
     <div class="cell">
       <i class="cell-left" >比赛经历</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right"> （修改）</span>  
  
     </div></button></router-link>
     <router-link tag="div" :to="{path: '/xinxirevice', query: { data: '请更改你的个人简介',name:'个人简介',type:'textarea',status:8}}">

     <button class="but"  >
     <div class="cell">
       <i class="cell-left" >个人简介</i>
       <i class="icon el-icon-arrow-right"></i>
  <span class="cell-right"> （修改）</span>  
  
     </div></button></router-link>
</div>
      <div class="ceshi">
        
       


      </div> 

  <!-- 中間彈出框 -->

                <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="'left'">
              <div class="picker-toolbar-title">
                <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>
                <div class="">性別选择</div>
                <div class="usi-btn-sure" @click="addrConfirm">确定</div>
              </div>
              <mt-picker ref='picker' :slots="slots" value-key='name' @change="onValuesChange"></mt-picker>
            </mt-popup>
      <!-- 下拉框組件 -->
      <mt-actionsheet
        :actions= "data"
        v-model="sheetVisible">
    </mt-actionsheet>

  </div>
  
</template>

<script>

  import {ImageUpload , ImagePreview} from 'vue-image-upload-preview'
export default {
    data() {
      return {
       
            data: [{
        name: '拍照',
        method : this.getCamera	// 调用methods中的函数
      }, {
        name: '从相册中选择', 
        method : this.getLibrary	// 调用methods中的函数
      }],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false,
 slots: [{
        values: [{
            id: 0,
            name: "男"
          },
          {
            id: 1,
            name: "女"
          },
         
        ],
      }],
      popupVisible: false,
         input: '',
         message:[]

           

      }
    },

    methods: {

      // 下拉框方法
      actionSheet: function(){
    	// 打开action sheet
      this.sheetVisible = true;
    },
    getCamera: function(){
      console.log("打开照相机")
    },
    getLibrary: function(){
      console.log("打开相册")
    },


  // 下拉選擇
     getpopupVisible() {
        this.popupVisible = true
      },
      onValuesChange(picker, values) {
        this.product = values[0].name;
      },
      addrConfirm() {
        console.log(this.product)
        this.popupVisible = false;
      },

    },
    mounted: function() {
      //获取个人信息
      this.$api.user.userinfo()
        .then(res => {
          this.message = res.data
          console.log(this.message)
        }).catch((reject) => {
          console.log('无法获取')
        })
    },
    
   
}
</script>

<style scoped>
.data{
  margin-top: 5%
}
 
  .head{
    color: #909399;
    margin-left: 10px;

  }
  .one{
      margin-top:70px;
    
    background: #ffffff;
     padding-bottom: 15px;
     height: 30px;
  }
  .form{
    margin-top:30px;
    padding-top: 20px;
    background: #ffffff;
     padding-bottom: 15px;
  }
.order{
  margin-top:30px;
    padding-top: 20px;
    background: #ffffff;
    margin-bottom: 30px;
    padding-bottom: 15px;
}
  .cell{
    text-align: left;
    width: 100%;
    height: auto;
    border: 1px solid rgb(192, 192, 192);
    
  }
  .cell-left{ 
    margin-left: 0px;
    margin-top: 15px;
    float: left;
    font-size: 16px;
  }
  .cell-right{
    float: right;
    margin-top: 15px;
    margin-right: 5px;
    color:#909399;
    font-size: 16px;
  }
  .icon{
    margin-top: 20px;
     margin-right: 5px;
    float: right;
     color:#909399;
       font-size: 16px;
  }
  .but{
    padding:10px;
    background: #ffffff;
    height: 50px;
    width: 100%;
  }



.mint-header {
  background: #fff;
  color: rgb(255, 255, 255);
  font-size: 16px;
}
 
.mint-popup {
  width: 80%;
  
}
 
.picker-toolbar-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background: #f5f5f5;
  bottom: -100px;
}
 .picker{
   
   
 }
.usi-btn-cancel,
.usi-btn-sure {
  color: #108EE9;
}


.status1{
border:1px solid rgb(89, 241, 0);background:rgb(212, 247, 239);
color:#303133;
}
.status2{
border:1px solid rgb(14, 247, 14);background:rgb(232, 255, 189);
margin-left: 5px;
color:#303133;
}


</style>