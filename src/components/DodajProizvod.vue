<template>
  <v-container>
    <v-card-actions class="justify-center">
      <v-btn @click="dodajProizvod()">DODAJ U KOŠARICU</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import localStore from "@/localStore.js";

export default {
  props: {
    ime: String,
    stanje: Number,
    cijena: Number
  },
  data() {
    return {
      namirnica: {
        imeNam: this.ime,
        stanjeNam: this.stanje,
        cijenaNam: this.cijena
      }
    }
  },
  methods: { //jedino ovako mogu, polje polja
      dodajProizvod(){
        console.log(this.ime, " ", this.stanje);
        console.log(this.namirnica.imeNam);
        console.log(this.namirnica.stanjeNam);

        // stavio sam push umjesto unshift jer mi tako dodaje na kraju polja, više mi tako ima smisla ne pitajte zasto (sb)
        localStore.kupovina.push([this.ime, this.cijena, this.stanje]);
      }
  }
  
};
</script>