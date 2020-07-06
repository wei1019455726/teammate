<template>
  <div id="teammate">
<mt-header fixed title="修改任务" style="background: #2C3E50">
    <router-link to="/task" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    </mt-header>

    <div class="form">
        <div class="bg"></div>
      <el-form ref="form" :model="form" label-width="80px" class="form"  :rules="rules" >


    
    <el-form-item label="队员名字"   prop="user_name" >
      <div class="name">队员名字</div>
      <el-input v-model="form.user_name" autocomplete="off"></el-input>
    </el-form-item>

  
  <el-form-item label="开始时间" prop="task_stime">
    <div class="name">开始时间</div>
    <el-col :span="17">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.task_stime" style="width: 100%;"></el-date-picker>
    </el-col>
   
  </el-form-item>
  <el-form-item label="结束时间" prop="task_etime">
    <div class="name">结束时间</div>
    <el-col :span="17">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.task_etime" style="width: 100%;"></el-date-picker>
    </el-col>
   
  </el-form-item>
 
  <el-form-item label="队员任务" prop="content">
    <div class="name">队员任务</div>
    <el-input type="textarea" v-model="form.content"  rows="6"></el-input>
  </el-form-item>
  
</el-form>
<el-button type="primary" @click="submitForm('form')" class="button" round> 修改任务</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  data(){
    return{   
      id: this.$route.params.id, 
       form: {
          user_name: '',       
          task_stime: '',
          task_etime: '',      
          content: ''
        },
         rules: {
         
         user_name: [
            { required: true, message: '请输入队员', trigger: 'change' }
          ],
         
          take_stime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          task_etime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],         
         content: [
            { required: true, message: '请填写任务内容', trigger: 'blur' }
          ]
        }
    }
  },
 methods: {
        
        handleChange(value) {
        console.log(value);
      },
      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            let taskinfo = this.form;
            console.log(taskinfo)
            this.$api.team.putTask(taskinfo,this.id).then(res =>{  
              console.log('修改成功')           			
							this.$router.push({ path: '/myteam' })						
						})           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      

        
         
}
}
</script>

<style scoped>
#teammate{
   position: absolute;
    width: 100%;
		height:100%;
		background: url(../../../src/assets/img/bg9.jpg) no-repeat ;
		background-size:cover ;
}
.bg{
  
  margin: -30px 20px 0px  10px;
  	background: rgb(68, 68, 68);
		width: 90%;
    height: 440px;
    position:absolute;
		opacity:0.15;
    border-radius: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.form{
  color: #ffffff;
  margin: 90px 20px 0  10px;
  z-index:99 ;
}
  .button{
    background: linear-gradient(90deg,#0162c8,#55e7fc);
    width: 60%;
  margin-left: 20%;
  margin-top: 30px;
  }
  .el-form-item{
    margin-top: 40px;
    color: #ffffff;
  }
  .name{
    float: left;
    margin-left: -65px;
    position:absolute;
  }
</style>