<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import { store } from './components/data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
export default {
  name: "App",
  data() {
    return {
      store
    };
  },
  components: { Header, Main, Footer }
}
</script>

<style lang="scss" scoped></style>
