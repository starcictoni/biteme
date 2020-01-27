<template>
  <v-app>
      <v-container fluid class="trgbackground">
        <v-row class="justify-left">
          <v-col class="justify-center" sm="12" md="4" v-for="item in storeItems" :key="item.id">
            <v-card color="rgb(255, 0, 0, 0)" elevation="0" class="mx-auto" max-width="280">
              <v-img class="align-end justify-center" :src="item.pic" height="fill"></v-img>
              <v-card-title class="justify-center headline font-weight-bold">{{ item.title }}</v-card-title>
              <v-card-subtitle class="text-center subtitle-1 black--text font-weight-black">{{ item.price }}</v-card-subtitle>

              <!-- <v-card-subtitle class="text-center pt-0 mt-0">{{ item.desc }}</v-card-subtitle> -->

              <v-card-actions class="justify-center">
                <v-btn color="#eeffff" text tile>DODAJ U KOŠARICU</v-btn>
               
                <v-btn icon @click="item.show = !item.show">
                  <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="item.show">
                  <!-- <v-divider></v-divider> -->

                  <v-card-text class="text-center textbg">I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => {
    return ({
      storeItems: [
        {id: '1', title: 'proizvod 1', price: 'XX.XX kn', desc: 'kratak opis', show: false, pic: 'https://cdn.shopify.com/s/files/1/0035/2508/3181/products/1_The_Tie-Dye_Sweatshirt_in_a_Color_We_Call_Blueberry_Smoothie_300x.png?v=1575987271'},
        {id: '2', title: 'proizvod 2', price: 'XXX.XX kn', desc: 'kratak opis', show: false, pic: 'https://www.amcsa.co.za/docs/products/87070/default_358x_7.png'},
        {id: '3', title: 'proizvod 3', price: 'XXXX.XX kn', desc: 'kratak opis', show: false, pic: 'https://www.ecolutionhome.com/wp-content/uploads/2017/05/MAIN-IMAGE.png'},
        {id: '4', title: 'proizvod 4', price: 'XXX.XX kn', desc: 'kratak opis', show: false, pic: 'https://www.ecolutionhome.com/wp-content/uploads/2017/05/EABK-1208-Artistry-8-Pc-Set.png'},
        {id: '5', title: 'proizvod 5', price: 'XX.XX kn', desc: 'kratak opis', show: false, pic: 'https://cdn.shopify.com/s/files/1/0035/2508/3181/products/1_The_Tie-Dye_Sweatshirt_in_a_Color_We_Call_Blueberry_Smoothie_300x.png?v=1575987271'},
        {id: '6', title: 'proizvod 6', price: 'XXX.XX kn', desc: 'kratak opis', show: false, pic: 'https://www.amcsa.co.za/docs/products/87070/default_358x_7.png'}
      ]
    });
  }
};
</script>

<style lang="scss">
.trgbackground {
    background-size: contain;
    background: url('https://via.placeholder.com/1500x900/ffe600/ffe600');
    height: 100%;
    width: 100%   
}
.textbg{
  background-color:#ffffff
}
</style>                                                                                                                          