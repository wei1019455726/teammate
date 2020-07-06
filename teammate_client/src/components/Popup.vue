<template>
  <div>
  <!--分享弹出窗 begin-->
    <mt-popup class="sharePopup" v-model="popupVisible" position="bottom">
      <ul class="shareUl">
        内容
     </ul>
     <div class="shareFooter">
        <div class="shareCancel" @click="hiddenShare()">取消</div>
    </div>
</mt-popup>
  <!--分享弹出窗 end-->
  </div>
</template>