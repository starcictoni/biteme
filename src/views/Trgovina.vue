<template>
  <v-app background>
      <v-container fluid class="trgbackground">
        <TrgoCard></TrgoCard>
      </v-container>
  </v-app>
</template>


<script>
//import localStore from '@/localStore.js';
import TrgoCard from "@/components/TrgoCard.vue";

export default {
  ime: "trgovina",
  components: {
    TrgoCard
  },
};
</script>

<style lang="scss">
.trgbackground {
    background-size: contain;
    background: url('https://via.placeholder.com/1500x900/ffe600/ffe600');
    height: 100%;
    width: 100%   
}
</style>                                                                                                                          