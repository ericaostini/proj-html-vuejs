<template>
  <Header />
  <Main />
</template>

<script>
import { store } from './components/data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
  name: "App",
  data() {
    return {
      store
    };
  },
  components: { Header, Main }
}
</script>

<style lang="scss" scoped></style>
