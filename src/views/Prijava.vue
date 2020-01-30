<template>
  <v-container fill-height fluid class="justify-center backgroundimg" style="max-height: 100%;">
    <v-row class="justify-center">
      <v-col cols="12" md="5">
        <v-sheet elevation="5" class="pa-12 pt-12 text-center">
          <v-row class="justify-center align-center">
            <v-avatar tile height="auto" width="100px" class="mb-5">
              <img src="logoletter.png" alt="LOGO">
            </v-avatar>
          </v-row>
        <h3 class="dobrodosli">Dobrodošao natrag!</h3>
        <h3 class="idipavidi">Prijavi se u svoj Bite.me račun.</h3>
          <v-form @submit.prevent="signin">

          <!-- Email -->
          <v-text-field
            dense
            v-model="email"
            background-color=""
            name="nesto"
            label="E-mail"
            :rules="[rules.required]"
            placeholder="Unesite e-mail"
            row-height="14"
            rows="2"
            auto-grow
            clearable
          ></v-text-field>

          <!--Password -->
          <v-text-field
            v-model="password"
            class="my-3"
            background-color=""
            name="nesto"
            label="Lozinka"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'Password'"
            placeholder="Unesite lozinku"
            row-height="14"
            rows="3"
            auto-grow
            clearable
            dense
            @click:append="show1 = !show1"
          ></v-text-field>
          <!-- Ostatak -->
          <div>
            <div class="text-left mt-n6 pt-0 pb-0 caption">
              <router-link to="Zaboravljena">Zaboravili ste lozinku?</router-link>
            </div>
            <div class="text-center pt-0 pb-0 my-3">
              <v-btn tile depressed @click.prevent="signin" type="submit" class="ma-2 signbtn" outlined> Prijava </v-btn>
            </div>
          </div>
          <div class="separator"> ili </div>
          <div class="justify-center">
            <v-btn tile class="ma-2" outlined color="primary"> Facebook </v-btn>
            <v-btn tile @click.prevent="goosignin" class="ma-2" outlined color="red darken-3"> Google </v-btn>
          </div>           
          </v-form>
          
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Prijava",
  data () {
    return {
      show1: false,
      email: "",
      password: "",
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
              alert("User not found");
              break;
            case 'auth/email-already-in-use':
              alert(`Email address ${this.email} already in use.`);
            case 'auth/invalid-email':
              alert(`Email address ${this.email} is invalid.`);
            case 'auth/operation-not-allowed':
              alert('Error during sign up.');
            case 'auth/weak-password':
              alert('Password is not strong enough.')
            default:
              alert(error.message);
          }
        })
        if (this.$route.name !== "home")
             this.$router.push({ name: "home" });
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
.signbtn:hover {
  background-color: #ffe600 !important;
  border-color: white;
}
</style>