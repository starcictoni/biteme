<template>
  <v-container fluid class="backgroundimg">
    <NamCard></NamCard>
  </v-container>
</template>

<script>
import NamCard from "@/components/NamCard.vue";

export default {
  ime: "namirnice",
  components: {
    NamCard
  },
};
</script>

<style lang="scss">
.textbg {
  padding-bottom: 0px;
  padding-top: 8px;
}
.backgroundimg {
  background: url("https://i.imgur.com/oJxfKdW.png");
  background-size: contain;
  width: 100%;
  height: 100%;
}
</style>