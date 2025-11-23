<template>
  <AppNavbar  />
  <div class="fund-detail">
     <!-- Loading -->
    <AppLoader v-if="loading" />

    <!-- Erro -->
    <div v-if="error">{{ error }}</div>

    <!-- Dados do Fundo -->
    <div class="fund-info" v-if="fundData">
      <div class="fund-header">
        <figure class="fund-figure">
          <img :src="fundData.logourl" alt="Logo" class="fund-logo" />
          <h2 class="fund-name">{{ fundData.longName }}</h2> 
        </figure>
        <ul class="fund-data">
          <li class="data-box">
              <p><strong>Símbolo</strong></p>
              <span>{{ fundData.symbol }}</span>
          </li>
          <li class="data-box">
              <p><strong>Preço Atual</strong></p>
              <span>R$ {{ fundData.regularMarketPrice }}</span>
          </li>
          <li class="data-box">
              <p><strong>Variação</strong></p>
              <span>{{ fundData.regularMarketChangePercent.toFixed(2) }}%</span>
          </li>
          <li class="data-box">
              <p><strong>Volume Diário</strong></p>
              <span>{{ formatNumber(fundData.regularMarketVolume) }}</span>
          </li>
          <li class="data-box">
              <p><strong>Abertura do dia</strong></p>
              <span> R$ {{ fundData.regularMarketOpen }}</span>
          </li>
          <li class="data-box">
             <p><strong>Fechamento anterior</strong></p>
             <span> R$ {{ fundData.regularMarketPreviousClose }}</span>
          </li>
           <li class="data-box">
              <p><strong>Alta do dia</strong></p>
              <span>R$ {{ fundData.regularMarketDayHigh }}</span>
          </li>
          <li class="data-box">
              <p><strong>Baixa do dia</strong></p>
              <span>R$ {{ fundData.regularMarketDayLow }}</span>
          </li>
        </ul>
      </div>

      <!-- Gráfico de Histórico de Preços -->
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        :canvasProps="{ style: 'width: 100%; height: 100%;' }"
        class="fund-chart"
        style="width: 100%; height: 100%;"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Chart from 'primevue/chart'
import AppNavbar from '../../layout/navbar/Navbar.vue'
import AppLoader from '../../components/Loader.vue'

export default defineComponent({
  name: 'FundDetail',
  components: {
    Chart,
    AppNavbar,
    AppLoader
  },
  data() {
    return {
      stock: '' as string,
      fundData: null as any,
      chartData: {} as any,
      chartOptions: {} as any,
      loading: false as boolean,
      error: '' as string,
    }
  },
  created() {
    const route = useRoute()
    this.stock = route.params.stock as string
    this.fetchFundDetails()
  },
  methods: {
    formatNumber(value: number) {
      return new Intl.NumberFormat('pt-BR').format(value)
    },
    async fetchFundDetails() {
      this.loading = true
      this.error = ''
     

      try {
        const token = import.meta.env.VITE_API_KEY;
        const url = `https://brapi.dev/api/quote/${this.stock}?range=5d&interval=1d`

        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`  
          }
        })
        
        const data = await response.json()

        if (data.results && data.results.length > 0) {
          this.fundData = data.results[0]

          const historicalPrices = this.fundData.historicalDataPrice || []

          this.chartData = {
            labels: historicalPrices.map((item: any) => {
              const date = new Date(item.date * 1000)
              return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`
            }),
            datasets: [
              {
                label: 'Preço de Fechamento',
                data: historicalPrices.map((item: any) => item.close),
                fill: true,
                borderColor: '#FFFF',
                backgroundColor: '#0328EE',
                tension: 0.3
              }
            ]
          }

          this.chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  color: '#FFFFFF'  // ✅ Cor do texto da legenda
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: '#FFFFFF'  // ✅ Cor dos números do eixo X
                },
                title: {
                  display: true,
                  text: 'Data',
                  color: '#FFFFFF'  // ✅ Cor do título do eixo X
                },
                grid: {
                  color: 'rgba(255,255,255,0.2)',  // ✅ Cor da grade do eixo X
                  borderColor: 'rgba(255,255,255,0.2)'  // ✅ Cor da borda da escala
                }
              },
              y: {
                ticks: {
                  color: '#FFFFFF'  // ✅ Cor dos números do eixo Y
                },
                title: {
                  display: true,
                  text: 'Preço (R$)',
                  color: '#FFFFFF'  // ✅ Cor do título do eixo Y
                },
                grid: {
                  color: 'rgba(255,255,255,0.2)',  // ✅ Cor da grade do eixo Y
                  borderColor: 'rgba(255,255,255,0.2)'  // ✅ Cor da borda da escala
                }
              }
            }
          }

        } else {
          this.error = 'Fundo não encontrado.'
        }
      } catch (err) {
        console.error(err)
        this.error = 'Erro ao carregar os detalhes do fundo.'
      } finally {
        this.loading = false
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import '../../scss/abstracts/variables';



.fund-detail {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 12% 4%;
  margin-top: -3%;

  & .fund-info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
    background-color: $color-bg-2;
    padding: 1.5rem;
    border-radius: 2rem;

     & .fund-header {
      display: flex;
      flex-direction: column;
      color: white;
      justify-content: space-between;
      gap: 1.5rem;

      & .fund-figure {
        display: flex;
        gap: 1rem;
        align-items: center;

        & .fund-logo {
          height: 100%;
          border-radius: 1rem;
        }

        & .fund-name {
          font-weight: 700;
          font-size: 2rem;
          line-height: normal;
        }
      }

      & .fund-data {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        & .data-box {
          display: flex;
          flex-direction: column;
          background-color: rgba(255, 255, 255, 0.251);
          padding: .7rem;
          border-radius: 1rem;
          gap: .5rem;

          & p {
            font-size: 1.2rem;
            font-weight: 600;
          }

          & span {
            font-weight: bold;
            font-size: 1.7rem;
          }
        }
      }
    }
  }
}

.fund-chart {
  max-width: 100%;
  height: 30rem !important;
  background-color: rgba(255, 255, 255, 0.251);
  padding: .7rem;
  border-radius: 1rem;
}

@media screen and (min-width: 1280px) {

.fund-detail {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding: 0% 8%;
  margin-top: -3%;

  & .fund-info {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
    width: 100%;
    background-color: $color-bg-2;
    padding: 4rem;
    border-radius: 2rem;

     & .fund-header {
      display: flex;
      flex-direction: column;
      color: white;
      justify-content: center;
      gap: 3rem;

      & .fund-figure {
        display: flex;
        gap: 1rem;
        align-items: center;

        & .fund-logo {
          height: 100%;
          border-radius: 1rem;
        }

        & .fund-name {
          font-weight: 700;
          font-size: 2.7rem;
          line-height: normal;
        }
      }

      & .fund-data {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        & .data-box {
          display: flex;
          flex-direction: column;
          background-color: rgba(255, 255, 255, 0.251);
          padding: 1rem;
          border-radius: 1rem;
          gap: .5rem;

          & p {
            font-size: 1.4rem;
            font-weight: 600;
          }

          & span {
            font-weight: bold;
            font-size: 1.7rem;
          }
        }
      }
    }
  }
}

.fund-chart {
  max-width: 100%;
  height: 100% !important;
  background-color: rgba(255, 255, 255, 0.251);
  padding: .7rem;
  border-radius: 1rem;
}
}

@media screen and (min-width: 1600px) {
  
.fund-detail {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding: 0% 8%;
  margin-top: -3%;

  & .fund-info {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 5rem;
    width: 100%;
    background-color: $color-bg-2;
    padding: 4rem;
    border-radius: 2rem;

     & .fund-header {
      display: flex;
      flex-direction: column;
      color: white;
      justify-content: space-between;
      gap: 2rem;

      & .fund-figure {
        display: flex;
        gap: 1.5rem;
        align-items: center;


        & .fund-name {
          font-weight: 700;
          font-size: 3.5rem;
          line-height: normal;
        }
      }

      & .fund-data {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        & .data-box {
          display: flex;
          flex-direction: column;
          background-color: rgba(255, 255, 255, 0.251);
          padding: 1rem;
          border-radius: 1rem;
          gap: .5rem;

          & p {
            font-size: 1.7rem;
            font-weight: 600;
          }

          & span {
            font-weight: bold;
            font-size: 2.2rem;
          }
        }
      }
    }
  }
}

.fund-chart {
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.251);
  padding: 1rem;
  border-radius: 1rem;
}
}

</style>
