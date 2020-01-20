<template>
  <v-container fluid class="white">
    <!-- <v-container> -->
      <v-col>
        <v-row
          class="display-1 font-weight-black text-black text-xs-center justify-center mt-5"
        >Kako funkcioniramo</v-row>
        <v-row class="mt-12 mb-12">
          <v-card class="mx-auto md-12" max-width="200" max-height="300" flat tile>
            <v-img
              class="stepimg white--text align-end"
              height="200px"
              src="https://htmlcolors.com/color-image/ffe600.png"
            ></v-img>
            <v-card-text class="text--primary text-center">
              <p class="headline font-weight-black text--primary">Korak 1</p>
              <div>
                Pellentesque dolor nisi, vulputate quis lobortis
                ac, tincidunt et quam.
              </div>
            </v-card-text>
          </v-card>
          <v-card class="mx-auto md-50px" max-width="200" max-height="300" flat tile>
            <v-img
              class="stepimg white--text align-end"
              height="200px"
              src="https://htmlcolors.com/color-image/ffe600.png"
            >
            </v-img>
            <v-card-text class="text--primary text-center">
                <p class="headline font-weight-black text--primary">Korak 2</p>
              <div>Vivamus in tortor gravida eros laoreet condimentum nec vel dui.</div>
            </v-card-text>
          </v-card>
          <v-card class="mx-auto md-50px" max-width="200" max-height="300" flat tile>
            <v-img
              class="stepimg white--text align-end"
              height="200px"
              src="https://htmlcolors.com/color-image/ffe600.png"
            >
            
            </v-img>
            <v-card-text class="text--primary text-center">
                <p class="headline font-weight-black text--primary">Korak 3</p>
              <div>Vestibulum aliquet vulputate erat. Phasellus id mauris mauris.</div>
            </v-card-text>
          </v-card>
        </v-row>
               
      </v-col>
    <!-- </v-container> -->
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
