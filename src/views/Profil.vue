<template>
    <v-container>
    <v-row>
      <v-col cols="3"> Prvi column
      </v-col>
      


     

        <!-- Poslovni korisnici, ne znam hocemo li stici
        <v-btn block color="secondary" dark>Za poslovne korisnike</v-btn>
        -->
        

      <v-col cols="3"> Treci column
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import localStore from '@/localStore.js';
export default {
    data(){
      return localStore;
    }
}
</script>

<style lang="scss">

</style>