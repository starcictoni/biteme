<template>
    <v-app>
        <v-row class="justify-left">
            <v-col class="justify-center" sm="12" md="4" v-for="(item,i) in storeItems" :key="item.id">
                <v-card color="rgb(255, 0, 0, 0)" elevation="0" class="mx-auto" max-width="280">
                    <v-img class="align-end justify-center" :src="item.pic" height="fill"></v-img>              <!-- Slika proizvoda -->
                    <v-card-title class="justify-center headline font-weight-bold">{{ item.ime }}</v-card-title>          <!-- Ime proizvoda -->
                    <v-card-actions class="justify-center">             <!-- Show more/opis --> 
                        <v-btn text @click="item.show =! item.show">
                            <v-card-subtitle>Opis proizvoda</v-card-subtitle>
                                <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <div v-show="item.show">
                        <v-card-text class="text-left textbg"> 
                            {{item.opis}}
                        </v-card-text>     
                    </div>
                    <v-card-actions class="justify-center"> <!-- Kolicina -->
                        <v-btn class="mb-7" @click=" item.stanje > 0 ? item.stanje-- : null" icon>
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        <!-- Input kolicine -->
                        <v-text-field class="centered-input" solo v-model="item.stanje" ></v-text-field> <!-- Minus 1 proizvod -->
                        <v-btn :id="item.ime + i" class="mb-7" @click="item.stanje++" icon> <!-- Plus 1 proizvod -->
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                            {{item.stanje}}
                    </v-card-actions>
                    <v-card-subtitle class="text-center subtitle-1 black--text font-weight-black"> <!-- Cijena po jedinici -->
                        {{item.kolicina + ': '}}{{ item.cijena + 'kn' }}
                    </v-card-subtitle>  

                <!-- Dodaj nesto -->

                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import localStore from "@/localStore.js";
export default {
    data () {
        return localStore; 
    },
    methods: {
    }
};
</script>

<style lang="scss">
.textbg{
  background-color:#ffffff
}
.centered-input input {
  text-align: center;
}
</style>