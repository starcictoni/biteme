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

          <v-list-item class="tile">
            <router-link class="tile" to="/trgovina">
              <v-list-item-content>Trgovina</v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list>

        <v-list v-if="authenticated">
          <!--  <v-list-item two-line></v-list-item> -->
          <v-list-item three-line>
            <v-list-item-avatar>
              <img :src="photo">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{firstname}}</v-list-item-title>
              <v-list-item-title>{{lastname}}</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="tile">
            <router-link class="tile" to="/Profil">
              <v-list-item-content>Profil</v-list-item-content>
            </router-link>
          </v-list-item>
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
    const self = this
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
       //debugger;
        self.email = user.email; 
        self.authenticated = true;
        db.collection("users")
          .doc(self.email)
          .get()
          .then(doc => {
            if (doc.exists) {
              self.email = doc.data().email; //mozda promijeniti store varijable u lokalne
              self.username = doc.data().username; //this.local_Username varijabla u localstoreu = zapisi u bazu email, username
              console.log(`Username: ${self.username}`);
              console.log(`Authenticated: ${self.email}`);
              if (self.$route.name !== "home")
                self.$router.push({ name: "home" });
            } else {
              console.log("No such document!"); // doc.data() will be undefined in this case
            }
          },
          
          );
      } //if(user)
      else {
        self.authenticated = false;
        console.log('Logged out')
      }
      if (user.emailVerified) {
        self.verified = true;
        console.log('Email is verified');
      }
      else {
        self.verified = false;
        console.log('Email is not verified');
      }
    });
  db.collection("users")
  .doc(user.email)
  .get()
  .then(doc => {
    if(doc.exists) {
      this.username = doc.data().username;
      this.firstname = doc.data().ime;
      this.lastname = doc.data().prezime;
      this.adresa = doc.data().adresa;
      this.photo = doc.data().url;
    }
    else {
      console.log("Document does not exist")
    }
    })
    // .catch(error => {
    //   console.log(error);
    // })
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
  color: black !important;
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

