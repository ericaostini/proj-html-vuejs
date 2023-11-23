<template>
  <Header />
  <Main />
  <Footer />
  <Chat />
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

  },
  components: { Header, Main, Footer, Chat }
}
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;
</style>
