<template>
  <div class="loader-box">
    <div class="loader"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLoader'
});
</script>

<style scoped>
.loader-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
}

.loader {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#FFF 0 0);
  background: var(--c), var(--c), var(--c);
  animation: 
    l15-1 1s infinite,
    l15-2 1s infinite;
}

@keyframes l15-1 {
  0%, 100% { background-size: 20% 100%; }
  33%, 66% { background-size: 20% 40%; }
}

@keyframes l15-2 {
  0%, 33%   { background-position: 0 0, 50% 100%, 100% 100%; }
  66%, 100% { background-position: 100% 0, 0 100%, 50% 100%; }
}
</style>
