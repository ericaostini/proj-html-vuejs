<template>
    <main>
        <section id="consultant">
            <div class="container">
                <h4>Our consultants can help you</h4>
                <div class="border-green"></div>
            </div>
            <div class="card border" v-for="(consultant, cIndex) in this.store.consultants">
                <h5>{{ consultant.title }}</h5>
                <p>{{ consultant.text }}</p>
            </div>
        </section>
    </main>
</template>

<script>
import { store } from './data/store';
export default {
    name: 'Main',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

#consultant {
    width: 95%;
    float: right;
    background-color: $lightColor;

    .border-green {
        width: 4%;
        height: 4px;
        border: 2px solid $mainGreen;
    }
}
</style>