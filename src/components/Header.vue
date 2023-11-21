<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-4 logo">
                <img :src="'/images/logotype.png'" alt="logo Phlox">
            </div>
            <div class="col-8">
                <ul class="nav d-flex justify-content-end">
                    <li class="nav-item d-flex" v-for="(item, navIndex) in this.store.navBar">
                        <a class="nav-link pt-4 mx-2" aria-current="page" href="#"
                            :class="{ 'border-active': item.active === true }">{{
                                item.navItem }}</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
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

.logo {
    img {
        width: auto;
        height: 20px;
    }
}

.border-active {
    border-top: 3px solid red
}
</style>