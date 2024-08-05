<template>
  <div class="loader" v-if="funds.length == 0"></div>
  <ul class="list-funds__container" v-else>
    <li v-for="fund in funds" :key="fund.stock" class="fund-item">
      <div class="fund-item-header">
        <img :src="fund.logo" alt="Logo" />
        <div class="fund-item-header-details">
          <h3>{{ fund.stock }}</h3>
          <p>{{ fund.name }}</p>
        </div>
      </div>
      <div class="fund-item-pricing">
        <p class="fund-price">R$ {{ formatNumber(fund.close) }}</p>
        <div class="fund-item-pricing-variation" :class="{
          'up-variation': fund.change > 0,
          'down-variation': fund.change < 0,
          'zero-variation': fund.change === 0
        }">
          <img v-if="fund.change < 0" class="variation-svg" src="@/assets/images/down-variation.svg" alt="Down" />
          <img v-else class="variation-svg" src="@/assets/images/up-variation.svg" alt="Up" />
          <p>{{ formatNumber(fund.change) }}%</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface Fund {
  stock: string;
  name: string;
  close: number;
  change: number;
  volume: number;
  market_cap: number;
  logo: string;
  sector: string;
  type: string;
}

export default defineComponent({
  name: 'FundList',
  props: {
    funds: {
      type: Array as PropType<Fund[]>,
      required: true
    }
  },
  setup() {
    const formatNumber = (value: number | null): string => {
      return value !== null && value !== undefined ? value.toFixed(2).replace('.', ',') : 'N/A';
    };

    return {
      formatNumber
    };
  }
});
</script>



<style lang="scss">
@import '../../scss/abstracts/variables';
@import '../../scss/base/animations';

.loader {
  width: 45px;
  aspect-ratio: 1;
  --c:no-repeat linear-gradient(#000 0 0);
  background: var(--c), var(--c), var(--c);
  animation: 
    l15-1 1s infinite,
    l15-2 1s infinite;
}
@keyframes l15-1 {
 0%,100% {background-size:20% 100%}
 33%,66% {background-size:20% 40%}
}
@keyframes l15-2 {
 0%,33%   {background-position: 0    0,50% 100%,100% 100%}
 66%,100% {background-position: 100% 0,0   100%,50%  100%}
}

.list-funds__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  align-items: center;
  padding: 2% 8%;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  gap: 1.5rem;

  & .fund-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding: 2rem 3rem;
    border-radius: 1rem;
    background: $color-bg-2;
    animation: show-animation .5s ease-in-out;

    &-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;

      & img {
        border-radius: 1rem;
        width: 6rem;
        height: 100%;
        object-fit: cover;
      }

      &-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        & h3 {
          font-weight: 700;
          background: rgba(255, 255, 255, 0.251);
          width: fit-content;
          padding: .1rem 1rem;
          border-radius: .5rem;
        }

        & p {
          text-align: left;
          width: max-content;
          word-break: break-word;
        }
      }
    }

    &-pricing {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;

      & .fund-price {
        color: $color-highlight;
        background-color: rgba(255, 255, 255, 0.142);
        padding: 0.6rem;
        border-radius: 1rem;
        width: 100%;
      }

      &-variation {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        padding: 0.5rem;
        border-radius: 1rem;
        width: 100%;

        &.up-variation {
          color: #00e509;
          background-color: rgba(0, 255, 0, 0.142);
        }

        &.down-variation {
          color: red;
          background-color: rgba(255, 0, 0, 0.142);
        }

        &.zero-variation {
          color: white;
          background-color: rgba(255, 255, 255, 0.142);
        }

        & .variation-svg {
          width: 2rem;
        }
      }
    }
  }
}
</style>
