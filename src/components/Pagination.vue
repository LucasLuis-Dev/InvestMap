<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';

export default defineComponent({
  name: 'AppPagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  emits: ['page-changed'],
  setup(props, { emit }) {
    const selectPage = ref(props.currentPage);

    const changePage = (page: number) => {
      if (page < 1 || page > props.totalPages) return;
      selectPage.value = page;
      emit('page-changed', page);
    };

    const visiblePages = computed(() => {
      const total = props.totalPages;
      const current = selectPage.value;
      const pageLimit = 5;
      const startPage = Math.floor((current - 1) / pageLimit) * pageLimit + 1;
      const endPage = Math.min(startPage + pageLimit - 1, total);
      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    });

    watch(() => props.currentPage, (newVal) => {
      selectPage.value = newVal;
    });

    return {
      selectPage,
      changePage,
      visiblePages
    };
  }
});
</script>

<template>
  <ul class="pagination">
    <li @click="changePage(selectPage - 1)">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon-navigation" viewBox="0 0 320 512">
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
      </svg>
    </li>
    <li v-for="page in visiblePages" :key="page" :class="{ 'current-page': page === selectPage }" @click="changePage(page)">
      {{ page }}
    </li>
    <li @click="changePage(selectPage + 1)">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon-navigation" viewBox="0 0 320 512">
        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
      </svg>
    </li>
  </ul>
</template>

<style lang="scss">
@import '../scss/abstracts/variables';



.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  background-color:#1a203b;
  padding: .5rem;
  gap: 1rem;
  border-radius: 50rem;
  width: 100%;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.251);
    width: 100%;
    height: 4rem;
    text-align: center;
    border-radius: 50rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 200ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.427);
      }

    &.current-page {
      background-color: $color-highlight;
      color: $color-bg;
      font-weight: 600;
    }

    & .icon-navigation {
      display: flex;
      width: 1rem;
      fill: white;
    }
  }
}

@media screen and (min-width: 1200px) {
  
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  background-color:#1a203b;
  padding: .5rem;
  gap: 1rem;
  border-radius: 50rem;
  width: 50%;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.251);
    width: 100%;
    height: 4rem;
    text-align: center;
    border-radius: 50rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 200ms;

    &:hover {
        background-color: rgba(255, 255, 255, 0.427);
      }

    &.current-page {
      background-color: $color-highlight;
      color: $color-bg;
      font-weight: 600;
    }

    & .icon-navigation {
      display: flex;
      width: 1rem;
      fill: white;
    }
  }
}
}

</style>
