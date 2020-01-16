<template>
  <v-container fluid class="backgroundimg" style="max-height: 150vh;">
    <v-row class="justify-center">
      <v-col cols="6" md="5">
        <v-sheet elevation="5" class="pa-12 pt-12 text-center">
          <v-row :justify="justify" :align="alignment">
            <v-avatar tile height="auto" width="100px" class="mb-5">
              <img src="logoletter.png" alt="LOGO">
            </v-avatar>
          </v-row>
        <h3 class="dobrodosli">Neki lijepi ugodni pozdrav</h3>
        <h3 class="idipavidi">Neki razlog zasto bi se covjek ponovno prijavio</h3>
          <v-form @submit.prevent="signup">

          <!-- Email -->
          <v-text-field
            v-model="email1"
            background-color=""
            name="nesto"
            label="E-mail"
            :rules="[rules.required]"
            placeholder="Unesite e-mail"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
          ></v-text-field>

          <!--Password -->
          <v-text-field
<<<<<<< HEAD
            v-model="password1"
            background-color=""
=======
            v-model="password"
            background-color="" 
>>>>>>> a108628d952172897e957ff4f75ca9d28e4309a9
            name="nesto"
            label="Lozinka"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'Password'"
            placeholder="Unesite lozinku"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
            @click:append="show1 = !show1"
          ></v-text-field>

          <!-- Ostatak -->
          <div class="row">
            <div class="col-md-6 text-left mt-1 pt-0 pb-0 ">
              <router-link to="Zaboravljena">Zaboravili ste lozinku?</router-link>
            </div>
            <div class="col-md-6 text-right pt-0 pb-0 mt-3">
              <v-btn @click.prevent="signin" type="submit" class="ma-2" outlined color="black"> Prijava </v-btn>
            </div>
          </div>
          <div class="separator"> ili </div>
          <div class="text-center">
            <v-btn class="ma-2" outlined color="primary"> Facebook </v-btn>
            <v-btn @click.prevent="goosignin" class="ma-2" outlined color="red darken-3"> Google </v-btn>
          </div>           
          </v-form>
          
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Prijava",
  components: {
    //HelloWorld
  },
  data () {
    return {
      alignment: "center",
      justify: "center",
      show1: false,

      email1: "",
      password1: "",
      rules: {
        required: value => !!value || 'Nužno je unijeti.'
      }
    }
  },
  methods: {
    signin () {
      console.log("Pozvao je sign in");
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
          switch(error.code) {
            case 'auth/user-not-found':
              console.log("User not found");
            case 'auth/email-already-in-use':
              console.log(`Email address ${this.email} already in use.`);
            case 'auth/invalid-email':
              console.log(`Email address ${this.email} is invalid.`);
            case 'auth/operation-not-allowed':
              console.log('Error during sign up.');
            case 'auth/weak-password':
              console.log('Password is not strong enough.')
            default:
              console.log(error.message);
          }
        });
    },//signin

    goosignin () {
      firebase.auth().signInWithPopup(provider)
              .then(function(result) {
              var token = result.credential.accessToken;  // This gives you a Google Access Token. You can use it to access the Google API.
              var user = result.user;  // The signed-in user info.
              // ...
              })
              .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
              })
    }//goosignup
  }//methods
};//export
</script>

<style lang="scss">
.backgroundimg {
    background: url('https://i.imgur.com/oJxfKdW.png');
    background-size: contain;
    width: 100%;
    height: 100%;
}
.separator {
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 25px;
}
.separator::before, .separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #aaaaaa;
}
.separator::before {
    margin-right: .25em;
}
.separator::after {
    margin-left: .25em;
}
.dobrodosli {
  text-align: center;
  color: black;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1.5px
}
.idipavidi {
  text-align: center;
  color: #aaaaaa;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 50px;
}
</style>