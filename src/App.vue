<template>
  <v-app>
    <!-- Navigation drawer upon authentication (Ono lijevo kao što je na Slacku)
    <v-navigation-drawer app>
      
    </v-navigation-drawer>
     -->
    <v-app-bar app color="secondary" dark>
        <v-btn class="mr-2">
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn class="mr-2">
          <router-link to="/recepti">Recepti</router-link>
        </v-btn>
        <v-btn class="mr-2">
          <router-link to="/namirnice">Namirnice</router-link>
        </v-btn>
        <v-btn class="mr-2">
          <router-link to="/poklon">Poklon bon</router-link>
        </v-btn>
        <v-btn class="mr-2">
          <router-link to="/onama">O nama</router-link>
        </v-btn>
        <v-btn class="mr-2">
          <router-link to="/partner">Postanite partner</router-link>
        </v-btn>
        <v-spacer></v-spacer>
         LOGO 
         <div class="d-flex align-center">
          <v-img alt="Vuetify Logo" class="neka" contain src="/testg.svg/" transition="scale-transition"/>
        </div>
        <v-spacer></v-spacer>
        <v-btn class="mr-2">
          <router-link to="prijava">Prijava</router-link>
        </v-btn>
        <v-btn class="mr-2">
          <router-link to="Registracija">Registracija</router-link>
        </v-btn>    
    </v-app-bar>

    <v-content class="p-0">
      <router-view/>
    </v-content>
    <v-footer app>
      <!-- -->nesto nesto
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  .neka {
    object-fit: cover; 
    width: 50px;
    height: 600px;
  }
</style>
