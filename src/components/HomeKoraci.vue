<template>
  <v-container fluid class="white">
    <v-col>
      <v-row
        class="display-1 font-weight-black text-black text-xs-center justify-center mt-5"
      >Kako funkcioniramo</v-row>
      <v-row class="mt-12 mb-12">
        <v-card class="mx-auto md-12" max-width="200" max-height="300" flat tile>
          <v-img
            class="stepimg white--text text-center align-center"
            height="200px"
            src="https://htmlcolors.com/color-image/ffe600.png"
          >
            <v-icon class="mx-auto" size="100" color="black">mdi-animation-outline</v-icon>
          </v-img>
          <v-card-text class="text--primary text-center">
            <p class="headline font-weight-black text--primary">Naruči</p>
            <div>Iz široke ponude domaćih ¸i zdravih namirnica odaberi ono što želiš. 🤤</div>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto md-50px" max-width="200" max-height="300" flat tile>
          <v-img
            class="stepimg white--text text-center align-center"
            height="200px"
            src="https://htmlcolors.com/color-image/ffe600.png"
          >
            <v-icon class="mx-auto" size="100" color="black">mdi-truck-delivery-outline</v-icon>
          </v-img>
          <v-card-text class="text--primary text-center">
            <p class="headline font-weight-black text--primary">Dostava</p>
            <div>Odabrano ti šaljemo - kad želiš i gdje želiš! 👉</div>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto md-50px" max-width="200" max-height="300" flat tile>
          <v-img
            class="stepimg white--text text-center align-center"
            height="200px"
            src="https://htmlcolors.com/color-image/ffe600.png"
          >
            <v-icon class="mx-auto" size="100" color="black">mdi-pasta</v-icon>
          </v-img>
          <v-card-text class="text--primary text-center">
            <p class="headline font-weight-black text--primary">Uživaj!</p>
            <div>Uživaj u domaćem, svježem pripremljenom obroku. 👌</div>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "HomeKoraci"
};
</script>

<style scoped>
.stepimg {
  border-radius: 50% !important;
  outline-width: 2px;
  outline-color: blue;
}
</style>
