<template>
  <article class="article-item-component">
    <NuxtLink to="/article/1" class="article-title">【测试标题】h5自由发挥</NuxtLink>
    <img src="~assets/svg/brush-circle.svg" alt="" class="article-img">
    <section class="article-content">
      文章备注备注文章备注备注文章备注备注文章备注备注
      <a href="javascript:void(0)" class="btn">阅读全文>></a>
    </section>
    <aside class="article-appendix">
      2017-04-25&nbsp;&nbsp;&nbsp;&nbsp;作者：Gana&nbsp;&nbsp;&nbsp;&nbsp;
    </aside>
  </article>
</template>
<script>
export default {
  name: 'ArticleItem',
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .article-item-component{
    & + .article-item-component{
      margin-top: 10px;
    }
    .article-title{
      display: block;
      font-size: 18px;
    }
    .article-img{
      position: absolute;
      width: 100px;
      height: 100px;
      box-shadow: 0px 0px 0px 1px #fff;
    }
    .article-content{
      margin-left: 120px;
      min-height: 100px;
      position: relative;
      .btn{
        position: absolute;
        bottom: 0;
        right:0;
      }
    }
    .article-appendix{
      background: #fff;
      color: #666;
      line-height: 30px;
      padding: 0 20px;
      margin-top: 10px;
    }
  }
</style>
