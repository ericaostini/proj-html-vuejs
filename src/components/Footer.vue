<template>
    <section id="footer-top" class="text-center">
        <h3 class="text-light">Let's talk about work</h3>
        <p class="text-light">A wonderful serenity has taken possession Far far away, behind the word mountains.</p>
        <button class="btn text-light text-uppercase">Get started</button>
    </section>
    <section id="footer-bottom">

    </section>
</template>

<script>
export default {
    name: 'Footer'
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
</style>