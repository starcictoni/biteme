<template>
  <v-container>
    <v-app>
      <v-row class="justify-center">
        <v-col cols="8" md="9">
          <v-card elevation="12" class="pa-6 pt-12 mb-12 text-center">
            <!-- <v-card-title> -->
            <v-text-field
              v-model="search"
              append-icon="mdi-search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <!-- </v-card-title> -->
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="desserts"
              :single-select="singleSelect"
              :search="search"
              item-key="ime"
              show-select
              class="elevation-1"
            >
              <template v-slot:top>
                <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
              </template>
            </v-data-table>
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
      singleSelect: false,
      search: '',
      selected: [],
      headers: [
        {
          text: "Namirnice",
          align: "left",
          sortable: false,
          value: "ime"
        },
        { text: "kcal", value: "kalorije" },
        { text: "Količina (g)", value: "kolicina"},
        { text: "Masti (g)", value: "masti" },
        { text: "Ugljikohidrati (g)", value: "ugljikohidrati" },
        { text: "Bjelančevine (g)", value: "bjelancevine" },
        { text: "Porcija", value: "porcija"},
        { text: "Cijena (kn)", value: "cijena" }
      ],
      desserts: [
        {
          ime: "Artičoka",
          kalorije: 47,
          kolicina: 100,
          masti: 0.2,
          ugljikohidrati: 11,
          bjelancevine: 3.3,
          porcija: "kom",
          cijena: 4.99
        },
        { 
          //1kg, 10kn
          ime: "Batat",
          kalorije: 85,
          kolicina: 100,
          masti: 0.1,
          ugljikohidrati: 20,
          bjelancevine: 1.6,
          porcija: "1kg",
          cijena: 9.99
        },
        {
          //kg, 12kn
          ime: "Blitva",
          kalorije: 43,
          kolicina: 100,
          masti: 0.2,
          ugljikohidrati: 10,
          bjelancevine: 1.6,
          porcija: "1kg",
          cijena: 11.99
        },
        {
          //kg, 20kn
          ime: "Brokula",
          kalorije: 33,
          kolicina: 100,
          masti: 0.4,
          ugljikohidrati: 7,
          bjelancevine: 2.8,
          porcija: "1kg",
          cijena: 19.99
        },
        { //kg, 9kn
          ime: "Cikla",
          kalorije: 19,
          kolicina: 100,
          masti: 0.2,
          ugljikohidrati: 3.7,
          bjelancevine: 1.8,
          porcija: "1kg",
          cijena: 8.99
        },
        {
          //kg, 5kn
          ime: "Cvjetača",
          kalorije: 24,
          kolicina: 100,
          masti: 0.3,
          ugljikohidrati: 5,
          bjelancevine: 1.9,
          porcija: "kom",
          cijena: 4.99
        },
        {
          //kg, 20kn---------------------------
          ime: "Češnjak",
          kalorije: 24,
          kolicina: 100,
          masti: 0.3,
          ugljikohidrati: 5,
          bjelancevine: 1.9,
          porcija: "1kg",
          cijena: 19.99
        },

        {
          //kg, 32kn
          ime: "Endivija",
          kalorije: 17,
          kolicina: 100,
          masti: 0.2,
          ugljikohidrati: 3.4,
          bjelancevine: 1.3,
          porcija: "kom",
          cijena: 8.99
        },
        {
          //kg, 17kn
          ime: "Grašak",
          kalorije: 81,
          kolicina: 100,
          masti: 0.4,
          ugljikohidrati: 14,
          bjelancevine: 5,
          porcija: "1kg",
          cijena: 16.99
        },
        {
          //kg, 20kn
          ime: "Kelj",
          kalorije: 49,
          kolicina: 100,
          masti: 0.9,
          ugljikohidrati: 9,
          bjelancevine: 4.3,
          porcija: "kom",
          cijena: 9.99
        },
        {
          //kg, 7kn
          ime: "Krastavac",
          kalorije: 10,
          kolicina: 100,
          masti: 0.2,
          ugljikohidrati: 2.2,
          bjelancevine: 0.6,
          porcija: "1kg",
          cijena: 7.99
        },
        {
          //kg, 5kn
          ime: "Krumpir",
          kalorije: 77,
          kolicina: 100,
          masti: 0.1,
          ugljikohidrati: 17,
          bjelancevine: 2,
          porcija: "1kg",
          cijena: 4.99
        },
        {
          //kg, 3kn
          ime: "Kukuruz",
          kalorije: 64,
          kolicina: 100,
          masti: 0.5,
          ugljikohidrati: 15,
          bjelancevine: 1.9,
          porcija: "1kg",
          cijena: 2.99
        },
        {
          //kg, 6kn
          ime: "Kupus",
          kalorije: 24.6,
          kolicina: 100,
          masti: 0.1,
          ugljikohidrati: 6,
          bjelancevine: 1.3,
          porcija: "1kg",
          cijena: 5.99
        },
        {
          //30g, 9kn
          ime: "Lovor",
          kalorije: 42,
          kolicina: 100,
          masti: 0,
          ugljikohidrati: 0,
          bjelancevine: 0,
          porcija: "30g",
          cijena: 8.99
        },
        {
          //kg, 15kn
          ime: "Luk",
          kalorije: 39,
          kolicina: 100,
          masti: 0.1,
          ugljikohidrati: 9,
          bjelancevine: 1.1,
          porcija: "1kg",
          cijena: "8.99"
        },
        {
          //kg, 100kn
          ime: "Matovilac",
          kalorije: 21,
          kolicina: 100,
          masti: 0.4,
          ugljikohidrati: 20,
          bjelancevine: 2,
          porcija: "200g",
          cijena: 19.99
        },
        {
          //kg, 12kn
          ime: "Mrkva",
          kalorije: 41,
          kolicina: 100,
          masti: 0,
          ugljikohidrati: 10,
          bjelancevine: 1,
          porcija: "1kg",
          cijena: 11.99
        },
        {
          //kg, 20kn
          ime: "Paprika",
          kalorije: 35,
          kolicina: 100,
          masti: 0,
          ugljikohidrati: 6,
          bjelancevine: 1,
          porcija: "1kg",
          cijena: 13.99
        },
        {
          //kg, 20kn
          ime: "Patlidžan",
          kalorije: 18,
          kolicina: 100,
          masti: 0,
          ugljikohidrati: 3,
          bjelancevine: 0,
          porcija: "1kg",
          cijena: 16.99
        },
        {
          //10g, 17kn
          ime: "Peršin",
          kalorije: 41,
          kolicina: 100,
          masti: 0.4,
          ugljikohidrati: 9,
          bjelancevine: 4.4,
          porcija: "10g",
          cijena: 15.99
        },
        {
          //kg, 25kn
          ime: "Radič",
          kalorije: 23,
          kolicina: 100,
          masti: 0.25,
          ugljikohidrati: 4.5,
          bjelancevine: 1.4,
          porcija: "500g",
          cijena: 11.99
        },
        {
          //kg, 11kn
          ime: "Rajčica",
          kalorije: 25,
          kolicina: 100,
          masti: 0,
          ugljikohidrati: 29,
          bjelancevine: 1,
          porcija: "1kg",
          cijena: 11.99
        },
        {
          //kg 100kn
          ime: "Rukola",
          kalorije: 25,
          kolicina: 100,
          masti: 0.7,
          ugljikohidrati: 3.7,
          bjelancevine: 2.6,
          porcija: "200g",
          cijena: 19.99
        },
        {
          //30g, 25kn
          ime: "Ružmarin",
          kalorije: 131,
          kolicina: "100g",
          masti: 5.9,
          ugljikohidrati: 20.7,
          bjelancevine: 3.3,
          porcija: "30g",
          cijena: 23.99
        },
        {
          //100g, 22kn
          ime: "Rotkvica",
          kalorije: 16,
          kolicina: 100,
          masti: 0.1,
          ugljikohidrati: 3.4,
          bjelancevine: 0.7,
          porcija: "100g",
          cijena: 4.99
        },
        {
          //1kg, 23kn
          ime: "Zelena salata",
          kalorije: 14,
          kolicina: 100,
          masti: 0.2,
          ugljikohidrati: 2.9,
          bjelancevine: 1.4,
          porcija: "kom",
          cijena: 12.99
        },
        {
          //kg, 33kn
          ime: "Špinat",
          kalorije: 23,
          kolicina: 100,
          masti: 0.3,
          ugljikohidrati: 3.7,
          bjelancevine: 3,
          porcija: "500g",
          cijena: 16.99
        },        
        {
          //kg, 9kn
          ime: "Tikvica",
          kalorije: 17,
          kolicina: 100,
          masti: 0.3,
          ugljikohidrati: 3.1,
          bjelancevine: 1.2,
          porcija: "1kg",
          cijena: 8.99
        },
      ]
    };
  }
};
</script>