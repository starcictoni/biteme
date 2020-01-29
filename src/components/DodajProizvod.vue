<template>
  <v-container>
    <v-card-actions class="justify-center pa-0">
      <v-btn class="dodajbtn" tile depressed outlined @click="dodajProizvod()">DODAJ U KOŠARICU</v-btn>
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
      }
    }
  },
  methods: {
      dodajProizvod(){

        //found je varijabla koja usporeduje id objekta (item) kojeg zelim spremiti sa id-evima u polje kupovina.
        //na takav nacin izbjegavam dupliciranje objekata u košarici nego se samo dodaje kolicina
        let found = localStore.kupovina.find(x => x.itemId == this.item.itemId)

        if(found) {
          found.itemStanje += this.stanje; // povecaj za unesenu kolicinu
        } else if (this.stanje > 0){ //ako korisnik nije odabrao kolicinu nemoj dodat nista u kosaricu
        localStore.cartCounter++;
        localStore.kupovina.push(this.item);
        this.item.itemStanje = this.stanje;
        }
      }
  }
  
};
</script>
<style>
.dodajbtn:hover{
  background-color: black !important;
  -webkit-text-fill-color: white !important;
}
</style>