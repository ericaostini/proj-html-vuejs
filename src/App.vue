<template>
  <Header />
  <Main />
  <Footer />
  <Chat />
  <button class="btn btn-light" @click="scrollTop()"><i class="fa-solid fa-arrow-up"></i></button>
</template>

<script>
import { store } from './components/data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Chat from './components/Chat.vue';
export default {
  name: "App",
  data() {
    return {
      store
    };
  },
  methods: {
    scrollTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  },
  components: { Header, Main, Footer, Chat }
}
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;

button {
  position: fixed;
  bottom: 30px;
  right: 120px;
  z-index: 99;
}
</style>
