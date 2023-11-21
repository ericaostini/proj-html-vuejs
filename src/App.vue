<template>
  <Header />
</template>

<script>
import { store } from './components/data/store';
import Header from './components/Header.vue';
export default {
  name: "App",
  data() {
    return {
      store
    };
  },
  components: { Header }
}
</script>

<style lang="scss" scoped></style>
