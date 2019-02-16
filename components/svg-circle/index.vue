<template>
  <div class="svg-circle-component" :style="$attrs.style">
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
    min-height: 100px;
    min-width: 100px;
    background: url('~assets/svg/brush-circle.svg') no-repeat center;
    background-size: contain;
  }
</style>
