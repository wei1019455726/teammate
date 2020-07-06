<template>
  	<div class="login_page">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
				  <div class="box"></div>
			     <div class='titleArea rflex'>
					<span class='title' ></span>
				</div>

				<div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
					<el-form-item prop="account" class="login-item">
					    <span class="loginTips "><icon-svg icon-class="iconuser" /></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')"  class="area" type="text" placeholder="账号" v-model="loginForm.account" ></el-input>
					</el-form-item>
					<el-form-item prop="password" class="login-item"> 
					    <span class="loginTips"><icon-svg icon-class="iconLock" /></span>
						<el-input @keyup.enter.native ="submitForm('loginForm')" class="area" type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button   @click="submitForm('loginForm')" class="submit_btn" icon="el-icon-right" circle></el-button>
				  	</el-form-item>
					  
				</el-form><router-link to="/register" >
				
				<span style="color:rgb(255, 255, 255);font-weight:bold;font-size:14px">还没账号？</span> <el-link :underline="false" style="color:#F56C6C;margin-bottom:3px;font-size:14px;font-weight:bold;">请注册</el-link>
				
			
				</router-link>
				</div>


	  		</section>
	  	</transition>
  	</div>
</template>

<script>
	import logoImg from "@/assets/img/logo.png";
    import {setLocalStorage} from '@/utils/localStorage'

	export default {
	    data(){
			return {
				logo:logoImg,
				loginForm: {
					account: '',
					password: ''
				},
				rules: {
					account: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				}
			}
		},
		mounted(){
		},
		methods: {
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
						this.$api.user.postlogin(userinfo).then(res =>{
							if(res.code == -1){
								this.showMessage("info",res.data.message)
							}else if(res.code == 0){
								this.showMessage("info",res.data.message)
							}else if(res.code == 1){
								//成功验证
								setLocalStorage("Token",res.data.token)
								this.$router.push({ path: '/' })
							}else{
								this.showMessage("info","未知错误")
							}
						})
					}
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	.login_page{
		position: absolute;
		width: 100%;
		height: 100%;
		background: url(../../public/images/bg2.jpg) no-repeat ;
		background-size: cover ;
	}
	.form_contianer{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		-webkit-animation: fadelogIn 1s;
  	  animation: fadelogIn 1s;
		width:250px;
		border-radius: 5px;
		color:rgb(255, 255, 255);
		text-align: center;



@keyframes fadelogIn {
    0% {
       
        -webkit-transform: translate(50%, 50%);
        
        transform: translate(50%, 30%);
    }
    5% {
        -webkit-transform: none;
        transform: none;
    }
}

@-webkit-keyframes fadelogIn {
    0% {
        -webkit-transform: translate(50%, 50%);
    }
    10% {
        -webkit-transform: none;
    }
}

	.box{
		z-index: 0;
		position: absolute;
		top: 35%;
        left: 50%;
		transform: translate(-50%,-50%);
		background: rgba(0,0,0,0.5);
		

		opacity:0.55;
		width:250px;
		height: 390px;
		border-radius: 30px 0 30px 30px;
		padding: 25px;
		text-align: center;
		 box-shadow:10px 10px 10px rgb(3, 3, 3);
	}
	
	.area{
		opacity: 0.9;
				transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
	}
	.area:hover{
		opacity: 1;
	}
		.titleArea rflex{
			z-index: 99
		}
		.titleArea{
			justify-content: center;
   			align-items: center;
			text-transform: uppercase;
			font-size: 22px;
			width: 100%;
			padding-bottom: 20px;
			.logo{
				width: 40px;
    			margin-right: 10px;
			}
			.title{
				i{	font-family: sans-serif;
					z-index: 999;
					font-size: 24px;
					font-weight:bold;
					letter-spacing:20px;
				   color: rgb(0, 0, 0);
				}
			}
		}
		.submit_btn{
				
				
				font-size: 16px;
				opacity: 0.8;
				transition: opacity 0.5s;
	-webkit-transition: opacity 0.5s;
	
			border:1px solid rgb(51, 115, 235);
			background: none;
    -webkit-transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
	transition: all 0.2s cubic-bezier(0.19, 1, 0.22, 1);
	 -webkit-transform: translateZ(0);
	transform: translateZ(0);
	 overflow: hidden;
    outline: none;
			color: #fff
			}
			.submit_btn:before,
.submit_btn:after {
    
    content: '';
    z-index: -1;
    background: -webkit-linear-gradient(350deg, #2d46d4, #208fcf);
    background: linear-gradient(100deg, #2d46d4, #208fcf);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.submit_btn:after {
    background: -webkit-linear-gradient(350deg, #0a7bdf, #05c4b5);
    background: linear-gradient(100deg, #0a7bdf, #05c4b5);
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: right;
    transform-origin: right;
    -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition: -webkit-transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition-delay: .1s;
    transition-delay: .1s;
}

.submit_btn:hover:after {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: left;
    transform-origin: left;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}
			.submit_btn:hover{
				opacity: 1;
			}
		.loginForm{
			.submit_btn{
				
				
				font-size: 36px;
				opacity: 0.8;
				transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
			}
			.submit_btn:hover{
				opacity: 1;
			}
			.loginTips{
				position: absolute;
				left: 10px;
				z-index: 20;
				// color: #FF7C1A;
				font-size: 18px;
				top: 50%;
				transform: translateY(-50%);
			}
			
	    }
	}

	.manage_tip{
		margin-bottom:20px;
		.title{
			font-family: cursive;
			font-weight: bold;
			font-size: 26px;
			color:#fff;
		}
		.logo{
			width:60px;
			height:60px;
		}
	}
	
	.tiparea{
		text-align:left;
		font-size: 12px;
		color: #4cbb15;
		padding: 10px 0;
		.tip{
			margin-left: 54px;
		}
	}
	
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
	.loginForm{
		.el-button--primary{
			background-color:rgb(51, 115, 235);
			border:1px solid rgb(51, 115, 235);
		}
	}
	.sanFangArea{
		border-top: 1px solid #DCDFE6;
		padding: 10px 0;
		display: none;
		.title{
			font-size: 14px;
			color: #c0d5e5;
			margin-bottom: 10px;
		}
		ul{
			li{
				flex:1;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				.svg-icon{
					font-size: 24px;
				}
			}
		}
	}
</style>
