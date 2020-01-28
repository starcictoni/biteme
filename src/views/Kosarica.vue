<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Namirnica</th>
            <th class="text-left">Cijena</th>
            <th class="text-left">Stanje</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in kupovina" :key="item">
                <td>{{ item[0] }}</td>
                <td>{{ item[1] + " kn" }}</td>
                <td>{{ item[2] }}</td>

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