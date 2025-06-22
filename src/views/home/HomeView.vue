<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppNavbar from '../../layout/navbar/Navbar.vue'
import AppHeader from './TheHeader.vue'
import AppListFunds from './ListFunds.vue';
import AppPagination from '../../components/Pagination.vue';
import axios from 'axios';

const selectedButton = ref('default');
let Funds = ref([]);
const Token = import.meta.env.VITE_API_KEY;

const LimitPage: number = 24;
let currentPage = ref(1);

const Endpoint = 'quote/list';

onMounted(() => {
  fetchFunds();
});

function fetchFunds() {
  axios.get(`https://brapi.dev/api/${Endpoint}?token=${Token}&limit=${LimitPage}&page=${currentPage.value}`)
    .then(response => {
      Funds.value = response.data.stocks;
      currentPage.value = response.data.currentPage;
  });
}

function getFundsByCategory(category: string) {
  axios.get(`https://brapi.dev/api/${Endpoint}?token=${Token}&limit=${LimitPage}&page=${currentPage.value}&type=${category}`)
    .then(response => {
      Funds.value = response.data.stocks;
      currentPage.value = response.data.currentPage;
  });
}

function selectView(buttonName: string) {
  selectedButton.value = buttonName;

  if (buttonName == 'default') {
    fetchFunds()
  } else {
    getFundsByCategory(buttonName)
  }
}

function searchBy(search: string) {
  axios.get(`https://brapi.dev/api/${Endpoint}?token=${Token}&limit=${LimitPage}&page=${currentPage.value}&search=${search}`)
    .then(response => {
      Funds.value = response.data.stocks;
      currentPage.value = response.data.currentPage;
  });
}

function handlePageChange(page: number) {
  currentPage.value = page;
  fetchFunds();
}
</script>

<template>
  <AppNavbar @search-event="searchBy" />
  <AppHeader />
  <main class="main-wrapper">
    <section class="section-informations">
      <div class="title-box">
        <h2>Explore Informações Exclusivas do Mercado de Ações</h2>
        <p>Descubra as tendências e os insights mais recentes do mercado de ações em um único lugar. Nossa plataforma oferece acesso atualizado a dados críticos para investidores e entusiastas do mercado.</p>
      </div>

      <div class="select-button__container">
        <button 
          @click="selectView('default')" 
          :class="{ 'active': selectedButton === 'default' }"
        >Todos</button>
        <button 
          @click="selectView('fund')" 
          :class="{ 'active': selectedButton === 'fund' }"
        >FIIs</button>
        <button
          @click="selectView('stock')"
          :class="{ active: selectedButton === 'stock' }"
        >Ações</button>
        <button
          @click="selectView('bdr')"
          :class="{ active: selectedButton === 'bdr' }"
        >BDRs</button>
      </div>

      <AppListFunds :funds="Funds"/>
      <AppPagination v-if="Funds.length > 9" :currentPage="currentPage" :totalPages="LimitPage" @page-changed="handlePageChange"/>
    </section>
  </main>
</template>

<style lang="scss">
@import '../../scss/abstracts/variables';

.main-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4%;
    overflow: hidden;

    & .select-button__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 100%;
      background-color: #1a203b;
      padding: 0.5rem;
      border-radius: 50rem;
      z-index: 3;

      & button {
        width: 100%;
        border-radius: 50rem;
        border: none;
        height: 4rem;
        font-size: 1.5rem;
        font-weight: 600;
        background-color: rgba(255, 255, 255, 0.251);
        color: white;
        cursor: pointer;
        transition: 300ms ease;

        &:hover {
          background-color: rgba(255, 255, 255, 0.427);
        }

        &.active {
          background: $color-highlight-2;
          color: white;
        }
      }
    }

    & .section-informations {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      gap: 3.5rem;

      & .title-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;

        & h2 {
          font-size: 3rem;
          font-weight: 700;
          line-height: 4rem;
          width: 100%;
        }

        & p {
          width: 100%;
          font-size: 1.5rem;
        }
      }
    }
  }


@media screen and (min-width: 1200px) {
    
  .main-wrapper {
    display: flex;
    justify-content: center;
    padding: 6% 0%;

    & .select-button__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 50%;
      background-color: #1a203b;
      padding: 0.5rem;
      border-radius: 50rem;
      z-index: 3;

      & button {
        width: 100%;
        border-radius: 50rem;
        border: none;
        height: 4rem;
        font-size: 1.5rem;
        font-weight: 600;
        background-color: rgba(255, 255, 255, 0.251);
        color: white;
        cursor: pointer;
        transition: 300ms ease;

        &:hover {
          background-color: rgba(255, 255, 255, 0.427);
        }

        &.active {
          background: $color-highlight-2;
          color: white;
        }
      }
    }

    & .section-informations {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      gap: 3.5rem;

      & .title-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;

        & h2 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 5rem;
          width: 45%;
        }

        & p {
          width: 40%;
        }
      }
    }
  }
}

@media screen and (min-width: 1600px) {
  
  .main-wrapper {

    & .select-button__container {

      & button {
        width: 100%;
        border-radius: 50rem;
        border: none;
        height: 4rem;
        font-size: 2rem;
        font-weight: 600;
        background-color: rgba(255, 255, 255, 0.251);
        color: white;
        cursor: pointer;
        transition: 300ms ease;
      }
    }

    & .section-informations {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      gap: 3.5rem;

      & .title-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;

        & h2 {
          font-size: 5rem;
          font-weight: 700;
          line-height: 6rem;
          width: 48%;
        }

        & p {
          width: 40%;
          font-size: 2rem;
        }
      }
    }
  }
}

</style>
