<template>
 <div id="app">
   <div class="cotent-div">
     <router-view/>
   </div>
</div>
</template>
<script>
import Footer from './components/foot.vue'
    export default {
        name:'app',
         
    }
</script>

<style lang="less">
    @import './style/variables';
	  @import './style/element-ui';
	  @import './style/common';
    @import './style/scrollBar';
    
</style>
<style>
   body{
      background: rgb(243, 243, 243)
    }
</style>