<template>
  <v-app id="app">
    <!-- <navbar></navbar> -->
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
        <v-btn text to="/about">PROFILE</v-btn>
        <v-btn outlined color="white" @click="logout" data-cy="logout">Logout</v-btn>
      </div>
    </v-app-bar>
  </span>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

import localStore from "@/localStore.js";


export default {
  name: "App",
  // components: {
  //   Navbar
  // }
    data() {
    return {
      localStore,
      authenticated: false,
      drawer: false,
      items: [
        { title: "Link1", url: "/menu" },
        { title: "Link2", url: "/about" },
        { title: "Prijava", url: "/prijava" },
        { title: "Registracija", url: "/registracija" }
      ]
    };
  },

  methods: {
    logout() {
      firebase.auth().signOut();
    },
    getUser() {
      var user = firebase.auth().currentUser;
      var name, email, uid;
      if (user != null) {
        name = user.displayName;
        email = user.email;
        uid = user.uid;
      }
    }
  },
  mounted() {
    const self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.userEmail = user.email;
        self.authenticated = true;
        console.log(`Authenticated: ${self.userEmail}`);
        if (self.$route.name !== "home") self.$router.push({ name: "home" });
      } else {
        self.authenticated = false;
        console.log("Logged out");
        // if (self.$route.name !== "prijava")
        //   self.$router.push({ name: "prijava" });
      }
    });
  }
}
</script>

<style lang="scss">
a {
  color: white;
  text-decoration: none;
}
.nav-join:hover {
  background-color: yellow !important;
}
.tile:hover {
  background: yellow;
}
.logo {
  margin-right: 200px;
}</style>