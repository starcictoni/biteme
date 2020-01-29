<template>
  <div class="overlay" style="max-height: 50vh">
    <v-container fill-height fluid class="homebackground2"></v-container>
  </div>
</template>

<script>
export default {
  name: "HomeImg"
};
</script>
<style scoped>
.homebackground2 {
  background: url("/productvisualdemo1.png");
  background-size: contain;
  height: 100%;
  background-position: center center;
  z-index: 0;
  background-attachment: fixed;
  background-repeat: repeat;
}
.overlay {
  position: relative;
  width: 100%;
  height: 100%;
}
.tekst {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;
  font-size: 76px !important;
  line-height: 5rem;
  max-width: 70%;
  letter-spacing: -0.0083333333em !important;
}
</style>

