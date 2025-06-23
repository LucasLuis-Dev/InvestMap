<template>
    <div class="bg"></div>
    <div class="bg-2"></div>
    <header>

        <div class="header-informations">
            <h1 class="header-informations-title">
                Acesse o mercado financeiro em segundos com o <span>InvestView!</span>
            </h1>
            <p>
                Simplificamos o acesso aos dados essenciais para que você possa focar no que realmente importa: seus investimentos.
            </p>
            <a href="#fundsList">
                Explorar Mercado
            </a>
        </div>

         <figure>
            <img :src="imageSrc" alt="Logo" />
        </figure>

    </header>
</template>


<style lang="scss">
@import '../../scss/abstracts/variables';


        .bg {
        position: absolute;
        background: url('../../assets/images/bg.svg') no-repeat;
        width: 100%;
        height: 100%;
    }

    
     header {
        display: flex;
        flex-direction: column;
        grid-template-columns: 1fr;
        padding: 15% 0%;
        padding-left: 4%;
        padding-right: 4%;
        color: white;
        height: fit-content;
        gap: 3rem;
        z-index: 2;

        & .header-informations {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 2rem;
            width: 100%;

            &-title {
                font-family: 'DM Sans', Arial, Helvetica, sans-serif;
                font-weight: 700;
                font-size: 3.5rem;
                line-height: 4rem;

                & span {
                    font-weight: 700;
                }
            }

            
            & a {
                border: none;
                border-radius: 5rem;
                background-color: $color-highlight-2;
                color: white;
                font-size: 1.3rem;
                text-transform: uppercase;
                font-weight: 800;
                padding: 1.5rem 3.5rem;
                transition: all 200ms ease-in-out;
                cursor: pointer;
                width: 100%;
                text-align: center;

                &:hover {
                    background-color: #031FB4;
                }
            }

        }

        & figure {
            text-align: center;

            & img {
                width: 100%;
            }
        }
    }

    @media screen and (min-width: 1280px) {

        .bg {
        position: absolute;
        background: url('../../assets/images/bg.svg') no-repeat;
        width: 100%;
        height: 100%;
    }

    .bg-2 {
        position: absolute;
        background: url('../../assets/images/bg-2.svg') no-repeat;
        right: -60%;
        bottom: -20%;
        width: 100%;
        height: 120%;
    }

        header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 2% 0%;
        padding-left: 8%;
        padding-right: 0%;
        color: white;
        height: fit-content;
        z-index: 2;

        & .header-informations {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 2rem;
            width: 80%;

            &-title {
                font-family: 'DM Sans', Arial, Helvetica, sans-serif;
                font-weight: 700;
                font-size: 6rem;
                line-height: 6.5rem;
                text-align: left;

                & span {
                    font-weight: 700;
                }
            }

             & p {
                text-align: left;
            }

            & a {
                border: none;
                border-radius: 5rem;
                background-color: $color-highlight-2;
                color: white;
                font-size: 1.5rem;
                text-transform: uppercase;
                font-weight: 800;
                padding: 2rem 4rem;
                transition: all 200ms ease-in-out;
                cursor: pointer;
                width: fit-content;

                &:hover {
                    background-color: #031FB4;
                }
            }

        }

        & figure {
            text-align: end;

            & img {
                width: 85%;
            }
        }
    }
    }
   
    @media screen and (min-width: 1601px) {
        header {
    
            & .header-informations {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 2.5rem;
                width: 80%;

                &-title {
                    font-family: 'DM Sans', Arial, Helvetica, sans-serif;
                    font-weight: 700;
                    font-size: 6.5rem;
                    line-height: 7rem;
                }

                & p {
                    font-size: 2.2rem;
                    line-height: 3.5rem;
                }

                 & a {
               
                  font-size: 2rem;
                
                 }

            }

            & figure {
                text-align: end;

                & img {
                    width: 85%;
                }
            }
        }
    }
</style>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const imageSrc = ref('');

    onMounted(() => {
      const isMobile = window.innerWidth <= 768; 
      imageSrc.value = isMobile
        ? new URL('@/assets/images/Apple Computers - mobile.svg', import.meta.url).href
        : new URL('@/assets/images/Apple Computers.svg', import.meta.url).href;
    });

    return {
      imageSrc
    };
  }
});
</script>

