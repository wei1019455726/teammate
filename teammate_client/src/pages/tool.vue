<template>
  <div id="tool">
<mt-header fixed title="日程" style="background: #2C3E50;z-index:99999">
    <router-link to="/my" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      
    </mt-header>
<div>
  

       <full-calendar :events="monthData" class="test-fc"
                         first-day='1' locale="fr"
                         @changeMonth="changeMonth"   
                         @eventClick="eventClick"     
                         @dayClick="dayClick"          
                         @moreClick="moreClick" ></full-calendar>    
    </div>
<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>


   
    <el-card class="box-card">
  <div slot="header" class="clearfix">
   
   
  </div>
  <div v-for="(item, index) in messages" :key="index" class="text item">
    <div class="box">
      <div class="aline" :style="{borderColor: finalColor[Math.floor(Math.random() * finalColor.length)],'float':index%2===0?'left':'right'}"></div>
      <div class="btn"><el-button type="primary" icon="icon el-icon-link" circle class="but" ></el-button></div>
      <div class="target">{{item.schedule}}</div>
      
      <div class="time">7:00am</div>
      
    </div>
  </div>
</el-card>
  </div>
</template>
<script>


import { FullCalendar } from 'vue-fullcalendar'

export default {
   data() {
          return {
              messages:[],
               
            finalColor:['hsl(42, 48%, 54%)',
        'hsl(138, 24%, 48%)',
        'rgb(200, 138, 131)',
        'rgb(84, 221, 226)',
        'rgb(178, 199, 168)',
        'rgb(16, 195, 195)',
        'hsl(0, 21%, 68%)',
        'rgb(226, 166, 198)',
        'hsl(278, 17%, 66%)',
        'rgb(153, 199, 235)',
        'blueviolet'
],
            monthData: [
{
title : '吃饭', // 事件内容
start : '2020-07-01', // 事件开始时间
end : '2020-07-01', // 事件结束时间
cssClass: 'red' // 事件的样式 class名（由后台返回数据） red为自己定义的class名
},
{
title : '睡觉',
start : '2020-6-29',
end : '2020-6-30',
cssClass: 'blue'
},
{
title : '跳舞',
start : '2020-6-27',
end : '2020-6-27',
cssClass: 'blue'
},
{
title : '游泳',
start : '2020-6-26',
end : '2020-6-26',
cssClass: 'red'
},
{
title : '打球',
start : '2020-6-25',
end : '2020-6-25',
cssClass: 'blue'
},
{
title : '跑步',
start : '2020-06-01',
end : '2020-07-10',
cssClass: 'red'
} ],

 dialogTableVisible: false,
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
        formLabelWidth: '120px'
          }
      },
      methods: {
         // 选择月份
          changeMonth (start, end, current) {
           console.log('changeMonth', start.format(), end.format(), current.format())
          },
          // 点击事件
          eventClick (event, jsEvent, pos) {
            console.log('eventClick', event, jsEvent, pos)
          },
          // 点击当天
          dayClick (day, jsEvent,dialogFormVisible) {
             console.log('dayClick', day, jsEvent)
            dialogFormVisible = true
          },
          // 查看更多
          moreClick (day, events, jsEvent) {
            console.log('moreCLick', day, events, jsEvent)
          },
      },
      components: {
          'full-calendar': require('vue-fullcalendar')
      },

    mounted: function() {
      this.$api.team.getschedule()
        .then(res => {
          console.log(res.data)
          console.log('获取成功')
          this.messages = res.data
        }).catch((reject) => {
          console.log('无法获取')
        })
    },
      
};

</script>




<style scoped>
  .day-cell{
    min-height: 30px;
  }
  #tool{
    width:80%;
    
  }
  .box{
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     padding:20px;
     background: #ffffff;
  }
   .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 385px;
    z-index: 1;
    margin-top: 40px;
    border: 0px;
    background: rgb(243, 243, 243)
  }
  .btn{
    position:absolute;
    margin-left: 65%;
    
  }

  .test-fc{
    box-shadow:10px 8px 30px rgb(90, 90, 90);
    margin-top: 40px;
    padding: 30px;
    width: 105%;
    z-index: 2;
  }

  .target{
    font-size: 16px;
  }
  .time{
    color: #909399;
    margin-top: 5px;
  }
  .aline{
    border-style: solid;
    border-width: 2px;
    border-radius: 4px;
    margin-left: -20px;
    margin-top: -7px;
    height: 55px;
    width: 0px;
    position: absolute;
  }
  .but{
    
    border: 0px;
    font-size: 24px;
	background:-webkit-linear-gradient(left,#ffe140  0%,#ffe140 100%);
	background:linear-gradient(to right,#ffbc03 0%,#ffe140 100%);
  }
  
</style>

