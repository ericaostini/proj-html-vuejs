<template>
  <Header />
  <Main />
  <Footer />
  <button class="btn btn-light"><i class="fa-regular fa-comment"></i></button>
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

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;

button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
  padding: 12px 15px;
  background-color: $chatColor;
  border-radius: 50px;
  border-color: $chatColor;

  i {
    font-size: 30px;
    color: $lightColor;
  }

  &:hover i {
    color: black;
  }
}
</style>
