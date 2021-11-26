<!--导航栏除了登录页面都要有，所以它是除了登录页面 所有页面的父组件--> 
<template>
  <div>
    <nav-menu></nav-menu>


    <!--这是子组件显示的地方，router-view，要想要显示子组件的内容，需要配置路由router/index.js  -->
    <router-view/>
  </div>
</template>

<script>
  import NavMenu from './common/NavMenu'
  export default {
    name: 'Home',
    components: {NavMenu}
  }
</script>

<style scoped>

</style>
