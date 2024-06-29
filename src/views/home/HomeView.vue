<script setup>
import { ref } from 'vue';
import AppHeader from './Header.vue';
import AppListFunds from './ListFunds.vue'
//import SelectButton from 'primevue/selectbutton';
/*
import SelectButton from 'primevue/selectbutton';

const value = ref('');
const options = ref(['teste 1', 'teste 2']);
*/
const selectedButton = ref('Todos');

function selectView(buttonName) {
  selectedButton.value = buttonName;
}
</script>


<template>
  <AppHeader />
  <main class="main-wrapper">
    <!--
      <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
     -->
      
   

    <section class="section-informations">
      <div class="title-box">
        <h2>Explore Informações Exclusivas do Mercado de Ações</h2>
        <p>Descubra as tendências e os insights mais recentes do mercado de ações em um único lugar. Nossa plataforma oferece acesso atualizado a dados críticos para investidores e entusiastas do mercado.</p>
      </div>

      <div class="select-button__container">
        <button 
        @click="selectView('Todos')" 
        :class="{ 'active': selectedButton === 'Todos' }"
        >Todos</button>
        <button 
        @click="selectView('FIIs')" 
        :class="{ 'active': selectedButton === 'FIIs' }"
        >FIIs</button>
        <button
        @click="selectView('Ações')"
        :class="{ active: selectedButton === 'Ações' }"
        >Ações</button>
        <button
        @click="selectView('Cotações')"
        :class="{ active: selectedButton === 'Cotações' }"
        >Cotações</button>
      </div>

      <AppListFunds :funds="Funds"/>
     
    </section>
    
  </main>
</template>

<script>
  const Funds = ['wd3d', 'ecec', 'w222']
</script>

<style lang="scss">

@import '../../scss/abstracts/variables';

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
    padding: .5rem;
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
      
      &.active {
        background: $color-highlight;
        color: $color-bg;
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

</style>




