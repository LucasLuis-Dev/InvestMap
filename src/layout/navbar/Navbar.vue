<template>
    <nav>
        <img alt="InvestMap logo" class="logo" src="@/assets/images/logo.png" />

        <input type="text" class="input-search" placeholder="Pesquise por um Fundo">

        <ul class="navbar-list">
            <li><a class="navbar-list-link" href="#acoes">Ações</a></li>
            <li><a class="navbar-list-link" href="#FIIs">FIIs</a></li>
            <li><a class="navbar-list-link" href="#Contato">Contato</a></li>
        </ul>

    </nav>
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 8%;
  padding-bottom: 2%;
  line-height: 1.5;
  height: fit-content;
  width: 100vw;
  z-index: 2;

  & .logo {
    width: 12%;
  }

  & .input-search {
  
    border-radius: 5rem;
    border: none;
    padding: 1rem;
    padding-left: 4rem;
    background-image: url('../../assets/images/magnifying-glass-solid.svg');
    background-color: rgba(255, 255, 255, 0.179);
    background-repeat: no-repeat;
    background-size: 8%;
    background-position-y: center;
    background-position-x: 6%;

  }

  & .navbar-list {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    color: white;

    &-link {
      color: white;
      font-weight: 500;
    }
  }
}
</style>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavbar',
});
</script>
