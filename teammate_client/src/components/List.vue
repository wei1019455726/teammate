<template>
  <div class="list">
    <div  v-if="this.list.length">

                <div class="block"  >
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top" v-for="(item, index) in list" 
      :key="index" >
      <el-card >
         <div class="list-item">
            
          <div class="">
            <el-tag type="info" class="span-con2" size="mini">{{item.name}}:</el-tag>
            
          </div>
          <div class="list-msg">
            <div>{{item.message}}</div>
            <div class="list-reply">
              <a @click="listChange(index)">回复</a>
            </div>
          </div>
      </div>
      </el-card>
    </el-timeline-item>
  
  </el-timeline>
</div>

     
    </div>
    <div v-if="!this.list.length" 
    class="list-nothing">
      留言列表为空
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    listChange: function (index) {
      this.handleReply(index)
     
    },
    handleReply: function (index) {
      this.$emit('reply', index)
    }
  }
}
</script>
<style scoped>
.list{
  margin: 50px 0px 0 0px;
}
.block{
    width: 90%;
    margin-left: 10%;
}
.el-card{
  background: rgb(253, 177, 177)
}
.list-item{
  display: flex;
  flex-direction: row;
  
  margin-bottom: 5px;
  overflow: hidden;
  flex: 5;
  background: rgb(253, 177, 177)
}
.span-con{
  flex: 1;
  margin-right: 10px;
  color: rgb(50, 180, 255);
  font-size: 16px;
}
.span-con2{
  flex: 1;
  margin-right: 10px;
  color: rgb(50, 180, 255);
  font-size: 16px;
}
.list-msg{
  flex: 9;
  text-align: justify;
  font-size: 14px;
  margin-top: 3px;
}
.list-msg .list-reply{
  float: right;
  color:rgb(68, 68, 68);
  font-size: 16px;
  margin-top: 10px;
  border: 1px solid rgb(253, 253, 253);
  width: 40px;
  padding:5px 0 5px 5px;
 background: rgb(250, 251, 252);
}

.list-nothing{
  text-align: center;
  color: #9ea7b4;
  padding: 20px;
}
.block{
    width: 90%;
    margin-left: 5%;
}
</style>
