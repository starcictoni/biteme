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
         {{local_UserEmail}}
        <div v-if="authenticated" >
              <div class="mr-2" v-if="!verified">
                <v-alert type="error">
                  Nije autenticiran
                </v-alert>
              </div>
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

  methods: {
    addUser() {
      db.collection("users").add({
        email: local_UserEmail,
        
      })
    },
    logout() {
      firebase.auth().signOut();
    },
  },//methods

  mounted() {
    const self = this
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.userEmail = user.email;
        localStore.authenticated = true;
        localStore.local_UserEmail = user.email;
        localStore.local_uid = user.uid;
        console.log(`Authenticated: ${self.userEmail}`)
        console.log(`Email: ${localStore.local_UserEmail}`);
        console.log(`UID: ${localStore.local_uid}`);
      if (self.$route.name !== 'home')
          self.$router.push({name: 'home'})
      }
      else {
        console.log("Ulazi ovdje");
        self.authenticated = false
        console.log('Logged out')
      //  if (self.$route.name !== 'prijava')
      //    self.$router.push({name: 'prijava'})
      }
      if (user.emailVerified) {
        localStore.verified = true;
        console.log('Email is verified');
      }
      else {
        console.log('Email is not verified');
      }
    });
  }//mounted
};
</script>

<style lang="scss">
  .neka {
    object-fit: cover; 
    width: 50px;
    height: 600px;
  }
</style>
