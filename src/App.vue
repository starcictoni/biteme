<template>
  <v-app id="inspire">
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
          <v-img alt="Vuetify Logo" class="neka" contain src="olive.jpg" transition="scale-transition"/>
        </div>
        <v-spacer></v-spacer>

        <div v-if="!authenticated">
          <v-btn class="mr-2"><router-link to="Prijava"> Prijava </router-link></v-btn>
          <v-btn class="mr-2"> <router-link to="Registracija">Registracija</router-link></v-btn>  
        </div>
        {{userEmail}}
        <div v-if="authenticated" >
          
          <v-btn class="mr-2" @click.prevent="logout"><router-link to="/"> Odjava </router-link></v-btn>
        </div>
        
    </v-app-bar>
    <v-container class="p-2 mt-12 mb-12">
    <v-content class="p-0 mt-12">
      <router-view/>
    </v-content>
    </v-container>
    <v-footer app>
      <!-- -->nesto nesto
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import localStore from '@/localStore.js';
export default {
  name: 'App',

  data () {
    return localStore;
  },
  components: {
    HelloWorld,
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
    getUser() {
      var user = firebase.auth().currentUser;
      var name, email, uid;
      if(user != null) {
        name = user.displayName;
        email = user.email;
        uid = user.uid;
      }
    }
  },
   mounted() {
    const self = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.userEmail = user.email;
        self.authenticated = true;
        console.log(`Authenticated: ${self.userEmail}`)
        if (self.$route.name !== 'home')
          self.$router.push({name: 'home'})
      }
      else {
        self.authenticated = false
        console.log('Logged out')
        if (self.$route.name !== 'prijava')
          self.$router.push({name: 'prijava'})
      }
    });
  }
};
</script>

<style lang="scss">
  .neka {
    object-fit: cover; 
    width: 50px;
    height: 600px;
  }
</style>
