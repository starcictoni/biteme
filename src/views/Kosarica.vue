<template>
  <v-container fluid class="backgroundimg">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Namirnica</th>
            <th></th>
            <th class="text-center">Cijena / Jedinica</th>
            <th class="text-center">Količina</th>
            <th class="text-center">Ukupna cijena</th>
            <th class="text-center">
              <v-btn @click="izbrisiSve()" class="izbrisiSve" depressed tile outlined>
                Izbrisi sve
              </v-btn>
            </th>
          </tr>
        </thead>
        <!-- Ako je kosarica prazna pokazi poruku -->
        <tbody v-if="kupovina === undefined || kupovina.length == 0" >
            <p class="font-weight-black text-center mt-5">KOŠARICA JE PRAZNA</p>
        </tbody>

        <tbody v-else>
          <tr class="text-center" v-for="(item, index) in kupovina" :key="item.itemId">
            <td width="100px" class="py-2">
              <v-img :src="item.itemPic" width="50px"></v-img>
            </td>
            <td class="text-left">{{ item.itemIme }}</td>
            <td v-if="item.itemKolicina">{{ item.itemCijena + " kn" + ' / ' + item.itemKolicina }}</td>
            <td v-else>{{ item.itemCijena + " kn"}}</td>
            <td>{{ item.itemStanje }}</td>
            <td>{{ item.itemStanje * item.itemCijena + " kn"}}</td>
            <td>
              <v-btn @click="izbrisiItem(index)" fab depressed x-small color="white">
                <v-icon dark>mdi-close</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
        <tr>
          <td />
          <td />
          <td />
          <td />
          <th class="text-center">Ukupan iznos: {{iznos()}} kn</th>
          <td class="text-center">
            <v-btn class="placanje" tile depressed>
                Plaćanje
            </v-btn>
          </td>
        </tr>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import localStore from "@/localStore.js";

export default {
  name: "kosarica",
  data() {
    return localStore;
  },
  methods: {
    //brisanje itema
    izbrisiItem(id) {
      this.kupovina.splice(id, 1); //id oznacava gdje se nalazi objekt u polje kupovina, 1 je broj elemenata za brisati
      localStore.cartCounter--;
    },
    iznos() {
      let tot = 0;
      this.kupovina.filter(item => {
        tot += item.itemStanje * item.itemCijena;
      });
      return tot;
    },
    izbrisiSve() {
      while (this.kupovina.length) {
        this.kupovina.pop();
      }
      localStore.cartCounter = 0;
    }
  }
};
</script>

<style lang="scss">
.backgroundimg {
  background: url("https://i.imgur.com/oJxfKdW.png");
  background-size: contain;
  width: 100%;
  height: 100%;
}
.izbrisiSve:hover {
  background-color:#ffe600 !important;
  -webkit-text-fill-color: black !important;
  border-color: white !important;
}
.placanje {
  background-color:#ffe600 !important;
  -webkit-text-fill-color: black !important;
}
.placanje:hover {
  background-color:black !important;
  -webkit-text-fill-color: white !important;
}
</style>