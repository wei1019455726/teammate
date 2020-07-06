<template>
  <div id="liuyanban">
 <mt-header title="留言板" style="background: #2C3E50">
  <router-link to="/my" slot="left">
    <mt-button icon="back"></mt-button>
    <mt-button @click="handleClose"></mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <el-button type="text"  style="margin:10px 0 0 100px">上传留言</el-button>
 <el-button type="primary" icon="el-icon-edit" circle @click="dialogFormVisible = true"></el-button>
<el-dialog title="留言信息" :visible.sync="dialogFormVisible" style="width:600px;margin-left:-140px;margin-top:-10vh">
  <el-form :model="form" >
    <el-form-item label="留言人" :label-width="formLabelWidth" style="margin-left:-10px">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="留言栏" :label-width="formLabelWidth" style="margin-left:-10px">
   <el-input type="textarea" v-model="form.desc"></el-input>
      </el-select>
    </el-form-item>
    <el-form-item label="文件上传" :label-width="formLabelWidth">
      <el-upload 
    :file-list="fileList"
    :auto-upload="false">
    <el-button slot="trigger" type="primary">选择文件</el-button>
   
</el-upload>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>


    <div class="block" >
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>   
  </el-timeline>
</div>
  </div>
</template>
<style scoped>
.block{
  width:250px;
  margin:10px 0 0 30px;
}
.el-dialog{}
</style>
<script>

export default {
  data(){
    return{
      dialogFormVisible: false,
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '70px'
    }
  },
  computed:{
    
  }
}
</script>