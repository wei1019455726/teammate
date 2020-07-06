<template>
<div class="xinxireviece">
    <mt-header fixed :title="$route.query.name" style="background: #2C3E50">
    <router-link to="/myxinxi" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      
    </mt-header>

    <!-- 昵称-->
    <div class="title" style="margin-top:60px;" v-if="isshow==1">     
    <el-input v-model="userForm.nickname"   :type="$route.query.type"
  maxlength="10"
  show-word-limit 
  style="width:90%;" >  
      </el-input>
       
      <div>     
      <div class="txt">
{{$route.query.data}}
      </div>
    </div>
    </div> 
<!-- 姓名 -->
    <div class="title" style="margin-top:60px;" v-if="isshow==2">     
    <el-input v-model="userForm.user_name"   :type="$route.query.type"
  maxlength="10"
  show-word-limit 
  style="width:90%;" >  
      </el-input>
      <div>     
      <div class="txt">
{{$route.query.data}}
      </div>
    </div>
    </div>   
<!-- 专业 -->
        <div class="title" style="margin-top:60px;" v-if="isshow==6">     
    <el-input v-model="userForm.user_major"   :type="$route.query.type"
  maxlength="10"
  show-word-limit 
  style="width:90%;" >  
      </el-input>
      <div>     
      <div class="txt">
{{$route.query.data}}
      </div>
    </div>
    </div>   

<!-- 电话号码 -->
 <div class="title" style="margin-top:60px;" v-else-if="isshow==3">
<el-input v-model="userForm.user_phone"   :type="$route.query.type"
  maxlength="11"
  show-word-limit 
  style="width:90%;" >
          
          
      </el-input>
      <div>
        
      <div class="txt">
{{$route.query.data}}

      </div>
    </div>
    </div>  
    <!-- 年龄 -->
     <div class="title" style="margin-top:60px;" v-else-if="isshow==4">
<el-input v-model="userForm.user_age"   :type="$route.query.type"
  maxlength="11"
  show-word-limit 
  style="width:90%;" >
          
          
      </el-input>
      <div>
        
      <div class="txt">
{{$route.query.data}}

      </div>
    </div>
    </div>  
<!-- 就读学校 -->
 <div class="title" style="margin-top:60px;" v-else-if="isshow==5">
 <el-input placeholder="" v-model="userForm.user_school" class="input-with-select" style="width:90%">

    <el-select v-model="select" slot="prepend" placeholder="请选择" >
      <el-option label="北京大学" value="1"></el-option>
      <el-option label="清华大学" value="2"></el-option>
      <el-option label="广州大学华软软件学院" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
      <div>
        
      <div class="txt">
{{$route.query.data}}

      </div>
    </div>
    </div>  
    <!-- 比赛经历 -->
 <div class="title" style="margin-top:60px;" v-else-if="isshow==7">

     <div class="before">
            <h5 class="before-title">{{$route.query.name}}</h5>
             <div class="aLine">-</div>
                <div class="before-data">
                        测试测试测试测试测试测试测试测试测试测试
                </div>

      </div>
<el-input
  type="textarea"
 
  v-model="userForm.user_experience"
  maxlength="100"
  rows="10"
  show-word-limit
  style="margin-left:-4%;margin-top:10%;"
>
</el-input>
      <div>
        
      <div class="txt">
{{$route.query.data}}

      </div>

      
    </div>
    </div>  
    <!-- 个人简历 -->
     <div class="title" style="margin-top:60px;" v-else-if="isshow==8">

     <div class="before">
            <h5 class="before-title">{{$route.query.name}}</h5>
             <div class="aLine">-</div>
                <div class="before-data">
                        测试测试测试测试测试测试测试测试测试测试
                </div>

      </div>
<el-input
  type="textarea"
 
  v-model="userForm.user_introduce"
  maxlength="100"
  rows="10"
  show-word-limit
  style="margin-left:-4%;margin-top:10%;"
>
</el-input>
      <div>
        
      <div class="txt">
{{$route.query.data}}

      </div>

      
    </div>
    </div>  


  <button @click="sendMsg('userForm')" class="button"> 保存</button>
    </div>
</template>
 
<script>
    export default {
        
        data () {
            return {
                current: 0,
                sliderIn: true,
                textarea:'',
                select: '',
                input: '',
                isshow:this.$route.query.status,
                userForm:{
                  nickname:'',
                  user_name:'',
                  user_phone:'',
                  user_school:'', 
                  user_major:'',
                  user_experience:'',
                  user_introduce:'',
                  user_age:'',                     
                },
            }
        },
        computed:{
            
        },
        methods: {
             sendMsg(userForm) {                 	
            let userinfo = this.userForm;
						this.$api.user.putuser(userinfo).then(res =>{             			
							this.$router.push("/myxinxi");						
						})
					}
        
                
                 
            },
        created: function () {

  }

        }
    

</script>

<style scoped>

 .button{
    position:fixed;top: 10px;right: 10px; font-size:16px; z-index:9999;
    background:Transparent;border: 0px;color: #ffffff;background: #2C3E50;
;
  }
  .title{
      margin-left: 5%;
      height: auto;
  }
  .txt{
      color: #606266;
  }
  .before{
      background: #ffffff;
      margin-left: -5%;
      padding: 5%;
      padding-bottom: 10%;
  }
  .before-data{
      font-size:14px;
      color: #909399;
      margin-top: 30px;
  }
  .aLine{
      margin-top: 10px ;
            line-height: 1px;
            position: absolute;
            z-index: 99;
            
            border-right: 320px solid rgb(219, 219, 219);
            text-align: center;
            font-size: 1px;
  }
  
</style>
