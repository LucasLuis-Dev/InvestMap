<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import AppNavbar from './layout/navbar/Navbar.vue';
  import AppFooter from './layout/footer/Footer.vue';
</script>

<template>
  <AppNavbar />
  <RouterView />
  <AppFooter />
</template>

<style scoped lang="scss">

</style>

