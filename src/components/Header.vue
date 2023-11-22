<template>
    <header>
        <div class="nav-position">
            <div class="px-4">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-2 col-md-4 col-sm-3 logo">
                        <img :src="'/images/logotype.png'" alt="logo Phlox">
                    </div>
                    <div class="col-lg-10 col-md-7 col-sm-9">
                        <ul class="nav d-flex justify-content-end">
                            <li class="nav-item d-flex" v-for="(item, navIndex) in this.store.navBar">
                                <a class="nav-link pt-4 mx-2 text-light" aria-current="page" href="#"
                                    :class="item.active === true ? 'border-active' : 'hover-effect'">{{
                                        item.navItem }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="image">
            <img :src="'/images/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg'">
        </div>
        <div class="text-light text-uppercase title-header container">
            <div class="d-flex align-items-center px-3">
                <div class="border-green mb-2"></div>
                <h5 class="px-3">Always the best way you need it</h5>
            </div>
            <h1 class="px-3">The best business consulting</h1>
            <div class="px-3 d-flex align-items-center pt-5">
                <button class="btn text-uppercase">read more</button>
                <i class="fa-regular fa-circle-play p-3"></i>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../components/data/store';
export default {
    name: 'Header',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

header {
    position: relative;
    height: 1000px;
    width: 100%;
    background-color: $blueHeader;

    .nav-position {
        position: absolute;
        top: 0;
        z-index: 10;
        right: 0;
        left: 0;

        .logo {
            background-color: $blueHeader;

            img {
                width: auto;
                height: 20px;
            }
        }

    }

    .image {
        img {
            object-fit: cover;
            width: 1000px;
            height: 900px;
            z-index: 1;
            position: absolute;
            top: 0;
            right: 0;
        }

    }

    .title-header {
        position: absolute;
        z-index: 20;
        top: 300px;
        width: 45%;

        .border-green {
            width: 4%;
            height: 4px;
            border: 2px solid $mainGreen;
        }

        h1 {
            font-size: 100px;
            line-height: 90px;
        }

        button {
            background-color: $mainGreen;
            width: 40%;
            padding: 28px;
            border-radius: 1px;
        }

        i {
            font-size: 50px;
        }

    }
}


.border-active {
    text-decoration: underline 2px $lightColor;
}

.hover-effect {
    font-weight: 100;
    position: relative;

    &:hover,
    &:focus,
    &:active {
        cursor: pointer;

        &:after {
            width: 100%;
        }
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 3px;
        background-color: $lightColor;
        width: 0;
        transition: width .8s;
    }
}
</style>