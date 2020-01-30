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
                   <div v-for="(namirnice,key) in recipe.namirnice" :key="key + 0"> 
                      <v-card-text class="text-left py-1">{{namirnice.ime}}</v-card-text>
                
                   </div> 
              
                </v-col>

                <v-col> <!-- Opis -->
                  <v-card-text class="text-left textbg">opis: {{recipe.opis}}</v-card-text>
                </v-col>

                <!-- Gumb Dodaj u košaricu -->
                
              </v-row>
            </div>

              <!-- <DodajProizvod
                :id="recipe.namirnice.id"
                :ime="recipe.namirnice.ime"
                :stanje="recipe.namirnice.stanje"
                :cijena="recipe.namirnice.cijena"
                :pic="recipe.namirnice.pic"
              ></DodajProizvod> -->

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
import DodajProizvod from "@/components/DodajProizvod.vue";

export default {
  name: "recepti",
  components: {DodajProizvod
  },
  methods: {

  },
  data () {
    return localStore;
  }
};
</script>