<template>
  <article class="article-detail-component">
    <h3 class="article-title">文章标题文章标题文章标题</h3>
    <section class="article-content">
      文章内容，内容，内容啊啊文章内容，内容，内容啊啊文章内容，内容，内容啊啊文章内容，内容，内容啊啊文章内容，内容，内容啊啊文章内容，内容，内容啊啊文章内容，内容，内容啊啊文章内容，内容，内容啊啊文章内容，内容，内容啊啊
    </section>
  </article>
</template>
<script>
export default {
  name: 'ArticleDetail',
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .article-detail-component{
    .article-title{
      font-size: 16px;
    }
    .article-content{
      line-height: 1.5;
    }
  }
</style>
