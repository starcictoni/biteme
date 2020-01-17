<template>
  <v-app id="app">
    <span>
      <!-- Drawer -->
      <v-navigation-drawer temporary app v-model="drawer" light disable-resize-watcher>
        <v-list v-if="!authenticated">
          <v-list-item class="tile">
            <router-link class="tile" to="/recepti">
              <v-list-item-content>Recepti</v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list>

        <v-list v-if="authenticated">
          <v-list-item class="tile">
            <router-link class="tile" to="/recepti">
              <v-list-item-content>nešto kad se korisnik prijavi</v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Navbar -->
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
          <!-- <v-alert v-if="!verified" type="error">Nije autenticiran</v-alert> -->
          <v-btn text to="/Profil">PROFIL</v-btn>
          <v-btn outlined color="white" @click.prevent="logout" to="/" data-cy="logout">ODJAVA</v-btn>
        </div>
      </v-app-bar>
    </span>
    
    <!-- Sadrzaj -->
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import localStore from "@/localStore.js";

export default {

  data() {
    return localStore;
  },

  methods: {
    logout() {
      firebase.auth().signOut();
    }
  }, //methods

  mounted() {
    const self = this;
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        self.local_UserEmail = user.email; //prebaci u store, pa iz storea u thenu zapisi u bazu
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
              if (self.$route.name !== "home")
                self.$router.push({ name: "home" });
            } else {
              console.log("No such document!"); // doc.data() will be undefined in this case
            }
          });
      } //if(user)
      else {
        self.authenticated = false;
        self.local_authenticated = false;
        console.log("Logged out");
      }
      if (user.emailVerified) {
        self.verified = true;
        self.local_verified = true;
        console.log("Email is verified");
      } else {
        console.log("Email is not verified");
      }
    });
  } //mounted
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
.tile {
  color: black!important;
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

