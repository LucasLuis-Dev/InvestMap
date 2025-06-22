<template>
    <footer class="footer">
        <div class="footer-info">
            <img class="logo" src="@/assets/images/logo.svg" alt="">
            <p>
                Seu portal essencial para navegar no mercado financeiro. Acesse dados em tempo real de Ações, FIIs e BDRs, e mantenha-se sempre atualizado com as tendências e movimentações que impactam seus investimentos. Capacite suas decisões com informação precisa e ao alcance das suas mãos.
            </p>
            <p>© 2025 InvestView. Todos os direitos reservados.</p>
        </div>
        <div class="footer-contact">
            <ul class="footer-contact-list">
                <li>
                    <a class="contact-link"  href="">
                        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <title>linkedin [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g fill="#FFF" id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" > <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#ffffff]"> </path> </g> </g> </g> </g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a class="contact-link"  href="">
                        <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g fill="#FFFF" id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g>
                        </svg>
                    </a>
                </li>
            </ul>
            <span>Desenvolvido por LucasLuis-Dev</span>
        </div>
    </footer>
</template>

<style lang="scss">
@import '../../scss/abstracts/variables';

.footer {
    display: grid;
    grid-template-columns: 1fr;
    background-color: $color-bg-2;
    padding: 8% 8%;
    gap: 2rem;
    color: white;
    z-index: 2;

    &-contact {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 2rem;

        &-list {
            display: flex;
            justify-content: space-between;
            list-style: none;
            gap: 1rem;

            & .contact-link {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                background-color: $color-highlight-2;
                border-radius: 50%;
                text-decoration: none;
                transition: 200ms all ease-in-out;

                &:hover {
                    transform: scale(1.1);
                }

                & svg {
                    width: 3rem;
                    fill: $color-bg-2;
                    stroke: $color-bg-2;
                }
            }
        }
    }

    &-info {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        & .logo {
            width: 20rem;
        }

        & span {
            font-weight: bold;
            font-size: 3rem;
        }

        & p {
            font-size: 1.5rem;
        }
    }

    &-final-section {
        display: flex;
        align-items: end;
        border-top: .1rem solid #8086a8;
        height: 5rem;

        & p {
            color: white;
            font-weight: 400;
        }
    }
}


@media screen and (min-width: 1200px) {
.footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: $color-bg-2;
    padding: 4% 8%;
    color: white;
    z-index: 2;

    &-contact {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;

        &-list {
            display: flex;
            justify-content: space-between;
            list-style: none;
            gap: 1rem;

            & .contact-link {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                background-color: $color-highlight-2;
                border-radius: 50%;
                text-decoration: none;
                transition: 200ms all ease-in-out;

                &:hover {
                    transform: scale(1.1);
                }

                & svg {
                    width: 3rem;
                    fill: $color-bg-2;
                    stroke: $color-bg-2;
                }
            }
        }
    }

    &-info {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 80%;

        & .logo {
            width: 25rem;
        }

        & span {
            font-weight: bold;
            font-size: 3rem;
        }

        & p {
            font-size: 1.5rem;
        }
    }

    &-final-section {
        display: flex;
        align-items: end;
        border-top: .1rem solid #8086a8;
        height: 5rem;

        & p {
            color: white;
            font-weight: 400;
        }
    }
}
}

@media screen and (min-width: 1600px) {
    .footer {

        &-contact {

            & span {
                font-size: 1.8rem;
            }

        &-list {
           
            & .contact-link {
                padding: 1.5rem;
                & svg {
                    width: 3.5rem;
                }
            }
        }
    }

    &-info {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        width: 80%;

        & .logo {
            width: 27rem;
        }

        & span {
            font-weight: bold;
            font-size: 3rem;
        }

        & p {
            font-size: 1.8rem;
        }
    }
}
}


</style>


<script lang="ts">

export default {
    name: 'AppFooter'
}
</script>