<template>
  <main class="main">
    <nav-bar></nav-bar>
    <paint-axis>
      <section class="main-layout">
        <aside class="left-content">
          <svg-stain></svg-stain>
          <aside-article-list></aside-article-list>
          <aside-article-list></aside-article-list>
        </aside>
        <section class="main-content">
          <nuxt />
        </section>
      </section>
    </paint-axis>
    <nav-footer></nav-footer>
  </main>
</template>

<style lang="less" scoped>
  .main{
    width: 1200px;
    margin: 0 auto;
    .main-layout{
      padding-left: 270px;
      .left-content{
        float: left;
        margin-left: -270px;
        width: 250px;
      }
    }
  }
</style>
