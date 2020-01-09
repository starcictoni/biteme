<template>
  <v-container>
    <v-row>
      <v-col cols="3"> Prvi column
      </v-col>
      <v-col cols="6" md="5">
        <v-sheet elevation="12" class="pa-12 pt-12 mb-12 text-center">
          <v-row :justify="justify" :align="alignment">

            <v-avatar size="85" >
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="LOGO">
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
            outlined
          >
          </v-text-field>

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
          >
          </v-text-field>

          <!-- Password -->
          <v-text-field
            :password="password"
            background-color=""
            name="input-10-2"
            label="Lozinka"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.password]"
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
          >
          </v-text-field>
          
          <!-- Ostatak -->
          <div class="row">
          <div v-if="password != password2">
              <v-alert type="error">
                Lozinke se ne podudaraju
              </v-alert>
            </div>
            <div class="col-md-6 text-left mt-1 pt-0 pb-0 ">
              <v-checkbox label="Pristajem na uvjete"></v-checkbox>
            </div>
            <div class="col-md-6 text-right pt-0 pb-0 mt-3">
              <v-btn v-if="password == password2" type="submit" class="ma-2" outlined color="black"> Registracija </v-btn>
            </div>
          </div>
          <!--
          <div class="separator"> ili </div>
          <div class="text-center">
            <v-btn class="ma-2" outlined color="primary"> Facebook </v-btn>
            <v-btn class="ma-2" outlined color="red darken-3"> Google </v-btn>
          </div>
          -->
          </v-form>
        </v-sheet>
        <!-- Poslovni korisnici, ne znam hocemo li stici
        <v-btn block color="secondary" dark>Za poslovne korisnike</v-btn>
        -->
        
      </v-col>
      <v-col cols="3"> Treci column
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
    HelloWorld
  },
  data () {
    return {
      alignment: 'center',
      justify: 'center',
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
          console.log("Usao je mater mu jebem");
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
      console.log("hihiih");
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(u => {})
      .catch(error => {
        switch(error.code) {
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

    },
      methods: {
        newUser() {
          console.log("Zapisujem korisnika u bazu", this.username, this.email, this.password);
          db.collection("users").add({
            username: this.username,
            email: this.email,
            password: this.password
          });
        }
      }
    }
  }
//export
</script>

<style lang="scss">

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