<template>
  <v-container>
    <v-row class="justify-left">
      <v-col class="justify-center" sm="12" md="4" v-for="(recipe) in recepies" :key="recipe.id">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mx-auto" max-width="350px" :elevation="hover ? 24 : 2" :class="{ 'on-hover': hover }">
            <v-card-title>{{recipe.ime}}</v-card-title>
            <v-card-subtitle class="mt-1">
              <v-row>
                <div class="ml-4" v-if="recipe.ikona == 3">
                    <v-icon class="">mdi-speedometer</v-icon>
                    {{recipe.tezina}}
                </div>

                <div class="ml-4" v-if="recipe.ikona == 2">
                    <v-icon class="">mdi-speedometer-medium</v-icon>
                    {{recipe.tezina}}
                </div>
                <div class="ml-4" v-if="recipe.ikona == 1">
                    <v-icon class="">mdi-speedometer-slow</v-icon>
                    {{recipe.tezina}}
                </div>
                <div class="ml-4">
                    <v-icon class="">mdi-silverware-fork-knife</v-icon>
                    {{recipe.brojOsoba}}
                </div>
                <div class="ml-4">
                    <v-icon class="">mdi-clock-outline</v-icon>
                    {{recipe.vrijeme}}
                </div>
              </v-row>
          </v-card-subtitle>

            <v-img class="white--text align-end" height="fill" :src="recipe.pic"></v-img>
           
            <v-card-actions class="justify-center">
              <v-btn text @click="recipe.show =! recipe.show">
                <v-card-subtitle>Više</v-card-subtitle>
                <v-icon>{{ recipe.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <div v-show="recipe.show">
              <v-row>
                <v-col class="ma-5"> <!-- Trebati ce v-for kao što je ispod -->
                   Namirnice 
                </v-col>

                <v-col> <!-- Opis -->
                  <v-card-text class="text-left textbg">opis: {{recipe.opis}}</v-card-text>
                </v-col>

                <!-- Gumb Dodaj u košaricu -->

              <!-- <div v-show="grocery.show" v-for="(opis,key) in grocery.opis" :key="key + 0"> -->
                <!-- <v-card-text class="text-left textbg">Kalorije: </v-card-text>
                <v-card-text class="text-left textbg">Bjelančevine: </v-card-text>
                <v-card-text class="text-left textbg">Ugljikohidrati: </v-card-text>
                <v-card-text class="text-left textbg">Masti: </v-card-text> -->
              <!-- </div> {{opis.kalorije}} {{opis.bjelancevine}} {{opis.ugljikohidrati}} {{opis.masti}}-->
              </v-row>
            </div>


        <!-- <DodajProizvod
            :id="item.id"
            :ime="item.ime"
            :stanje="item.stanje"
            :cijena="item.cijena"
        ></DodajProizvod> -->

          </v-card>
        </v-hover>
      </v-col>
      
    </v-row>
  </v-container>
</template>
<script>
import localStore from "@/localStore.js";

export default {
  name: "recepti",
  components: {},
  methods: {

  },
  data () {
    return localStore;
  }
};
</script>