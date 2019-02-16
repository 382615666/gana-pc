<template>
  <header class="nav-bar-component">
    <nav class="nav-box">
      <NuxtLink to="/" class="nav-item">【主页】</NuxtLink>
      <NuxtLink to="/category/1" class="nav-item">【博客】</NuxtLink>
      <NuxtLink to="/category/2" class="nav-item">【生活】</NuxtLink>
      <NuxtLink to="/category/3" class="nav-item">【杂文】</NuxtLink>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .nav-bar-component{
    background: url('~assets/svg/nav.svg') center no-repeat;
    background-size: auto 100%;
    height: 200px;
    margin-bottom: -20px;
    text-align: center;
    font-size: 20px;
    position: relative;
    .nav-box{
      color: #fff;
      position: absolute;
      bottom: 45px;
      left: 0;
      right: 0;
      .nav-item{
        &.nav-item{
          margin-left: 20px;
        }
      }
    }
  }
</style>
