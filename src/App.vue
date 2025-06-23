<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import AppFooter from './layout/footer/Footer.vue';
</script>

<template>
  <RouterView />
  <AppFooter />
</template>

<style scoped lang="scss">
// @import './assets/base.scss';

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>

