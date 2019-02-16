<template>
  <section class="page-component">
    <span class="page-item">首页</span>
    <span class="page-item">&lt;</span>
    <span class="page-item active">1</span>
    <span class="page-item">...</span>
    <span class="page-item">9</span>
    <span class="page-item">10</span>
    <span class="page-item">&gt;</span>
    <span class="page-item">尾页</span>
  </section>
</template>
<script>
export default {
  name: 'Page',
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .page-component{
    text-align: center;
    padding-top: 10px;
    .page-item{
      padding: 0 8px;
      display: inline-block;
      vertical-align: middle;
      &:hover{
        background: #dedcdc;
      }
      &.active{
        color: #f5464f;
      }
    }
  }
</style>
