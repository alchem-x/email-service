<template>
  <div class="hello-email">Hello {{ name }}</div>
</template>

<script setup>
const name = 'Email'
</script>

<style scoped lang="less">
.hello-email {
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: #fff;
  background-color: orange;
  font-size: 4rem;
  font-weight: bold;
}
</style>
