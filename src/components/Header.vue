<template>
    <header>
        <div class="nav-position">
            <div class="px-4">
                <div
                    class="row align-items-lg-center justify-content-lg-between align-items-md-center align-items-sm-center justify-content-md-between justify-content-sm-between  ">
                    <div class="col-lg-2 col-md-2 col-sm-2 logo">
                        <img :src="'/images/logotype.png'" alt="logo Phlox">
                    </div>
                    <div class="col-lg-10 col-md-10 d-sm-none d-lg-block d-md-block">
                        <ul class="nav d-flex justify-content-end ">
                            <li class="nav-item d-flex" v-for="(item, navIndex) in this.store.navBar">
                                <a class="nav-link pt-4 mx-2 text-light" href="#"
                                    :class="item.active ? 'border-active' : 'hover-effect'" @click="displayActive()">{{
                                        item.navItem }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-2 d-lg-none d-md-none d-sm-block pt-4">
                        <button class="btn"><i class="fa-solid fa-bars fs-3" @click="showMenu()"></i></button>
                    </div>
                    <div class="hamburger-menu" :class="menu ? 'show-menu' : 'not-menu'">
                        <ul>
                            <li v-for="(item, navIndex) in this.store.navBar">
                                <a class="text-light" href="#">{{
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
                <button class="btn text-uppercase btn-hover">read more</button>
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
            store,
            menu: false
        }
    },
    methods: {
        showMenu() {
            this.menu = !this.menu
        },
        displayActive() {
            this.store.item.active = !this.store.item.active
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

header {
    position: relative;
    height: 900px;
    background-color: $blueHeader;

    .nav-position {
        position: absolute;
        top: 0;
        z-index: 10;
        right: 0;
        left: 0;

        .logo {
            background-color: $blueHeader;
            padding-top: 20px;

            img {
                width: auto;
                height: 20px;
            }
        }

        .hamburger-menu {
            cursor: pointer;
            background-color: $blueHeader;
            width: 30%;
            position: absolute;
            z-index: 50;
            top: 80px;
            right: 20px;
            padding: 20px;

            li {
                list-style: none;
                line-height: 40px;

                a {
                    text-decoration: none;

                }
            }

        }

    }

    .image {
        img {
            object-fit: cover;
            width: 75%;
            height: 900px;
            z-index: 1;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
        }

    }

    .title-header {
        position: absolute;
        z-index: 20;
        top: 300px;
        width: 45%;

        .border-green {
            width: 8%;
            border: 2px solid $mainGreen;
        }

        h5 {
            font-weight: $fontMild;
            font-size: 18px;
            letter-spacing: 5px;
        }

        h1 {
            font-size: 100px;
            line-height: 80px;
            font-family: $titleFont;
        }

        button {
            position: relative;
            z-index: 1;
            background-color: #39FFBF;
            border-radius: 1px;
            color: $blueHeader;
            cursor: pointer;
            display: flex;
            align-self: center;
            font-size: 1rem;
            padding: 20px 60px;
            text-align: center;
            font-weight: 300;
            transition: color 0.5s ease-in;

            &:after {
                content: '';
                position: absolute;
                display: block;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 100%;
                background: red;
                z-index: -1;
                transition: width 0.3s ease-in;
            }

            &:hover {
                color: #fff;
                border-color: red;

                &:after {
                    width: 100%;
                }
            }

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

.not-menu {
    opacity: 0;
}

.show-menu {
    opacity: 1;
}
</style>