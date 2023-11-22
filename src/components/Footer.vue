<template>
    <section id="footer-top" class="text-center">
        <h3 class="text-light">Let's talk about work</h3>
        <p class="text-light">A wonderful serenity has taken possession Far far away, behind the word mountains.</p>
        <button class="btn text-light text-uppercase">Get started</button>
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
    background-image: url('../assets/images/business-people-working-together-on-project-and-B3MZ4TX.jpg');
    object-fit: cover;
    object-position: center;
    padding: 150px;

    button {
        background-color: $blueHeader;
        border-radius: 1px;
        padding: 20px 70px;
    }
}

#footer-bottom {
    padding: 60px;

    .top-section {
        border-bottom: 1px solid $textGrey;
        padding-bottom: 60px;

        img {
            width: 100px;
        }

        a {
            color: $textGrey;
        }

        i {
            color: $lightColor;
            padding-left: 20px;

        }
    }

    .bottom-section {
        color: $textGrey;
        padding-top: 30px;
    }

}
</style>