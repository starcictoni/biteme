<template>
  <v-app style="background: rgb(0,0,0,0) !important">
    <v-row class="justify-left">
      <v-col
        class="justify-center"
        sm="12"
        md="3"
        v-for="grocery in groceries"
        :key="grocery.id"
      >
        <v-card color="rgb(255, 0, 0, 0)" elevation="10" class="mx-auto mb-12" max-width="350">
          <!-- Slika namirnice -->
          <v-img class="align-end justify-center" :src="grocery.pic" height="100px"></v-img>
          <v-row style="background: white !important" class="mx-0 align-center">
            <v-col class="pl-0" height="10px">
              <!-- Ime namirnice -->
              <v-card-title class="justify-left py-1 title font-weight-bold">{{ grocery.ime }}</v-card-title>
            </v-col>
            <v-col >
              <!-- Cijena po jedinici -->
              <v-card-subtitle
                class="text-center py-1 px-0 subtitle-1 black--text font-weight-black"
              >{{grocery.kolicina + ': '}}{{grocery.cijena + ' kn' }}</v-card-subtitle>
            </v-col>
          </v-row>
          <v-row
            style="background-color: #ffe600 !important"
            class="mb-0"
            no-gutters
            justify="center"
            align="center"
          >
            <v-col align="center" cols="7" class="align-center">
              <!-- Dodavanje namirnice u kosaricu -->
              <DodajProizvod
                :id="grocery.id"
                :ime="grocery.ime"
                :stanje="grocery.stanje"
                :cijena="grocery.cijena"
                :pic="grocery.pic"
                :kolicina="grocery.kolicina"
              ></DodajProizvod>
            </v-col>
            <v-col cols="5">
              <!-- Kolicina -->
              <v-card-actions width="15px" style="height: 74px;" class="justify-center">
                <!-- Minus 1 nam -->
                <v-btn class @click=" grocery.stanje > 0 ? grocery.stanje-- : null" icon>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>

                <!-- Input kolicine -->
                <v-text-field
                  dense
                  flat
                  hide-details
                  outlined
                  class="centered-input"
                  disabled
                  style=" -webkit-text-fill-color: black"
                  solo
                  v-model="grocery.stanje"
                ></v-text-field>

                <!-- Plus 1 nam -->
                <v-btn class @click="grocery.stanje++" icon>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>

          <!-- Show more/nutritivne vrijednosti -->
          <v-card-actions
            style="background-color: #ffe600 !important"
            class="mt-n4 align-center justify-center"
          >
            <v-btn class="align-center" text @click="grocery.show = !grocery.show">
              <v-card-subtitle class="pa-0">Nutritivne vrijednosti</v-card-subtitle>
              <v-icon>{{ grocery.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <transition-group>
            <div
              class="text-center"
              v-show="grocery.show"
              v-for="(opis,key) in grocery.opis"
              :key="key + 0"
            >
              <v-card-text class="textbg">Kalorije: {{opis.kalorije}}</v-card-text>
              <v-card-text class="textbg">Bjelančevine: {{opis.bjelancevine}}</v-card-text>
              <v-card-text class="textbg">Ugljikohidrati: {{opis.ugljikohidrati}}</v-card-text>
              <v-card-text class="textbg">Masti: {{opis.masti}}</v-card-text>
            </div>
          </transition-group>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import localStore from "@/localStore.js";
import DodajProizvod from "@/components/DodajProizvod.vue";

export default {
  components: {
    DodajProizvod
  },

  data() {
    return localStore;
  }
};
</script>
<style lang="scss">
.centered-input input {
  text-align: center;
}
</style>
