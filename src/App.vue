<template>
  <v-app id="app" style="background-color: white">
    <span>
      <!-- Drawer -->

      <v-navigation-drawer temporary app v-model="drawer" light disable-resize-watcher>
        <v-list class="pt-0" v-if="!authenticated">
          <v-list-item class="justify-center">
            <img src="bmlogo.png" width="130px" />
          </v-list-item>
          <v-list-item class="tile mt-1">
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
          <v-list-item two-line style="background-color: #ffe600">
            <v-list-item-avatar class="mr-3">
              <img :src="photo || 'def-pic.jpg'" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{firstname}} {{lastname}}</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item height="105px" class="justify-center mt-1 mb-n5">
            <v-btn
              retain-focus-on-click
              text
              tile
              small
              class="font-weight-black listbtn"
              to="/Profil"
            >TVOJ PROFIL</v-btn>
            <v-btn
              retain-focus-on-click
              text
              small
              tile
              class="font-weight-black listbtn"
              @click.prevent="logout"
              to="/"
              data-cy="logout"
            >ODJAVA</v-btn>
          </v-list-item>
          <v-list-item class="justify-center mt-3">
            <img src="bmlogo.png" width="130px" />
          </v-list-item>
          <v-list-item class="tile mt-1">
            <router-link class="tile" to="/namirnice">
              <v-list-item-content>Namirnice</v-list-item-content>
            </router-link>
          </v-list-item>
          <v-divider />
          <v-list-item class="tile">
            <router-link class="tile" to="/Namirnice">
              <v-list-item-content>Namirnice</v-list-item-content>
            </router-link>
          </v-list-item>
          <v-list-item class="tile">
            <router-link class="tile" to="/recepti">
              <v-list-item-content>Recepti</v-list-item-content>
            </router-link>
          </v-list-item>
          <v-divider />
          <v-list-item class="tile">
            <router-link class="tile" to="/trgovina">
              <v-list-item-content>Trgovina</v-list-item-content>
            </router-link>
          </v-list-item>
          <v-divider />
          <v-list-item class="tile">
            <router-link class="tile" to>
              <v-list-item-content>O nama</v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Navbar -->
      <v-app-bar app dense color="black" dark>
        <v-row wrap class="justify-center">
          <v-col>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="logo"></v-app-bar-nav-icon>
          </v-col>

          <v-col align-self="center" class="justify-center">
            <router-link to="/">
              <v-img
                v-bind:class="[$vuetify.breakpoint.smAndDown ? 'ml-auto' : 'mx-auto']"
                text-center
                :src="require('@/assets/bmlogoW.png')"
                width="130px"
              ></v-img>
            </router-link>
          </v-col>

          <v-col align-self="center" class="justify-center hidden-sm-and-down">
            <div v-if="!authenticated" class="mx-auto hidden-sm-and-down v-responsive">
              <v-btn
                retain-focus-on-click
                text
                class="ml-auto"
                tile
                to="/prijava"
                data-cy="signinBtn"
              >PRIJAVA</v-btn>
              <v-btn light tile to="/registracija" class="nav-join" data-cy="joinBtn">REGISTRACIJA</v-btn>
            </div>
          </v-col>
        </v-row>

        <!-- <v-spacer class="hidden-md-and-up"></v-spacer>
        <v-spacer class="hidden-sm-and-down"></v-spacer>-->
        <!-- 
        <v-spacer class="hidden-sm-and-down"></v-spacer>-->

        <!-- <div v-if="authenticated" class="hidden-sm-and-down">
        <v-alert v-if="!verified" type="error">Nije autenticiran</v-alert>-->
        <!-- <v-btn retain-focus-on-click text to="/Profil">PROFIL</v-btn>
          <v-btn outlined retain-focus-on-click tile color="white" @click.prevent="logout" to="/" data-cy="logout">ODJAVA</v-btn>
        </div>-->
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
    let user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
       //debugger;
        this.email = user.email; 
        this.authenticated = true;
        db.collection("users")
        .doc(this.email)
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
          if (user.emailVerified) {
            this.verified = true;
            console.log('Email is verified');
          }
          else {
            this.verified = false;
            console.log('Email is not verified, zasto dvaput?');
          }
        db.collection("users")
          .doc(this.email)
          .get()
          .then(doc => {
            if (doc.exists) {
              this.email = doc.data().email; //mozda promijeniti store varijable u lokalne
              this.username = doc.data().username; //this.local_Username varijabla u localstoreu = zapisi u bazu email, username
              console.log(`Username: ${this.username}`);
              console.log(`Authenticated: ${this.email}`);
              if (this.$route.name !== "home")
                this.$router.push({ name: "home" });
              } 
              else {
                console.log("No such document!"); // doc.data() will be undefined in this case
              }
          });
      } //if(user)
      else {
        this.authenticated = false;
        console.log('Logged out')
      }
    });

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
  justify-content: center;
  font-weight: bold;
}
.tile:hover {
  background: #ffe600;
}
.logo {
  // margin-right: 0px;
}
#app ::selection {
  background: #fae94f;
}
.v-btn--active::before {
  opacity: 0 !important;
}
.v-btn--active:before {
  opacity: 0 !important;
}
.listbtn:hover{
   background-color: #ffe600 !important;
}
</style>

