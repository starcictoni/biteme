<template>
  <v-app style="background: rgb(255, 230, 0, 0.7) !important">
    <v-row class="justify-left">
      <v-col class="justify-center" sm="12" md="4" v-for="(item,i) in storeItems" :key="item.id">
        <v-card style="border-color: black" color="white" elevation="10" class="mx-auto mb-12" width="450">
          <v-img contain class="align-end justify-center" :src="item.pic" height="200px"></v-img>
          <!-- Slika proizvoda -->
          <v-row class="mx-0 align-center">
            <v-col cols="7" class="mx-0 pl-0" height="10px">
              <!-- Ime proizvoda -->
              <v-card-title class="justify-center title font-weight-bold">{{ item.ime }}</v-card-title>
            </v-col>
            <v-col>
              <v-card-subtitle
                class="text-center py-1 px-0 subtitle-1 black--text font-weight-black"
              >
                <!-- Cijena po jedinici -->
                {{item.kolicina + ': '}}{{ item.cijena + 'kn' }}
              </v-card-subtitle>
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
              <DodajProizvod
                :id="item.id"
                :ime="item.ime"
                :stanje="item.stanje"
                :cijena="item.cijena"
                :pic="item.pic"
              ></DodajProizvod>
              <!-- Dodaj nesto -->
            </v-col>

            <v-col cols="5">
              <v-card-actions width="15px" style="height: 74px;" class="justify-center">
                <!-- Kolicina -->
                <v-btn @click=" item.stanje > 0 ? item.stanje-- : null" icon>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <!-- Input kolicine -->
                <v-text-field
                  dense
                  flat
                  hide-details
                  style=" -webkit-text-fill-color: black"
                  outlined
                  disabled
                  class="centered-input"
                  solo
                  v-model="item.stanje"
                ></v-text-field>
                <!-- Minus 1 proizvod -->
                <v-btn :id="item.ime + i" @click="item.stanje++" icon>
                  <!-- Plus 1 proizvod -->
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>

          <v-card-actions class="justify-center">
            <!-- Show more/opis -->
            <v-btn text @click="item.show =! item.show">
              <v-card-subtitle class="pa-0">Opis proizvoda</v-card-subtitle>
              <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <div v-show="item.show">
            <v-card-text class="text-left textbg">{{item.opis}}</v-card-text>
          </div>
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
  },
  methods: {}
};
</script>

<style lang="scss">
.textbg {
  background-color: #ffffff;
}
.centered-input input {
  text-align: center;
}
</style>