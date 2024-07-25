<template>
    <footer class="footer">
        <div class="footer-initial-section">
            <img class="logo" src="@/assets/images/logo.png" alt="">
            <ul class="footer-contact-list">
                <li>
                    <a class="contact-link" href="">
                        <img src="@/assets/images/instagram.svg" alt="">
                    </a>
                </li>
                <li>
                    <a class="contact-link"  href="">
                        <img src="@/assets/images/linkedin.svg" alt="">
                    </a>
                </li>
                <li>
                    <a class="contact-link"  href="">
                        <img src="@/assets/images/github.svg" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div></div>
        <div class="footer-final-section">
            <p>All rights reserved</p>
        </div>
    </footer>
</template>

<style lang="scss">

.footer {
    background-color: #010D50;
    padding: 3% 8%;
    color: white;
    z-index: 2;

    &-initial-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10rem;

        & .logo {
            width: 12%;
            height: fit-content;
        }

        & .footer-contact-list {
            display: flex;
            justify-content: space-between;
            list-style: none;
            gap: 1rem;

            & .contact-link {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .7rem;
                background-color: #8086a8;
                border-radius: 50%;
                text-decoration: none;

                & img {
                    width: 2rem;
                }
            }
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

</style>


<script lang="ts">

export default {
    name: 'AppFooter'
}
</script>