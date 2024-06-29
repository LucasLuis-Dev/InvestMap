<template>
    <div class="bg"></div>
    <div class="bg-2"></div>
    <header>

        <div class="header-informations">
            <h1 class="header-informations-title">
                Acesse o mercado financeiro em segundos com o <span>InvestMap!</span>
            </h1>
            <p>
                Simplificamos o acesso aos dados essenciais para que você possa focar no que realmente importa: seus investimentos.
            </p>
        </div>

        <figure>
            <img src="@/assets/images/Apple Computers.svg" alt="">
        </figure>

    </header>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style lang="scss">

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
        grid-template-columns: 2fr 1fr;
        padding-left: 8%;
        color: white;
        height: fit-content;
        z-index: 2;

        & .header-informations {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            &-title {
                font-family: 'DM Sans';
                font-weight: 700;
                font-size: 5rem;
                line-height: 6rem;

                & span {
                    color: #FFD630;
                    font-weight: 700;
                }
            }

        }
    }
</style>