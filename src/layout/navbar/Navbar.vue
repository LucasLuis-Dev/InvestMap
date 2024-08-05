<script lang="ts">

import { defineComponent, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';



export default defineComponent({
  name: 'AppNavbar',
  emits: ['search-event'],
  setup(_,{emit }) {
    let search: Ref<string> = ref('');
    let router = useRouter();

    function sendSearch() {
      emit('search-event', search.value)
      router.push({ path: '/search', query: { q: search.value } });
    }

    return {
      search,
      sendSearch
    }
  }
});
</script>

<template>
    <nav>
        <img alt="InvestMap logo" class="logo" src="@/assets/images/logo.png" />

        <input type="text" v-model="search" @keyup.enter="sendSearch()" class="input-search" placeholder="Pesquise por um Fundo">

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
    padding-left: 5rem;
    background-image: url('../../assets/images/magnifying-glass-solid.svg');
    background-color: rgba(255, 255, 255, 0.179);
    background-repeat: no-repeat;
    background-size: 8%;
    background-position-y: center;
    background-position-x: 6%;
    color: white;
    font-size: 1.7rem;

    &:focus {
      border: none;
      outline: none;
    }

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


