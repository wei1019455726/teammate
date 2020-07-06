<template>
    <div class="index">
       <mt-header fixed title="" style="background: #2C3E50">
    <router-link to="/login" slot="left">
      <mt-button icon="back" style=""></mt-button>
    </router-link>
</mt-header>
        <div class="register-wrap">
            
            <h3 style="color:rgb(226, 226, 226)">注册</h3>
          <br>
          
            	<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
                <el-form-item prop="account" class="login-item">
					    <span class="loginTips el-icon-eleme"></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')"  class="area" type="text" placeholder="账号" v-model="loginForm.account" ></el-input>
					</el-form-item>
					<el-form-item prop="user_name" class="login-item">
					    <span class="loginTips el-icon-user"></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')"  class="area" type="text" placeholder="用户名" v-model="loginForm.user_name" ></el-input>
					</el-form-item>
					<el-form-item prop="password" class="login-item"> 
					    <span class="loginTips iconfont icon-yuechi"></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')" class="area" type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
          <el-form-item prop="user_phone" class="login-item"> 
					    <span class="loginTips el-icon-phone" ></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')" class="area" type="tel" placeholder="联系方式" v-model="loginForm.user_phone"></el-input>
					</el-form-item>
          <el-form-item
        prop="seccode"
        class="inputbar"
      >
         <span class=" iconfont icon-huixingzhen" style="  font-size:24px;  color: rgb(213, 230, 225);float:left;margin-right:10px;margin-top:0px;margin-left:3%"></span><el-input
          class="log-input"
          v-model="loginForm.seccode"
          placeholder="验证码"
          prefix-icon="icon-login_auth"
          @keydown.enter.native="submitForm('loginForm')"
        >
       
        </el-input>
         <div class="checkCode"  @click="createCode"><el-button round>{{ checkCode}} </el-button></div>
      </el-form-item>
					   
					
					<el-form-item>
				    	<el-button   @click="submitForm('loginForm')" class="submit_btn el-icon-right" style="font-size:50px;" round> </el-button>
				  	</el-form-item>
					  
				</el-form>
            <div style="margin-top:50px;color:white">
            <router-link to="/login" >
            <span>已有账号，马上登录</span>
            	</router-link>
              </div>
        </div>
    </div>
</template>


<script>
    import {setLocalStorage} from '@/utils/localStorage'
export default {
    data(){
        return {
           loginForm: {
					user_name: '',
          password: '',
          account:'',
          user_phone:'',
           seccode:""
        },
        checkCode:'',
				rules: {
					user_name: [
			            { required: true, message: '请输入用户名', trigger: 'blur' ,},
						{ min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
          ],
          	account: [
						{ required: true, message: '请输入账号', trigger: 'blur' }
          ],
          	user_phone: [
						{ required: true, message: '请输入电话号码', trigger: 'blur' }
          ],
           seccode: [{ required: true, message: "请输验证码", trigger: "blur" }]
				}
			}
            
        
    },
    methods:{
        showMessage(type,message){
                this.$message({
                    type: type,
                    message: message
                });
            },
		    submitForm(loginForm) {
				this.$refs[loginForm].validate((valid) => {
					if (valid) {
						let userinfo = this.loginForm;
						this.$api.user.postregister(userinfo).then(res =>{
							if(res.code == -1){
								this.showMessage("info",res.data.message)
							}else{
                //成功验证             								
                this.$router.push({ path: '/login' })
                this.showMessage("info",res.data.message)
							}
						})
					}
				});
			},
      createCode() {
		let code = "";
		const codeLength = 4; //验证码的长度  
		const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
		for(let i = 0; i < codeLength; i++) { //循环操作  
			let index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
			code += random[index]; //根据索引取得随机数加到code上  
		}
		this.checkCode = code; //把code值赋给验证码  
	},
	login() {
      if(this.form.seccode != this.checkCode) {
         this.$message({
              message: "验证码错误，注意大写字母",
              type: "warning"
        });
        this.createCode();
        return false;
      };
      var fd = new FormData();
      fd.append("username", this.form.username);
      fd.append("password", this.form.password);
      loginPost(fd).then(res => {
          console.log(res);
          if (res.code == 200) {
            localStorage.setItem("myToken", res.obj.token);
            localStorage.setItem("username", res.obj.userName);
            this.$message({
              message: "登录成功",
              type: "success"
            });
            this.$router.push("/");
            // this.setUserName(res.obj.userName);
          } else {
            this.$message({
              message: res.content,
              type: "warning"
            });
          }
        })
        .catch(res => {
          console.log(res);
        });

    },
    },
   mounted () {
    this.createCode();
  },
}

</script>

<style scoped>

.index{
  position: absolute;
    width: 100%;
		height:100%;
		background: url(../../../public/images/bg3.jpg) no-repeat ;
		background-size: cover ;
}
.register-wrap{
  z-index: 0;
		position: absolute;
		top: 35%;
        left: 50%;
		transform: translate(-50%,-50%);
		background: rgba(0,0,0,0.5);
		margin-top: 20%;
    
		 
		width:250px;
		height: 440px;
		border-radius: 30px 0 30px 30px;
		padding: 25px;
		text-align: center;
		 box-shadow:10px 10px 10px rgb(3, 3, 3);

	

}
input{
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid;
    padding: 10px;
    box-sizing: border-box;
    
}

.submit_btn {
 
  width: 100px;
  height: 50px;
  z-index: 99;
  margin: 0 auto;
 padding-bottom: 13px;
   background:-webkit-gradient(linear, left top, left bottom, color-start(0.05, #599bb3), color-stop(1, #408c99));  
    background:-moz-linear-gradient(top, #599bb3 5%, #408c99 100%);  
    background:-o-linear-gradient(top, #599bb3 5%, #408c99 100%);  
    background:-ms-linear-gradient(top, #599bb3 5%, #408c99 100%);  
    background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);  
    background:-webkit-linear-gradient(top, #599bb3 5%, #408c99 100%);  
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#599bb3', endColorstr='#408c99',GradientType=0);  
    border:0px solid #dcdcdc;  
    -webkit-border-top-left-radius:8px;  
    -moz-border-radius-topleft:8px;  
    border-top-left-radius:8px;  
    -webkit-border-top-right-radius:8px;  
    -moz-border-radius-topright:8px;  
    border-top-right-radius:8px;  
    -webkit-border-bottom-left-radius:8px;  
    -moz-border-radius-bottomleft:8px;  
    border-bottom-left-radius:8px;  
    -webkit-border-bottom-right-radius:8px;  
    -moz-border-radius-bottomright:8px;  
    border-bottom-right-radius:8px;  
    -moz-box-shadow:0px 10px 14px -7px #276873;  
    -webkit-box-shadow:0px 10px 14px -7px #276873;  
    box-shadow:0px 10px 14px -7px #276873;  
  color: rgb(57, 230, 230);
  font-size: 18px;
  line-height:25px;
  text-indent:5px;
  margin-bottom: 5px;
    
}
span {
  cursor: pointer;
  color: #a39d9d
}
span:hover {
  color: #41b883;
}
select{
  width: 50px;
}
.submit_btn :hover{
				
				
				opacity: 0.8;
				transition: opacity 0.5s;
	-webkit-transition: opacity 0.5s;
 background-color:#f5f5f5;  
    background:-webkit-gradient(linear, left top, left bottom, color-start(0.05, #408c99), color-stop(1, #599bb3));  
    background:-moz-linear-gradient(top, #408c99 5%, #599bb3 100%);  
    background:-o-linear-gradient(top, #408c99 5%, #599bb3 100%);  
    background:-ms-linear-gradient(top, #408c99 5%, #599bb3 100%);  
    background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);  
    background:-webkit-linear-gradient(top, #408c99 5%, #599bb3 100%);  
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#408c99', endColorstr='#599bb3',GradientType=0);  
			color: #408c99;
      
			}
.loginTips{
  font-size:24px;
  color: rgb(213, 230, 225);
}
.loginForm{
  width: 100%;
  height: 320px;
  margin: auto
}
.area{
  margin-left: 5%;
  width: 80%;
 
}
.checkCode{
  background: #f5f5f5;
  width: 30%;
  float: right;
  color: black;
  border-radius: 30px;
  border: 1px solid rgb(75, 71, 71);
}
.checkCode :active{
background: #5792ec;
color: rgb(233, 233, 233);
}
.log-input{
  width:40%;
  float: left;
}
</style>