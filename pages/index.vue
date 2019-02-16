<template>
  <div class="index-page">
      <svg-circle class="circle">
        <nav class="menu-box">
          <NuxtLink to="" class="menu-item">【主页】</NuxtLink>
          <NuxtLink to="/category/1" class="menu-item">【博客】</NuxtLink>
          <NuxtLink to="/category/2" class="menu-item">【生活】</NuxtLink>
          <NuxtLink to="/category/3" class="menu-item">【杂文】</NuxtLink>
        </nav>
      </svg-circle>
  </div>
</template>

<script>
export default {
  layout: 'index'
}
</script>

<style lang="less" scoped>
  .index-page{
    .menu-box{
      display: flex;
      flex-flow: column;
      writing-mode: tb;
      font-size: 20px;
      letter-spacing: 5px;
      position: absolute;
      left: inherit;
      top: inherit;
      transform: inherit;
    }
    .circle{
      height: 400px;
      width: 400px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

  }
</style>
