<template>
  <v-container>
    <v-row>
      <v-col cols="3"> Prvi column
      </v-col>
      <v-col cols="6" md="5">
        <v-sheet elevation="12" class="pa-12 pt-12 text-center">
          <v-row justify="space-around mb-3">
            <v-avatar size="85" >
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="LOGO">
            </v-avatar>
          </v-row>
        <h3 class="dobrodosli">Neki lijepi ugodni pozdrav</h3>
        <h3 class="idipavidi">Neki razlog zasto bi se covjek ponovno prijavio</h3>
          <v-form @submit.prevent="signup">
          
          <!-- Email -->
          <v-text-field
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
            filled
            outlined
          >
          </v-text-field>

          <!--Password -->
          <v-text-field
            v-model="password"
            background-color=""
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
          >
          </v-text-field>

          <!-- Ostatak -->
          <div class="row">
            <div class="col-md-6 text-left mt-1 pt-0 pb-0 ">
              Zaboravili ste lozinku? Treba novi view
            </div>
            <div class="col-md-6 text-right pt-0 pb-0 mt-3">
              <v-btn type="submit" class="ma-2" outlined color="black"> Prijava </v-btn>
            </div>
          </div>
          <div class="separator"> ili </div>
          <div class="text-center">
            <v-btn class="ma-2" outlined color="primary"> Facebook </v-btn>
            <v-btn class="ma-2" outlined color="red darken-3"> Google </v-btn>
          </div>
          </v-form>
          
        </v-sheet>
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
  name: "Prijava",
  components: {
    HelloWorld
  },  
  data () {
    return {
      show1: false,
      email: '',
      password: '',
      rules: {
        required: value => !!value || 'Nužno je unijeti.'
      }
    }
  },
  methods: {
    signup () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        var errorcode;
        var errorMessage;
        if(errorCode === 'auth/wrong password') {
          alert('Wrong password.');
        }
        else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }
  }
};
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