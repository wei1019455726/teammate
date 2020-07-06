<template>
  <div id="tool">
    <mt-header fixed title="" style="background: #2C3E50">
    <router-link to="/fa" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      
    </mt-header>
    <div class="bg"></div>
    <div class="title">
        <div class="title-picture">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> 
        </div>
        <div class="title-data">
          <div class="data-name"> {{messages.user_name}}</div>
          <div class="data-tel"> <i class="el-icon-phone-outline" style="margin-right:5px;"></i>{{messages.user_phone}}</div>
        </div>
    </div>


<el-form ref="teamForm" :model="teamForm" label-width="80px" class="form"  :rules="rules" >
  <el-form-item label="队伍名字" prop="TeamName">
    <el-input v-model="teamForm.activity_title"></el-input>
  </el-form-item>
  
  <el-form-item label="开始时间" prop="activity_stime">
    <el-col :span="17">
      <el-date-picker type="date" placeholder="选择日期" v-model="teamForm.activity_stime" style="width: 100%;"></el-date-picker>
    </el-col>
   
  </el-form-item>
  <el-form-item label="结束时间" prop="activity_etime">
    <el-col :span="17">
      <el-date-picker type="date" placeholder="选择日期" v-model="teamForm.activity_etime" style="width: 100%;"></el-date-picker>
    </el-col>
   
  </el-form-item>
 <el-form-item label="队长名字" prop="activity_leader">
    <el-input v-model="teamForm.activity_leader"></el-input>
  </el-form-item>
   <el-form-item label="联系方式" prop="activity_cleader" >
    <el-input  v-model="teamForm.activity_cleader"></el-input>
  </el-form-item>
<el-form-item label="所需人数" prop="activity_person">
  <el-input-number v-model="teamForm.activity_person" @change="handleChange" :min="1"  label="描述文字"></el-input-number>
  </el-form-item>
  <el-form-item label="队伍宣言" prop="activity_content">
    <el-input type="textarea" v-model="teamForm.activity_content"></el-input>
  </el-form-item>
  
</el-form>

<el-button type="primary" @click="submitForm('teamForm')" class="button" > 创建队伍</el-button>
  <router-view></router-view>
  </div>
  
</template>

<script>

export default {
  data(){
    return{
      id: this.$route.params.id,
      messages:[],
       teamForm:{
        activity_title:'',
        activity_stime:'',
        activity_etime:'',
        activity_leader:'',
        activity_cleader:'',
        activity_person:'',
        activity_content:''
      },
         rules: {
          activity_leader: [
            { required: true, message: '请输入队伍名字', trigger: 'blur' },
           
          ],
         
          activity_stime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          activity_etime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
           activity_leader: [
            { required: true, message: '请输入注册人名字', trigger: 'blur' },
            
          ],
            activity_cleader: [
             { required: true, message: '联系方式不能为空', trigger: 'blur'},      
              { min: 11, max: 11, message: '联系方式必须为11个数字', trigger: 'blur' },
 
          ],
           
          activity_content: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
    }
  },
   methods: {
      handleChange(value) {
        console.log(value);
      },      
        submitForm(teamForm) {
				this.$refs[teamForm].validate((valid) => {
					if (valid) {
            let teaminfo = this.teamForm;
						this.$api.team.postactivity(teaminfo,this.id).then(res =>{             			
							this.$router.push({ path: '/main' })						
						})
					}
        });
        
        
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
    created(){
    console.log('fa传过来的比赛announce_id'+this.$route.params.id)
  },
}
</script>


<style scoped>
.button{
z-index:99;background:#D0D0D0;color:#303133;padding:5px;
font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.form{
  margin-top:70px;
  width:90%;
  
  border-radius: 4px;

}

.bg{
		
		width: 100%;
		height: 250px;
		background: url(../../../public/images/bg1.jpg) no-repeat ;
		background-size: cover ;
	}
  .title{
    display: flex;
    position: fixed;
    position: absolute;
    margin-top: -50px;
    z-index: 99;
     width: 80%;
  height: auto;
  background: #ffffff;
  margin-left: 5%;
  padding:20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)

  }
  .title-picture{
    flex: 1;
   
  }
  .title-data{
    flex: 5;
  }
  .data-name{
 margin-left: 10px;
font-size: 18px;
margin-bottom: 7px;
  }
  .data-tel{
    margin-left: 10px;
    font-size: 14px;
    
    color: #606266;
  }
  
   .button{
    position:fixed;top: 5px;right: 0px; font-size:16px; z-index:9999;
    background:Transparent;border: 0px;color: #ffffff;
;
  }
   
</style>