<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <img :src="'/images/logotype.png'" alt="logo Phlox">
            </div>
            <div class="col-4">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#"
                            v-for="(item, navIndex) in this.store.navBar">{{ item.navItem }}</a>
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

<style lang="scss" scoped></style>