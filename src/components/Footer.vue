<template>
    <section id="footer-top" class="text-center">
        <h1 class="text-light">Let's talk about work</h1>
        <p class="text-light fw-light">A wonderful serenity has taken possession Far far away, behind the word
            mountains.
        </p>
        <div class="button-effect align">
            <button class="btn text-uppercase">Get started</button>
        </div>
    </section>
    <section id="footer-bottom">
        <div class="d-flex align-items-center justify-content-between top-section">
            <img :src="'/images/logotype-2-150x25.png'" alt="logo">
            <ul class="nav">
                <li class="nav-item" v-for="(item, navIndex) in this.store.navBar">
                    <a class="nav-link" aria-current="page" href="#">{{
                        item.navItem }}</a>
                </li>
            </ul>
            <div>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
        <div class="bottom-section d-flex align-items-center justify-content-between">
            <p>Terms of use <br> Privacy Enviromental Policy</p>
            <p>Copyright &copy; 2023 Phlox Consulting All Rights Reserved</p>
        </div>
    </section>
</template>

<script>
import { store } from './data/store';
export default {
    name: 'Footer',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

#footer-top {
    position: relative;
    width: 100%;
    background-image: url('../assets/images/business-people-working-together-on-project-and-B3MZ4TX.jpg');
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
    padding: 150px;

    h1 {
        font-size: 50px;
        font-family: $titleFont;
    }

    p {
        font-size: 18px;
    }


    button {
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        cursor: pointer;
        background-color: $blueHeader;
        color: $lightColor;
        padding: 18px 60px;
        border-radius: 1px;
        transition: color 0.5s ease-in;

        &:after {
            content: '';
            position: absolute;
            display: block;
            top: 0;
            left: 50%;
            transform: translate(-50%);
            width: 0;
            height: 100%;
            background-color: $mainGreen;
            z-index: -1;
            transition: width 0.3s ease-in;
        }

        &:hover {
            color: $blueHeader;
            border-color: $mainGreen;

            &:after {
                width: 100%;
            }
        }
    }
}

#footer-bottom {
    padding: 60px;
    font-weight: $fontMild;

    .top-section {
        border-bottom: 1px solid $textGrey;
        padding-bottom: 60px;

        img {
            width: 100px;
        }

        a {
            color: $textGrey;

            &:hover {
                color: $mainRed;
            }
        }

        i {
            color: $lightColor;
            padding-left: 20px;

            &:hover {
                color: $mainRed;
            }

        }
    }

    .bottom-section {
        color: $textGrey;
        padding-top: 30px;
    }

}
</style>