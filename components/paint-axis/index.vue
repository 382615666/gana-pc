<template>
  <section class="paint-axis-component">
    <axis></axis>
    <div class="paint-axis-content">
      <slot></slot>
    </div>
    <axis></axis>
  </section>
</template>
<script>
export default {
  name: 'PaintAxis',
  data () {
    return {

    };
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .paint-axis-component{
    .paint-axis-content{
      border-left: 1px solid #c7afaf;
      border-right: 1px solid #c7afaf;
      padding: 20px;
      background: #f3f3f3;
      margin: -20px 40px;
    }
  }
</style>
