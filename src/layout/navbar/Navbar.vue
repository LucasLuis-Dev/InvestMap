<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AppNavbar',
  emits: ['search-event'],
  setup(_, { emit }) {
    let search: Ref<string> = ref('');
    let router = useRouter();
    let isExpanded: Ref<boolean> = ref(false);
    const inputRef: Ref<HTMLInputElement | null> = ref(null);

    function sendSearch() {
      if (search.value.trim()) {
        emit('search-event', search.value);
        router.push({ path: '/search', query: { q: search.value } });
      }
    }

    function toggleSearch() {
      isExpanded.value = !isExpanded.value;
      if (isExpanded.value) {
        setTimeout(() => {
          inputRef.value?.focus();
        }, 300);
      }
    }

    function handleBlur() {
      if (!search.value.trim()) {
        isExpanded.value = false;
      }
    }

    return {
      search,
      sendSearch,
      isExpanded,
      toggleSearch,
      handleBlur,
      inputRef
    }
  }
});
</script>

<template>
    <nav>
        <a href="/">
          <img alt="InvestMap logo" class="logo" src="@/assets/images/logo.svg" />
        </a>

        <div class="search-container" :class="{ 'expanded': isExpanded }">
          <div class="search-icon" @click="toggleSearch" v-if="!isExpanded">
            <img src="@/assets/images/magnifying-glass-solid.svg" alt="Search" />
          </div>
          
          <input 
            v-show="isExpanded"
            ref="inputRef"
            type="text" 
            v-model="search" 
            @keyup.enter="sendSearch()" 
            @blur="handleBlur"
            class="input-search" 
            placeholder="Pesquise por um fundo"
          />
        </div>
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

  & .search-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: all 0.3s ease;
    width: 53%;
  }

  & .search-icon {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.179);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }

    & img {
      width: 50%;
      height: 50%;
    }
  }

  & .input-search {
    width: 100%;
    border-radius: 5rem;
    border: none;
    padding: 1rem;
    padding-left: 4rem;
    background-image: url('../../assets/images/magnifying-glass-solid.svg');
    background-color: rgba(255, 255, 255, 0.179);
    background-repeat: no-repeat;
    background-size: 1.2rem;
    background-position-y: center;
    background-position-x: 1.5rem;
    color: white;
    font-size: 1.4rem;
    animation: expandWidth 0.3s ease;

    &:focus {
      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.25);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}

@keyframes expandWidth {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
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

    & .search-container {
      width: 25%;
    }

    & .search-icon {
      width: 5rem;
      height: 5rem;
    }

    & .input-search {
      padding: 1rem;
      padding-left: 4%;
      background-size: 6%;
      background-position-x: 4%;
      font-size: 1.6rem;
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

    & .search-container {
      width: 30%;
    }

    & .search-icon {
      width: 6rem;
      height: 6rem;
    }

    & .input-search {
      padding: 2rem;
      padding-left: 13%;
      background-size: 5%;
      background-position-x: 4%;
      font-size: 1.8rem;
    }
  }
}
</style>
