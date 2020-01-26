<template>
   <v-app >
       <v-row class="justify-left">
          <v-col class="justify-center" sm="12" md="4" v-for="(grocery, i) in groceries" :key="grocery.id">
            <v-card color="rgb(255, 0, 0, 0)" elevation="0" class="mx-auto" max-width="280">
              <v-img class="align-end justify-center" :src="grocery.pic" height="fill"></v-img>
              <v-card-title class="justify-center headline font-weight-bold">{{ grocery.ime }}</v-card-title>
              <v-card-subtitle class="text-center subtitle-1 black--text font-weight-black">{{grocery.kolicina + ': '}}{{grocery.cijena }}</v-card-subtitle>
              <v-card-actions class="justify-center">

                <v-btn class="mb-7" @click="sub1" icon><v-icon>mdi-minus</v-icon></v-btn>
                <!-- <v-btn color="#eeffff" text tile>DODAJ U KOŠARICU</v-btn>  -->
                <!-- Poziv bazi usera da napuni itemse  Setter--->
                <v-text-field class="centered-input" label="Solo" :value="grocery.stanje" solo ></v-text-field>
                <v-btn :id="grocery.ime + i" class="mb-7" @click="add1" icon><v-icon>mdi-plus</v-icon></v-btn>


                <v-btn icon @click="grocery.show = !grocery.show"> add1
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
            </v-card>
            </v-col>
        </v-row>
    </v-app>    
</template>
<script>
import localStore from '@/localStore.js';
export default {
    data() {
    return localStore;
  },
  methods: {
    add1() {

    },
    sub1() {
    },
    // created: function () {
    //   var id = this.groceries.id;
    //   db.collection("namirnice")
    //         .doc(id)
    //         .set({

    //           url: url,
    //           posted_at: Date.now(),
    //         })
    //         .then(docRef => {
    //           console.log("Document written with ID: ",
    //           docRef.id);
    //           this.imageData = null;
    //           })
    //           .catch(e => {
    //           console.error("Error adding document: ");
    //           });
    // },
  }
}
</script>
<style lang="scss">
.centered-input input {
  text-align: center
}
</style>
