<template>
  <v-container>
    <v-app>
      <v-row class="justify-left">
          <v-col class="justify-center" sm="12" md="4" v-for="grocery in groceries" :key="grocery.id">
            <v-card color="rgb(255, 0, 0, 0)" elevation="0" class="mx-auto" max-width="280">
              <v-img class="align-end justify-center" :src="grocery.pic" height="fill"></v-img>
              <v-card-title class="justify-center headline font-weight-bold">{{ grocery.ime }}</v-card-title>
              <v-card-subtitle class="text-center subtitle-1 black--text font-weight-black">{{ grocery.cijena }}</v-card-subtitle>
              <v-card-actions class="justify-center">
                <v-btn color="#eeffff" text tile>DODAJ U KOŠARICU</v-btn>
                <v-btn icon @click="grocery.show = !grocery.show">
                  <v-icon>{{ grocery.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="grocery.show">
                  <!-- <v-divider></v-divider> -->
                  <v-card-text class="text-left textbg">Kalorije: {{groceries[0].opis.kalorije}}</v-card-text>
                  <v-card-text class="text-left textbg">Bjelančevine: {{groceries[0].opis.bjelancevine}}</v-card-text>
                  <v-card-text class="text-left textbg">Ugljikohidrati: {{groceries[0].opis.ugljikohidrati}}</v-card-text>
                  <v-card-text class="text-left textbg">Masti: {{groceries[0].opis.masti}}</v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>

          
        </v-row>

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </v-container>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  ime: "namirnice",
  components: {
    HelloWorld
  },
  data() {
    return {
      //singleSelect: false,
      //search: '',
      //selected: [],
      // headers: [
      //   {
      //     text: "Namirnice",
      //     align: "left",
      //     sortable: false,
      //     value: "ime"
      //   },
      //   { text: "kcal", value: "kalorije" },
      //   { text: "Masti (g/100)", value: "masti" },
      //   { text: "Ugljikohidrati (g/100)", value: "ugljikohidrati" },
      //   { text: "Bjelančevine (g/100)", value: "bjelancevine" },
      //   { text: "Količina", value: "kolicina"},
      //   { text: "Cijena (kn)", value: "cijena" }
      // ],
      groceries: [
        {
          id: 1,
          ime: "Artičoka",
          opis: {
            kalorije: 47,
            masti: 0.2,
            ugljikohidrati: 11,
            bjelancevine: 3.3,
          },
          kolicina: "kom",
          cijena: 4.99,
          show: false,
          //pic: null,
        },
        { 
          id: 2,
          ime: "Batat",
          opis: {
            kalorije: 85,
            masti: 0.1,
            ugljikohidrati: 20,
            bjelancevine: 1.6,
          },
          kolicina: "1kg",
          cijena: 9.99,
          show: false,
          //pic: null,
        },
        {
          id: 3,
          ime: "Blitva",
          opis: {
            kalorije: 43,
            masti: 0.2,
            ugljikohidrati: 10,
            bjelancevine: 1.6,
          },
          kolicina: "1kg",
          cijena: 11.99,
          show: false,
          //pic: null,
        },
        {
          id: 4,
          ime: "Brokula",
          opis: {
            kalorije: 33,
            masti: 0.4,
            ugljikohidrati: 7,
            bjelancevine: 2.8,
          },
          kolicina: "1kg",
          cijena: 19.99,
          show: false,
          //pic: null,
        },
        {
          id: 5,
          ime: "Cikla",
          opis: {
            kalorije: 19,
            masti: 0.2,
            ugljikohidrati: 3.7,
            bjelancevine: 1.8,          
          },
          kolicina: "1kg",
          cijena: 8.99,
          show: false,
          //pic: null,
        },
        {
          id: 6,
          ime: "Cvjetača",
          opis: {
            kalorije: 24,
            masti: 0.3,
            ugljikohidrati: 5,
            bjelancevine: 1.9,
          },
          kolicina: "kom",
          cijena: 4.99,
          show: false,
          //pic: null,
        },
        {
          id: 7,
          ime: "Češnjak",
          opis: {
            kalorije: 24,
            masti: 0.3,
            ugljikohidrati: 5,
            bjelancevine: 1.9,
          },
          kolicina: "1kg",
          cijena: 19.99,
          show: false,
          //pic: null,
        },
        {
          id: 8,
          ime: "Endivija",
          opis: {
            kalorije: 17,
            masti: 0.2,
            ugljikohidrati: 3.4,
            bjelancevine: 1.3,
          },
          kolicina: "kom",
          cijena: 8.99,
          show: false,
          //pic: null,
        },
        {
          id: 9,
          ime: "Grašak",
          opis: {
            kalorije: 81,
            masti: 0.4,
            ugljikohidrati: 14,
            bjelancevine: 5,
          },
          kolicina: "1kg",
          cijena: 16.99,
          show: false,
          //pic: null,
        },
        {
          id: 10,
          ime: "Kelj",
          opis: {
            kalorije: 49,
            masti: 0.9,
            ugljikohidrati: 9,
            bjelancevine: 4.3,
          },
          kolicina: "kom",
          cijena: 9.99,
          show: false,
          //pic: null,
        },
        {
          id: 11,
          ime: "Krastavac",
          opis: {
            kalorije: 10,
            masti: 0.2,
            ugljikohidrati: 2.2,
            bjelancevine: 0.6,
          },
          kolicina: "1kg",
          cijena: 7.99,
          show: false,
          //pic: null,
        },
        {
          id: 12,
          ime: "Krumpir",
          opis: {
            kalorije: 77,
            masti: 0.1,
            ugljikohidrati: 17,
            bjelancevine: 2,
          },
          kolicina: "1kg",
          cijena: 4.99,
          show: false,
          //pic: null,
        },
        {
          id: 13,
          ime: "Kukuruz",
          opis: {
            kalorije: 64,
            masti: 0.5,
            ugljikohidrati: 15,
            bjelancevine: 1.9,
          },
          kolicina: "1kg",
          cijena: 2.99,
          show: false,
          //pic: null,
        },
        {
          id: 14,
          ime: "Kupus",
          opis: {
            kalorije: 24.6,
            masti: 0.1,
            ugljikohidrati: 6,
            bjelancevine: 1.3,
          },
          kolicina: "1kg",
          cijena: 5.99,
          show: false,
          //pic: null,
        },
        {
          id: 15,
          ime: "Lovor",
          opis: {
            kalorije: 42,
            masti: 0,
            ugljikohidrati: 0,
            bjelancevine: 0,
          },
          kolicina: "30g",
          cijena: 8.99,
          show: false,
          //pic: null,
        },
        {
          id: 16,
          ime: "Luk",
          opis: {
            kalorije: 39,
            masti: 0.1,
            ugljikohidrati: 9,
            bjelancevine: 1.1,
          },
          kolicina: "1kg",
          cijena: "8.99",
          show: false,
          //pic: null,
        },
        {
          id: 17,
          ime: "Matovilac",
          opis: {
            kalorije: 21,
            masti: 0.4,
            ugljikohidrati: 20,
            bjelancevine: 2,
          },
          kolicina: "200g",
          cijena: 19.99,
          show: false,
          //pic: null,
        },
        {
          id: 18,
          ime: "Mrkva",
          opis: {
            kalorije: 41,
            masti: 0,
            ugljikohidrati: 10,
            bjelancevine: 1,
          },
          kolicina: "1kg",
          cijena: 11.99,
          show: false,
          //pic: null,
        },
        {
          id: 19,
          ime: "Paprika",
          opis: {
            kalorije: 35,
            masti: 0,
            ugljikohidrati: 6,
            bjelancevine: 1,
          },
          kolicina: "1kg",
          cijena: 13.99,
          show: false,
          //pic: null,
        },
        {
          id: 20,
          ime: "Patlidžan",
          opis: {
            kalorije: 18,
            masti: 0,
            ugljikohidrati: 3,
            bjelancevine: 0,
          },
          kolicina: "1kg",
          cijena: 16.99,
          show: false,
          //pic: null,
        },
        {
          id: 21,
          ime: "Peršin",
          opis: {
            kalorije: 41,
            masti: 0.4,
            ugljikohidrati: 9,
            bjelancevine: 4.4,
          },
          kolicina: "10g",
          cijena: 15.99,
          show: false,
          //pic: null,
        },
        {
          id: 22,
          ime: "Radič",
          opis: {
            kalorije: 23,
            masti: 0.25,
            ugljikohidrati: 4.5,
            bjelancevine: 1.4,
          },
          kolicina: "500g",
          cijena: 11.99,
          show: false,
          //pic: null,
        },
        {
          id: 23,
          ime: "Rajčica",
          opis: {
            kalorije: 25,
            masti: 0,
            ugljikohidrati: 29,
            bjelancevine: 1,
          },
          kolicina: "1kg",
          cijena: 11.99,
          show: false,
          //pic: null,
        },
        {
          id: 24,
          ime: "Rukola",
          opis: {
            kalorije: 25,
            masti: 0.7,
            ugljikohidrati: 3.7,
            bjelancevine: 2.6,
          },
          kolicina: "200g",
          cijena: 19.99,
          show: false,
          //pic: null,
        },
        {
          id: 25,
          ime: "Ružmarin",
          opis: {
            kalorije: 131,
            masti: 5.9,
            ugljikohidrati: 20.7,
            bjelancevine: 3.3,
          },
          kolicina: "30g",
          cijena: 23.99,
          show: false,
          //pic: null,
        },
        {
          id: 26,
          ime: "Rotkvica",
          opis: {
            kalorije: 16,
            masti: 0.1,
            ugljikohidrati: 3.4,
            bjelancevine: 0.7,
          },
          kolicina: "100g",
          cijena: 4.99,
          show: false,
          //pic: null,
        },
        {
          id: 27,
          ime: "Zelena salata",
          opis: {
            kalorije: 14,
            masti: 0.2,
            ugljikohidrati: 2.9,
            bjelancevine: 1.4,
          },
          kolicina: "kom",
          cijena: 12.99,
          show: false,
          //pic: null,
        },
        {
          id: 28,
          ime: "Špinat",
          opis: {
            kalorije: 23,
            masti: 0.3,
            ugljikohidrati: 3.7,
            bjelancevine: 3,
          },
          kolicina: "500g",
          cijena: 16.99,
          show: false,
          //pic: null,
        },        
        {
          id: 29,
          ime: "Tikvica",
          opis: {
            kalorije: 17,
            masti: 0.3,
            ugljikohidrati: 3.1,
            bjelancevine: 1.2,
          },
          kolicina: "1kg",
          cijena: 8.99,
          show: false,
          //pic: null,
        },
      ]
    };
  }
};
</script>