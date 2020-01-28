<template>
  <v-container>
    <v-card-actions class="justify-center">
      <v-btn @click="dodajProizvod">DODAJ U KOŠARICU</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import localStore from "@/localStore.js";

export default {
  props: {
    ime: String,
    stanje: Number
  },
  data() {
    return {
      localStore,
      namirnica: {
        imeNam: this.ime,
        stanjeNam: this.stanje
      }
    };
  },
  methods: { //jedino ovako mogu, polje polja
      dodajProizvod() {
        console.log(this.ime, " ", this.stanje);
        localStore.kupovina.unshift([this.ime, this.stanje]);
      }
  }
};
</script>