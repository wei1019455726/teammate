<template>
<div class="send">
    <mt-header fixed title="发布帖子" style="background: #2C3E50">
    <router-link to="/square" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      
    </mt-header>
  <div class="log_form">
  
  <van-form @submit="onSubmit">
<van-field v-model="content"  name="content" label="内容" placeholder="内容" />
  <van-field v-model="content"  name="content" label="内容" placeholder="内容" />

  <van-field name="square_photo" label="上传照片"> 
    <template #input>
        <van-uploader v-model="square_photo"  max-count="1" :after-read="afterRead" />
    </template>
  </van-field>

  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      发布
    </van-button>
  </div>

</van-form>



    </div>

    </div>
</template>
 
<script>
    export default {
        
        data () {
            return {
                 content:'',
                 square_photo:[]
        }
        },
        computed:{
            
        },
        methods: {
      onSubmit(values) { 
        //判断是否上传图片
      if(values.square_photo.length == 0){
        values.square_photo = '';
      }else{
       values.square_photo =  values.square_photo[0].content
      }         	
			this.$api.team.postsquareinfo(values).then(res =>{             			
			    this.$router.push("/square");						
				})
       },

       //图片压缩
    afterRead(event){
      // console.log(event);
      if(/\/(?:jpeg|png|jpg)/i.test(event.file.type) &&  event.file.size > 500000) {
        //创建canvas对象(画布)
        let canvas = document.createElement("canvas");
        //获取对应的CanvasRenderingContext2D对象(画笔)
        let context = canvas.getContext("2d");
        //创建新的图片对象
        let img = new Image();
        //指定图片的DataURL(图片的base编码数据)
        img.src = event.content;
        //监听浏览器加载图片完成，然后进行绘制
        img.onload = () => {
          //指定canvas画布大小，该大小为最后生成图片的大小
          canvas.width=400;
          canvas.height = 400;
          /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，400是将图片按给定的像素进行缩小。
        如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。*/
          context.drawImage(img,0,0,400,400);
          //将绘制完成的图片重新转换为base64编码，file.file.type为图片类型，0.92为默认压缩质量
          // console.log(event.file.type);
          event.content = canvas.toDataURL(event.file.type,0.92);
          // console.log(event.content);
          console.log(event)
          
          let file = this.dataURLtoFile(event.content,"image");
          // console.log(file)
        }
      }
    },
      // 将base64格式的图片转换为file
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    }
  }
  

        }
    

</script>

<style scoped>

 .button{
    position:fixed;top: 6px;right: 10px; font-size:14px; z-index:9999;
    background:Transparent;border: 0px;color: #ffffff;background: #2C3E50;
    border: 1px solid #ffffff;padding:  3px 10px

  }
 
  .tiezi{
      margin-top: 60px;
  }
  .input{
      border: 0px;
      background: rgb(243, 243, 243)
  }
  .el-textarea__inner{
       background: rgb(243, 243, 243);
       border: 0px;
       
  }
  .el-textarea .el-input__count{
   right: 50px;
   
  }
  .image{
      margin-top: 10px;
      width: 100px;background: #2C3E50;
      height: 100px;;
  }
</style>
