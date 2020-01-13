<template>
  <v-app id="app">
    <navbar></navbar>
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

<style lang="scss"></style>