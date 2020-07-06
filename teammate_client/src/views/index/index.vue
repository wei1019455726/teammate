<template>
  <div class="about">
    <h1>This is an index page</h1>
    <p>用户信息</p>
    <p>{{user_id}}</p>
    <p>{{user_name}}</p>
    <p>{{user_role}}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('user')
export default {
  data(){
    return{
    }
  },
  computed:{
    ...mapState({
      user_id:state=>state.userId,
      user_name:state=>state.name,
      user_role:state=>state.roles,
      })
  }
}
</script>