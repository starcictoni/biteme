<template>
  <v-container fluid class="backgroundimg">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Namirnica</th>
            <th class="text-left">Cijena/Jedinica</th>
            <th class="text-left">Količina</th>
            <th class="text-left">Ukupna cijena</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in kupovina" :key="item.itemId">
            <td>{{ item.itemIme }}</td>
            <td>{{ item.itemCijena }}</td>
            <td>{{ item.itemStanje }}</td>
          </tr>
        </tbody>
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