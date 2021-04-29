<template>
  <div class="home">
    <Loading v-model:active="isLoading" :is-full-page="fullPage"></Loading>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    HelloWorld,
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>
