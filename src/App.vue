<template>
  <v-app id="app" style="background-color: white">
    <span>
      <!-- Drawer -->
      <v-navigation-drawer temporary app v-model="drawer" light disable-resize-watcher>
        <v-list class="pt-0" v-if="!authenticated">
          <v-list-item style="background-color: black" height="105px" class="justify-center mb-0">
            <v-btn
              retain-focus-on-click
              text
              dark
              tile
              small
              class="font-weight-black listbtn hidden-md-and-up"
              to="/Prijava"
            >PRIJAVA</v-btn>
            <v-btn
              retain-focus-on-click
              text
              small
              dark
              tile
              class="font-weight-black listbtn hidden-md-and-up"
              @click="logout"
              to="/Registracija"
            >REGISTRACIJA</v-btn>
          </v-list-item>
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
          <v-list-item />
          <v-list-item />
          <v-list-item />
          <v-list-item />
          <v-list-item />
          <v-list-item />
          <v-list-item style="background-color: #ffe600" class="font-weight-bold caption">
            <v-list-item-content class="justify-center">Prijavite se na newsletter</v-list-item-content>
          </v-list-item>
          <v-list-item style="background-color: #ffe600" class="justify-center mt-n3">
            <v-icon size="33" class="mediaicon2">mdi-facebook</v-icon>
            <v-icon size="33" class="mx-2 mediaicon2">mdi-instagram</v-icon>
            <v-icon size="33" class="mediaicon2">mdi-twitter-circle</v-icon>
          </v-list-item>
        </v-list>

        <v-list class="pt-0" v-if="authenticated">
          <v-list-item class="justify-center" style="background-color: black">
            <v-btn
              retain-focus-on-click
              text
              dark
              tile
              small
              class="listbtn"
              to="/Profil"
            >TVOJ PROFIL</v-btn>
            <v-btn
              retain-focus-on-click
              text
              small
              dark
              tile
              class="listbtn"
              @click="logout"
              to="/"
            >ODJAVA</v-btn>
          </v-list-item>
          <v-list-item class="mt-2" two-line style="background-color: #ffe600">
            <v-list-item-avatar class="mr-3">
              <img :src="photo || 'def-pic.jpg'" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{firstname}} {{lastname}}</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="justify-center mt-3">
            <router-link to="/">
              <v-list-item-content>
                <img src="bmlogo.png" width="130px" />
              </v-list-item-content>
            </router-link>
          </v-list-item>
          <v-list-item class="tile mt-1">
            <router-link class="tile" to="/namirnice">
              <v-list-item-content>Namirnice</v-list-item-content>
            </router-link>
          </v-list-item>
          <v-divider />
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
          <v-list-item></v-list-item>
          <v-list-item v-if="!verified" class="overline align-center">
            <v-icon>mdi-information</v-icon>
            <v-alert class="pb-0">Račun još nije potvrđen</v-alert>
          </v-list-item>
          <v-list-item></v-list-item>
          <v-list-item class="font-weight-bold caption">
            <v-list-item-content class="justify-center">Prijavite se na newsletter</v-list-item-content>
          </v-list-item>
          <v-list-item class="justify-center mt-n3">
            <v-icon size="33" class="mediaicon">mdi-facebook</v-icon>
            <v-icon size="33" class="mx-2 mediaicon">mdi-instagram</v-icon>
            <v-icon size="33" class="mediaicon">mdi-twitter-circle</v-icon>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Navbar -->
      <v-app-bar app dense color="black" dark>
        <v-row wrap class="justify-center">
          <v-col>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="logo"></v-app-bar-nav-icon>

            <v-btn
              text
              to="/kosarica"
              v-bind:class="[cartCounter ? '' : 'hidden-sm-and-up']"
              class="ma-0"
            >
              <v-icon>mdi-cart</v-icon>
              {{cartCounter}}
            </v-btn>
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
                small
                to="/prijava"
                data-cy="signinBtn"
              >PRIJAVA</v-btn>
              <v-btn
                light
                small
                tile
                to="/registracija"
                class="nav-join"
                data-cy="joinBtn"
              >REGISTRACIJA</v-btn>
            </div>
          </v-col>
        </v-row>
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
  //--------------------------------------------------
  methods: {
    logout() {
      firebase.auth().signOut();
      this.authenticated = false;
      this.drawer = false;
      while (this.kupovina.length) {
        this.kupovina.pop();
      }
      localStore.cartCounter = 0;
    }
  },
  //--------------------------------------------------
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
            if (doc.exists) {
              this.username = doc.data().username;
              this.email = doc.data().email;
              this.firstname = doc.data().ime;
              this.lastname = doc.data().prezime;
              this.adresa = doc.data().adresa;
              this.photo = doc.data().url;
              if (user.emailVerified) {
                this.verified = true;
                console.log(`Username: ${this.username}`);
                console.log(`Authenticated: ${this.email} and verified`);
              } else {
                this.verified = false;
                console.log("Email is not verified");
              }
            } //if(doc.exists)
          }); //then
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
  color: black !important;
  justify-content: center;
  font-weight: bold;
}
.tile:hover {
  background: #ffe600;
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
.listbtn:hover {
  background-color: #ffe600 !important;
  -webkit-text-fill-color: black;
}
.mediaicon {
  -webkit-text-fill-color: black;
}
.mediaicon2 {
  -webkit-text-fill-color: black;
}

.mediaicon:hover {
  -webkit-text-fill-color: #ffe600 !important;
  font-size: 40px !important;
}
.mediaicon2:hover {
  font-size: 40px !important;
}
</style>

