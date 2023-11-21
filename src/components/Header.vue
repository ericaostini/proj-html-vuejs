<template>
    <header>
        <div class="container-lg">
            <div class="row align-items-center">
                <div class="col-lg-2 col-md-4 col-sm-3 logo">
                    <img :src="'/images/logotype.png'" alt="logo Phlox">
                </div>
                <div class="col-lg-10 col-md-7 col-sm-9">
                    <ul class="nav d-flex justify-content-end">
                        <li class="nav-item d-flex" v-for="(item, navIndex) in this.store.navBar">
                            <a class="nav-link pt-4 mx-2 text-light" aria-current="page" href="#"
                                :class="{ 'border-active': item.active === true }">{{
                                    item.navItem }}</a>
                        </li>
                    </ul>
                </div>
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
    background-image: url('../assets/images/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg');
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    height: 130vh;
    background-color: $blueHeader;
}

.logo {
    background-color: $blueHeader;

    img {
        width: auto;
        height: 20px;
    }
}

.border-active {
    border-top: 3px solid $lightColor;
}
</style>