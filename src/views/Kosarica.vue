<template>
  <v-container fluid class="backgroundimg">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr >
            <th class="text-center">Namirnica</th>
            <th></th>
            <th class="text-center">Cijena/Jedinica</th>
            <th class="text-center">Količina</th>
            <th class="text-center">Ukupna cijena</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(item, index) in kupovina" :key="item.itemId">
            <td width="100px" class="py-2"><v-img  :src="item.itemPic" width="50px" ></v-img></td>    
            <td>{{ item.itemIme }}</td>
            <td>{{ item.itemCijena + " kn" }}</td>
            <td>{{ item.itemStanje }}</td>
            <td >{{ item.itemStanje * item.itemCijena + " kn"}}</td>
            <td>
                <v-btn @click="izbrisi(index)" class="mx-2" fab dark small color="error">
                    <v-icon dark>mdi-minus</v-icon>
                </v-btn>
            </td>

          </tr>
        </tbody>
        <tr>
            <td/><td/><td/><td/>
            <th class="text-center">Ukupan iznos: {{iznos()}} kn</th>
            <td/>
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
    izbrisi(id) {
        this.kupovina.splice(id, 1); //id oznacava gdje se nalazi objekt u polje kupovina, 1 je broj elemenata za brisati
        localStore.cartCounter--;
    },
    iznos(){
        let tot = 0;
        this.kupovina.filter((item) => {
            tot += (item.itemStanje * item.itemCijena);
        });
        return tot;
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
</style>