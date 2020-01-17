<template>
    <v-container>

    <v-row>
      <v-col cols="3"></v-col>
          
        <v-col cols="6" md="6">
          <v-sheet elevation="12" class="pa-12 pt-12 mb-12 text-center">
            <h3 class="dobrodosli">Uredi svoj profil</h3>
            <h3 class="idipavidi">Sve će biti u redu</h3>
            <v-avatar class="mb-6" size="150" >
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="LOGO"> <!-- User photo -->
            </v-avatar>
            <!-- <v-btn class="mt-8 mb-1" block color="secondary" dark>Uredite profil</v-btn> -->
            <!-- <div class="separator mt-3 mb-3"> </div> -->

            <!--Photo -->
          <v-file-input
            v-model="photo"
            :rules="rules.velicina"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Odaberi profilnu"
            prepend-icon="mdi-camera"
            label="Profilna slika"
            clearable
            small
          ></v-file-input>
            <div class="mb-5"></div>

            <!--First name -->
            <v-text-field
            v-model="firstname"
            background-color=""
            name="nesto"
            label="Ime"
            placeholder="Unesite ime"
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
          <!--Last name-->

          <v-text-field
            v-model="lastname"
            background-color=""
            name="nesto"
            label="Prezime"
            placeholder="Unesite prezime"
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

          <!-- Adresa -->
          <v-text-field
            v-model="adresa"
            background-color=""
            name="input-10-2"
            label="Adresa"
            :rules="[]"
            hint=""
            placeholder="Unesite adresu"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-btn @click="show2 =! show2" type="submit" class="mb-2" outlined color="black"> Promjena lozinke </v-btn>
          
          <div v-if="show2">
          <!-- Old password -->
            <v-text-field
            class="mt-7"
            v-model="newpassword"
            background-color=""
            name="input-10-2"
            label="Lozinka"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.min, rules.password]"
            :type="show1 ? 'text' : 'Password'"
            hint=""
            placeholder="Unesite staru lozinku"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
            @click:append="show1 = !show1"
          ></v-text-field>

          <!-- newPassword -->
          <v-text-field
            v-model="newpassword"
            background-color=""
            name="input-10-2"
            label="Lozinka"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.min, rules.password]"
            :type="show1 ? 'text' : 'Password'"
            hint=""
            placeholder="Unesite novu lozinku"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
            @click:append="show1 = !show1"
          ></v-text-field>
          </div>
          <div class="row">
            <div class="col-md-6 text-right pt-0 pb-0 mt-3">
              <v-btn type="submit" class="ma-2" outlined color="black"> Spremi </v-btn>
            </div>
          </div>

                <!-- {{this.username}} @click.prevent="signin" <div class="separator mt-3 mb-3"> </div>  -->
            
                <!-- {{this.email}} <div class="separator mt-3 mb-3"> </div> -->
              <!-- {{email}} -->
            
          </v-sheet>
        </v-col>


      <v-col cols="3"></v-col>
    </v-row>

  </v-container>
</template>

<script>
import localStore from '@/localStore.js';
export default {
  name: "Profil",
    data() {
      return {
        photo: null,
        firstname: "",
        lastname: "",
        adresa: "",
        newpassword: "",
        show1: false,
        show2: false,
        rules: {
        velicina: value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        required: value => !!value || 'Nužno je unijeti.',
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          console.log("Usao je u rules");
          return (
            pattern.test(value) || 
            "Minimalno 8 znakova, 1 veliko slovo, 1 broj i 1 poseban znak"
          );
        },
      }
    }
},
  methods: {
    //jedna veca funkcija koja ukljucuje manje.
    //storage
    change () {
      var user = firebase.auth().currentUser;
      var credential;
      // Prompt the user to re-provide their sign-in credentials
      user.reauthenticateWithCredential(credential).then(function() {
      // User re-authenticated.
      }).catch(function(error) {
      // An error happened.
      });

      var user = firebase.auth().currentUser;
      var newPassword = getASecureRandomPassword();
      user.updatePassword(newPassword).then(function() {
      // Update successful.
      }).catch(function(error) {
      // An error happened.
      });
    }
  }, 
}
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
    margin-right: 0em;
}
.separator::after {
    margin-left: 0em;
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