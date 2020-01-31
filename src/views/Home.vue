<template>
  <span>
    <hero></hero>
    <heroauth></heroauth>
    <homekoraci></homekoraci>
    <homeimg></homeimg>
    <homeeko></homeeko>  
  </span
  >
</template>

<script>
import hero from "@/components/Hero";
import heroauth from "@/components/HeroAuth";
import homekoraci from "@/components/HomeKoraci";
import homeimg from "@/components/HomeImg";
import homeeko from "@/components/HomeEko";

export default {
  name: "home",
  components: {
    hero,
    homekoraci,
    heroauth,
    homeimg,
    homeeko
  },

};
</script>

<style lang="scss">
.videowrapper {
  width: 100%;
  overflow: hidden;
  display: block;
  height: 460px;
  align-items: center;
  background-color: black;
  position: relative;
  
}
.videocrop {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
}
.overlay {
    position:absolute;
    top:0;
    left:0;
    z-index:1;
}
</style>
