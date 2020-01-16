<template>
  <v-app id="app">
    <span>
    <v-navigation-drawer temporary app v-model="drawer" light disable-resize-watcher>
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
        <v-btn text to="/prijava" data-cy="signinBtn">PRIJAVA</v-btn>
        <v-btn light to="/registracija" class="nav-join" data-cy="joinBtn">REGISTRACIJA</v-btn>
      </div>
      <div v-if="authenticated">
        <div v-if="!verified">
          <v-alert class="mt-1 mb-1 mr-3" type="error">
             Nije autenticiran
          </v-alert>
        </div>
          <v-btn text to="/Profil">PROFIL</v-btn>
          <v-btn outlined color="white" @click.prevent="logout" to="/" data-cy="logout">ODJAVA</v-btn>
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
      //prezimee:'sdsdsd',
      items: [
        { title: "Menu", url: "/menu" },
        { title: "About", url: "/about" },
        { title: "Prijava", url: "/prijava" },
        { title: "Registracija", url: "/registracija" }
      ]
    }
  },

  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },//methods

  mounted() {
    const self = this;
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        self.local_UserEmail = user.email;  //prebaci u store, pa iz storea u thenu zapisi u bazu 
        self.local_Username = self.username;
        self.authenticated = true;
      db.collection("users")
      .doc(self.local_UserEmail)
      .get()
      .then(doc => {
        if (doc.exists) {
          self.local_UserEmail = doc.data().email;
          self.local_Username = doc.data().username; //this.local_Username varijabla u localstoreu = zapisi u bazu email, username
          console.log(`Username: ${self.local_Username}`);
          console.log(`Authenticated: ${self.local_UserEmail}`);
          if (self.$route.name !== 'home')
              self.$router.push({name: 'home'})
        } 
        else {
          console.log("No such document!"); // doc.data() will be undefined in this case
        }
      });
      }//if(user)
      else {
        self.authenticated = false;
        self.local_authenticated = false;
        console.log('Logged out')
      }
      if (user.emailVerified) {
        self.verified = true;
        self.local_verified = true;
        console.log('Email is verified');
      }
      else {
        console.log('Email is not verified');
      }
    });
  }//mounted
  ,
};
</script>

<style lang="scss">
a {
  color: white;
  text-decoration: none;
}
.nav-join:hover {
  background-color: #ffe600 !important;
}
.tile:hover {
  background: #ffe600;
}
.logo {
  margin-right: 200px;
}
#app ::selection {
  background: #fae94f;
}
  </style>