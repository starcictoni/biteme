<template>
  <v-container fluid class="backgroundimg">
    <v-app>
      
            <!-- <v-card color="rgb(255, 0, 0, 0)" elevation="0" class="mx-auto" max-width="280">
              <v-img class="align-end justify-center" :src="grocery.pic" height="fill"></v-img>
              <v-card-title class="justify-center headline font-weight-bold">{{ grocery.ime }}</v-card-title>
              <v-card-subtitle class="text-center subtitle-1 black--text font-weight-black">{{grocery.kolicina + ': '}}{{grocery.cijena }}</v-card-subtitle>
              <v-card-actions class="justify-center">
                <v-btn color="#eeffff" text tile>DODAJ U KOŠARICU</v-btn>
                <v-btn icon @click="grocery.show = !grocery.show">
                  <v-icon>{{ grocery.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <transition-group>
                  <div v-show="grocery.show" v-for="(opis,key) in grocery.opis" :key="key">
                  <v-card-text class="text-left textbg">Kalorije: {{opis.kalorije}}</v-card-text>
                  <v-card-text class="text-left textbg">Bjelančevine: {{opis.bjelancevine}}</v-card-text>
                  <v-card-text class="text-left textbg">Ugljikohidrati: {{opis.ugljikohidrati}}</v-card-text>
                  <v-card-text class="text-left textbg">Masti: {{opis.masti}}</v-card-text>
                  </div>
              
              </transition-group>
            </v-card> -->
            <NamCard></NamCard>
          

      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </v-container>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NamCard from "@/components/NamCard.vue";

export default {
  ime: "namirnice",
  components: {
    HelloWorld,
    NamCard
  },
  
};
</script>

<style lang="scss">
.textbg {
  padding-bottom: 0px;
  padding-top: 8px;
}
.backgroundimg {
    background: url('https://i.imgur.com/oJxfKdW.png');
    background-size: contain;
    width: 100%;
    height: 100%;
}
</style>