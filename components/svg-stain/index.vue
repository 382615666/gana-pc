<template>
  <div class="svg-stain-component">
    <NuxtLink to="/" class="stain-item" tag="li">html</NuxtLink>
    <NuxtLink to="/" class="stain-item" tag="li">css</NuxtLink>
    <NuxtLink to="/" class="stain-item" tag="li">javascript</NuxtLink>
  </div>
</template>
<script>
export default {
  name: 'SvgStain',
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .svg-stain-component{
    background: url("~assets/svg/stain.svg") no-repeat center;
    background-size: cover;
    color: #fff;
    height: 200px;
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
</style>
