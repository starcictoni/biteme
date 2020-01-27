<template>
  <v-container fluid class="backgroundimg" style="max-height: 100%;">
    <v-row class="justify-center">
    
      <v-col cols="12" sm="9" md="5">
        <v-sheet elevation="5" class="pa-12 pt-12 mb-12 text-center">
          <v-row :justify="justify" :align="alignment">
            <v-avatar tile height="auto" width="100px" class="mb-5">
              <img src="logoletter.png" alt="LOGO">
            </v-avatar>
          </v-row>
        <h3 class="dobrodosli-reg">Neki lijepi ugodni pozdrav</h3>
        <v-form @submit.prevent="signup">
          <!-- Username -->

          <v-text-field
            v-model="username"
            background-color=""
            name="nesto"
            label="Korisnicko ime"
            :rules="[rules.required]"
            placeholder="Unesite korisnicko ime"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            type=""
            value=""
            id=""
            input
            outlined
          ></v-text-field>

          <!--Email -->
          <v-text-field
            v-model="email"
            background-color=""
            name="nesto"
            :rules="[rules.required]"
            label="E-mail"
            placeholder="Unesite e-mail"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
          ></v-text-field>

          <!-- Password -->
          <v-text-field
            v-model="password"
            background-color=""
            name="input-10-2"
            label="Lozinka"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.password]"
            :type="show1 ? 'text' : 'Password'"
            hint=""
            placeholder="Unesite lozinku"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
            @click:append="show1 = !show1"
          ></v-text-field>

          <!-- Password2 -->
          <v-text-field
            v-model="password2"
            background-color=""
            name="input-10-2"
            label="Potvrda lozinke"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show2 ? 'text' : 'Password'"
            placeholder="Ponovno unesite lozinku"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
            @click:append="show2 = !show2"
          ></v-text-field>

          <!-- Ostatak -->
          <div class="row">
          <!-- <div v-if="password !== password2">
              <v-alert type="error">
                Lozinke se ne podudaraju
              </v-alert>
            </div> -->
            <div class="col-md-6 col-sm-12 justify-center text-center mt-1 pt-0 pb-0 ">
              <v-checkbox class="justify-center" label="Pristajem na uvjete"></v-checkbox>
            </div>
            <div class="col-md-6 text-center pt-0 pb-0 mt-3" width="50px">
              <v-btn v-if="password !== password2" text wrap color="red" width="50px" class="ma-2"> Lozinke se ne podudaraju </v-btn>
              <v-btn v-if="password == password2" @click.prevent="signup" type="submit" class="ma-2" outlined color="black"> Registracija </v-btn>
            </div>
          </div>
          </v-form>
        </v-sheet>
        <!-- Poslovni korisnici, ne znam hocemo li stici
        <v-btn block color="secondary" dark>Za poslovne korisnike</v-btn>
        -->
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";


export default {
  name: "Registracija",
  components: {
    //HelloWorld
  },
  data () {
    return {
      alignment: "center",
      justify: "center",
      show1: false,
      show2: false,
      username: "",
      email: "",
      password: "",
      password2: "",
      rules: {
        required: value => !!value || 'Nužno je unijeti.',
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          console.log("Usao je u rules");
          return (
            pattern.test(value) || 
            "Minimalno 8 znakova, 1 veliko slovo, 1 broj i 1 poseban znak"
          );
        }
      }
    }//return
  },//data
  methods: {
    signup () {
      const self = this;
      console.log("Pozvao je signup");
      console.log(self.username);
      console.log(self.email);
      console.log(self.password);
      console.log(self.password2);
      var user = firebase.auth().currentUser;
      firebase.auth().createUserWithEmailAndPassword(self.email, self.password)
          .then()
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            switch(error.code) {
              case 'auth/email-already-in-use':
                alert(`Email address ${self.email} already in use.`);
              case 'auth/invalid-email':
                alert(`Email address ${self.email} is invalid.`);
              case 'auth/operation-not-allowed':
                alert('Error during sign up.');
              case 'auth/weak-password':
                alert('Password is not strong enough.')
              default:
                alert(error.message);
            }
          })//catch

        firebase.auth().onAuthStateChanged(function(user) {
          user.sendEmailVerification(); 
        });

        let id = self.email;
        db.collection("users").doc(id)
          .set({
            email: self.email,
            username: self.username,
          })
          .then(function() {
              console.log("Document successfully written!");
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
    },//signup
    }//methods
  }
//export
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
.dobrodosli-reg {
  text-align: center;
  color: black;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1.5px;
  margin-bottom: 50px;
}
</style>