<template>
  <section class="axis-component">
    <i class="axis-node"></i>
    <i class="axis-node right"></i>
  </section>
</template>
<script>
export default {
  name: 'Axis',
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .axis-component{
    position: relative;
    height: 44px;
    background: linear-gradient(#8d8d8c, rgba(255, 255, 255, .8), #8d8d8c) no-repeat center;
    background-size: auto 28px;
    &:before,&:after{
      content: '';
      top: 0;
      left: 0;
      width: 10px;
      height: 44px;
      background: linear-gradient(#0c142b 9px, #778098, #0c142b 35px) no-repeat center;
      position: absolute;
      z-index: 1;
      border-radius: 5px;
    }
    &:after{
      right: 0;
      left: auto;
    }
    .axis-node{
      position: absolute;
      top: 6px;
      left: 10px;
      height: 32px;
      width: 25px;
      border-radius: 2px;
      background: linear-gradient(#0c142b 5px, #778098, #0c142b 27px) no-repeat center;
      &.right{
        left: auto;
        right: 10px;
      }
    }
  }
</style>
