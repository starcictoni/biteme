<template>
  <v-app>
    <v-row class="justify-left">
      <v-col
        class="justify-center"
        sm="12"
        md="4"
        v-for="(grocery, i) in groceries"
        :key="grocery.id"
      >
        <v-card color="rgb(255, 0, 0, 0)" elevation="5" class="mx-auto" max-width="280">

          <!-- slika namirnice -->
          <v-img class="align-end justify-center" src="https://cdn.sunbasket.com/tn_f85d0cb7-f443-4423-8bc4-c3bbefd20020.jpg" height="fill"></v-img>

          <!-- Ime namirnice -->
          <v-card-title class="justify-center headline font-weight-bold">{{ grocery.ime }}</v-card-title>

         <!-- Show more/nutritivne vrijednosti -->
          <v-card-actions class="justify-center">
            <v-btn text @click="grocery.show = !grocery.show">
              <v-card-subtitle>Nutritivne vrijednosti</v-card-subtitle>
              <v-icon>{{ grocery.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          
          <transition-group>
            <div v-show="grocery.show" v-for="(opis,key) in grocery.opis" :key="key">
              <v-card-text class="text-left textbg">Kalorije: {{opis.kalorije}}</v-card-text>
              <v-card-text class="text-left textbg">Bjelančevine: {{opis.bjelancevine}}</v-card-text>
              <v-card-text class="text-left textbg">Ugljikohidrati: {{opis.ugljikohidrati}}</v-card-text>
              <v-card-text class="text-left textbg">Masti: {{opis.masti}}</v-card-text>
            </div>
          </transition-group>


          <!-- Kolicina -->
          <v-card-actions class="justify-center">

            <!-- Minus 1 nam -->
            <v-btn class="mb-7" @click=" grocery.stanje > 0 ? grocery.stanje-- : null" icon>
              <v-icon>mdi-minus</v-icon>
            </v-btn>

            <!-- Input kolicine -->
            <v-text-field class="centered-input" solo v-model="grocery.stanje" ></v-text-field>

            <!-- Plus 1 nam -->
            <v-btn :id="grocery.ime + i" class="mb-7" @click="grocery.stanje++" icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            
          </v-card-actions>


           <!-- Cijena po jedinici -->
          <v-card-subtitle class="text-center subtitle-1 black--text font-weight-black">
            {{grocery.kolicina + ': '}}{{grocery.cijena + ' kn' }}
          </v-card-subtitle>

          <!-- Dodavanje namirnice u kosaricu -->
            <DodajProizvod
              :ime="grocery.ime"
              :cijena="grocery.cijena"
              :stanje="grocery.stanje"

            > 
            </DodajProizvod>	
            <!-- <v-btn @click="dodajCart(grocery, i)">DODAJ U KOŠARICU</v-btn> -->
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
  methods: {
  }
};

  //   sub1() {}
  //   // created: function () {
  //   //   var id = this.groceries.id;
  //   //   db.collection("namirnice")
  //   //         .doc(id)
  //   //         .set({

  //   //           url: url,
  //   //           posted_at: Date.now(),
  //   //         })
  //   //         .then(docRef => {
  //   //           console.log("Document written with ID: ",
  //   //           docRef.id);
  //   //           this.imageData = null;
  //   //           })
  //   //           .catch(e => {
  //   //           console.error("Error adding document: ");
  //   //           });
  //   // },
  // }

</script>
<style lang="scss">
.centered-input input {
  text-align: center;
}
</style>
