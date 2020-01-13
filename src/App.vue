<template>
  <v-app id="app">
    <navbar></navbar>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<style lang="scss"></style>