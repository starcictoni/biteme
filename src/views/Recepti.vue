<template>
  <v-container>
    <v-row class="justify-left mt-12">
      <v-col class="justify-center" sm="12" md="4" v-for="(recipe) in recepies" :key="recipe.id">
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="mx-auto"
            max-width="350px"
            :elevation="hover ? 24 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-card-title>{{recipe.ime}}</v-card-title>
            <v-card-subtitle class="mt-1">
              <v-row>
                <div class="ml-4" v-if="recipe.ikona == 3">
                  <v-icon class>mdi-speedometer</v-icon>
                  {{recipe.tezina}}
                </div>

                <div class="ml-4" v-if="recipe.ikona == 2">
                  <v-icon class>mdi-speedometer-medium</v-icon>
                  {{recipe.tezina}}
                </div>
                <div class="ml-4" v-if="recipe.ikona == 1">
                  <v-icon class>mdi-speedometer-slow</v-icon>
                  {{recipe.tezina}}
                </div>
                <div class="ml-4">
                  <v-icon class>mdi-silverware-fork-knife</v-icon>
                  {{recipe.brojOsoba}}
                </div>
                <div class="ml-4">
                  <v-icon class>mdi-clock-outline</v-icon>
                  {{recipe.vrijeme}}
                </div>
              </v-row>
            </v-card-subtitle>

            <v-img class="white--text align-end" height="fill" max-height="150px" :src="recipe.pic"></v-img>

            <v-card-actions style="background-color:#ffe600" class="justify-center">
              <v-btn text @click="recipe.show =! recipe.show">
                <v-card-subtitle class="pa-0 font-weight-bold">Više</v-card-subtitle>
                <v-icon>{{ recipe.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <div v-show="recipe.show">
              <v-row
                class="align-center py-0"
                v-for="(namirnice,key) in recipe.namirnice"
                :key="key + 0"
              >
                <v-col class="my-0">
                  <!-- Trebati ce v-for kao što je ispod -->
                  <v-card-text class="text-left py-1">{{namirnice.ime}}</v-card-text>
                </v-col>
                <v-col class="py-0">
                  <DodajProizvod
                    :id="namirnice.id"
                    :ime="namirnice.ime"
                    :stanje="namirnice.stanje"
                    :cijena="namirnice.cijena"
                    :pic="namirnice.pic"
                  ></DodajProizvod>
                </v-col>
              </v-row>
            </div>
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
  components: { DodajProizvod },
  methods: {},
  data() {
    return localStore;
  }
};
</script>