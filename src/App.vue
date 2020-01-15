<template>
  <v-app id="app">
    <span>
    <v-navigation-drawer app v-model="drawer" light disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item class="tile" :key="index" :to="item.url">
            <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="logo"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <router-link to="/">
        <v-img :src="require('@/assets/bmlogoW.png')" width="160px"></v-img>
      </router-link>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!authenticated" class="hidden-sm-and-down">
        <v-btn text to="/prijava" data-cy="signinBtn">PRIJAVI SE</v-btn>
        <v-btn light to="/registracija" class="nav-join" data-cy="joinBtn">REGISTRIRAJ SE</v-btn>
      </div>
      <div v-else>
        <div v-if="authenticated">
          <div class="mt-1 mr-2" v-if="!verified">
                <v-alert class="mr-2" type="error">
                  Nije autenticiran
                </v-alert>
              </div>
          <v-btn text to="/Korisnicki profil">PROFILE</v-btn>
          <v-btn outlined color="white" @click.prevent="logout" to="/" data-cy="logout">Logout</v-btn>
        </div>
      </div>
    </v-app-bar>
  </span>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import localStore from '@/localStore.js';

export default {
  name: 'App',
  data () {
    return {
      localStore,
      authenticated: false,
      verified: false,
      drawer: false,
      items: [
        { title: "Menu", url: "/menu" },
        { title: "About", url: "/about" },
        { title: "Prijava", url: "/prijava" },
        { title: "Registracija", url: "/registracija" }
      ]
    }
  },

  methods: {
    /* addUser() {
      db.collection("users").add({
        email: local_UserEmail,
        
      }) 
    },*/
    logout() {
      firebase.auth().signOut();
    },
  },//methods

  mounted() {
    const self = this
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        self.userEmail = user.email;
        self.authenticated = true;
        localStore.authenticated = true;
        localStore.local_Username = user.username;
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
        localStore.authenticated = false;
        console.log('Logged out')
      //  if (self.$route.name !== 'prijava')
      //    self.$router.push({name: 'prijava'})
      }
      if (user.emailVerified) {
        self.verified = true;
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

<style lang="scss"></style>