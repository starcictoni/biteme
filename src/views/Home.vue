<template>
  <span>
    <!-- {{this.username}} -->
    <hero></hero>
    <homekoraci></homekoraci>
    <!-- <div class="videowrapper"> OVO JE U TRENUTNO TESTNOJ FAZI 
      <div style="background-color: black" class="view hm-black-strong">
        <video stlyle="color: black" class="video-fluid videocrop" autoplay loop muted>
          <source
            src="https://storage.googleapis.com/coverr-main/mp4%2F4X4-in-Vinyard.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div style="color: black" justify="center" class="overlay"><h3 class="h3-responsive align-center justify-center">Light mask</h3></div>

    </div>
    <homekoraci></homekoraci> -->
  </span>
</template>

<script>
import hero from "@/components/Hero";
import homekoraci from "@/components/HomeKoraci";
import localStore from "@/localStore.js";

export default {
  name: "home",
  components: {
    hero,
    homekoraci
  },
  data() {
    return localStore;
  }
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
