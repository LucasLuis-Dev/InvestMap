<script setup lang="ts">
  import { RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img alt="InvestMap logo" class="logo" src="@/assets/images/logo.png" />

    <ul class="navbar-list">
      <li>ooj</li>
      <li>d3</li>
      <li>22</li>
    </ul>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 8%;
  line-height: 1.5;
  height: fit-content;
  width: 100vw;

  & .logo {
    width: 15%;
  }

  & .navbar-list {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
  }
}
</style>
