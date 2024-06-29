<template>
  <ul>
    <li v-for="fund of funds" :key="fund">
      {{ fund }}
    </li>
  </ul>
</template>

<script lang="ts">


export default {
  name: 'AppListFunds',
  props: {
    funds: Array
  }

}
</script>

<style>

</style>