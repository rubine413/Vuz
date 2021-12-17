<template>
  <div class="vz-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vz-button',
  props: {
    type: String,
  },
}
</script>

<style scoped>
.x-button {
  display: inline-block;
  padding: 3px 6px;
  background: #000;
  color: #fff;
}
</style>
