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
        <a href="/">
          <img alt="InvestMap logo" class="logo" src="@/assets/images/logo.svg" />
        </a>

        <input type="text" v-model="search" @keyup.enter="sendSearch()" class="input-search" placeholder="Pesquise por um fundo">

        <!-- <ul class="navbar-list">
            <li><a class="navbar-list-link" href="#acoes">Ações</a></li>
            <li><a class="navbar-list-link" href="#FIIs">FIIs</a></li>
            <li><a class="navbar-list-link" href="#Contato">Contato</a></li>
        </ul> -->

    </nav>
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4%;
  padding-bottom: 2%;
  line-height: 1.5;
  height: fit-content;
  width: 100vw;
  z-index: 2;

  & a {
    padding: 0;
  }

  & a:hover {
    background: none;
  }

  & .logo {
    width: 15rem;
  }

  & .input-search {
    width: 45%;
    border-radius: 5rem;
    border: none;
    padding: 1rem;
    padding-left: 3.5rem;
    background-image: url('../../assets/images/magnifying-glass-solid.svg');
    background-color: rgba(255, 255, 255, 0.179);
    background-repeat: no-repeat;
    background-size: 10%;
    background-position-y: center;
    background-position-x: 8%;
    color: white;
    font-size: 1.4rem;

    &:focus {
      border: none;
      outline: none;
    }

  }
}


@media screen and (min-width: 1200px) {
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5% 8%;
  padding-bottom: 2%;
  line-height: 1.5;
  height: fit-content;
  width: 100vw;
  z-index: 2;

  & a:hover {
    background: none;
  }

  & .logo {
    width: 23rem;
  }

  & .input-search {
    width: 25%;
    border-radius: 5rem;
    border: none;
    padding: 1rem;
    padding-left: 4.5rem;
    background-image: url('../../assets/images/magnifying-glass-solid.svg');
    background-color: rgba(255, 255, 255, 0.179);
    background-repeat: no-repeat;
    background-size: 6%;
    background-position-y: center;
    background-position-x: 4%;
    color: white;
    font-size: 1.6rem;

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
}

@media screen and (min-width: 1600px) {
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5% 8%;
  padding-bottom: 2%;
  line-height: 1.5;
  height: fit-content;
  width: 100vw;
  z-index: 2;

  & a:hover {
    background: none;
  }

  & .logo {
    width: 23rem;
  }

  & .input-search {
    width: 30%;
    border-radius: 5rem;
    border: none;
    padding: 2rem;
    padding-left: 5.5rem;
    background-image: url('../../assets/images/magnifying-glass-solid.svg');
    background-color: rgba(255, 255, 255, 0.179);
    background-repeat: no-repeat;
    background-size: 5%;
    background-position-y: center;
    background-position-x: 4%;
    color: white;
    font-size: 1.8rem;

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
}

</style>


