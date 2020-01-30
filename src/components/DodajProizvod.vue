<template>
  <v-container>
    <v-card-actions class="justify-center pa-0">
      <v-btn class="dodajbtn" tile depressed outlined @click="dodajProizvod()">DODAJ U KOŠARICU</v-btn>

      <!-- Error u slucaju kada je kolicina nula a korisnik stisne dodaj u kosaricu   -->
      <v-snackbar color="red" v-model="errorCart">
        {{ errorTekst }}
        <v-btn color="red" text @click="errorCart = false">Zatvori</v-btn>
      </v-snackbar>
      <!-- Poruka za uspjesno dodavanje u kosaricu -->
      <v-snackbar v-model="addCart">
        {{ dodanoTekst }}
        <v-btn color="#ffe600" text @click="addCart = false">Zatvori</v-btn>
      </v-snackbar>
    </v-card-actions>
  </v-container>
</template>

<script>
import localStore from "@/localStore.js";

export default {
  props: {
    id: Number,
    ime: String,
    cijena: Number,
    stanje: Number,
    pic: String
  },
  data() {
    return {
      item: {
        itemId: this.id,
        itemIme: this.ime,
        itemStanje: 0,
        itemCijena: this.cijena,
        itemPic: this.pic
      },
      errorCart: false,
      errorTekst: "nema sto dodati bato",
      addCart: false,
      dodanoTekst: "Dodano u košaricu"
    };
  },
  methods: {
    dodajProizvod() {
      //found je varijabla koja usporeduje id objekta (item) kojeg zelim spremiti sa id-evima u polje kupovina.
      //na takav nacin izbjegavam dupliciranje objekata u košarici nego se samo dodaje kolicina
      let found = localStore.kupovina.find(x => x.itemId == this.item.itemId);
      if (found) {
        this.addCart = true;
        found.itemStanje += this.stanje; // povecaj za unesenu kolicinu
      } else if (this.stanje > 0) {
        //ako korisnik nije odabrao kolicinu nemoj dodat nista u kosaricu
        this.addCart = true;
        localStore.cartCounter++;
        localStore.kupovina.push(this.item);
        this.item.itemStanje = this.stanje;
      } else {
        console.log(this.stanje)
           this.errorCart = true;
                 

      }
    }
  }
};
</script>
<style lang="scss" scoped>
.dodajbtn:hover {
  background-color: black !important;
  -webkit-text-fill-color: white !important;
}
</style>