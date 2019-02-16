<template>
  <div class="svg-circle-component">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SvgCircle',
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .svg-circle-component{
    height: 100px;
    width: 100px;
    background: url('~assets/svg/brush-circle.svg') no-repeat center;
    background-size: auto 60%;
  }
</style>
