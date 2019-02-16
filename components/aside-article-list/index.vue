<template>
  <section class="aside-article-list-component">
    <h3 class="article-title">最新文章</h3>
    <NuxtLink to="/" class="article-item" tag="li">h5相关应用h5相关应用h5相关应用</NuxtLink>
    <NuxtLink to="/" class="article-item" tag="li">算法练习</NuxtLink>
    <NuxtLink to="/" class="article-item" tag="li">js之时间错</NuxtLink>
  </section>
</template>
<script>
export default {
  name: 'AsideArticleList',
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .aside-article-list-component{
    padding-bottom: 20px;
    .article-title{
      color: #fff;
      padding: 10px 0 20px;
      text-indent: 2em;
      font-size: 16px;
      background: url("~assets/svg/brush.svg") no-repeat left center;
      background-size: auto 100%;
    }
    .article-item{
      list-style: decimal;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 2em;
      white-space: nowrap;
      text-decoration: underline;
      cursor: pointer;
      &:hover{
        color: #f5464f;
      }
    }
  }
</style>
