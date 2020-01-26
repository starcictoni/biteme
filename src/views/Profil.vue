<template>
    <v-container>
    <v-row class="justify-center">
      <!-- ODABIR SLIKE NEK BUDE S DESNE STRANE DOK CE OSTATAK BITI S LIJEVE -->
      <!-- REAUTENTICIRAJ KAKO BI DOBIO STARU LOZINKU, VALJDA?-->
        <v-col cols="6" md="6">
          <v-sheet elevation="12" class="pa-12 pt-12 mb-12 text-center">
            <h3 class="dobrodosli">Uredi svoj profil</h3>
            <h3 class="idipavidi">Sve će biti u redu</h3>
            <v-avatar class="mb-6" size="180" >
              <img :src="photo || 'def-pic.jpg'" alt="LOGO"> <!-- User photo -->
            </v-avatar>
            <!-- <v-btn class="mt-8 mb-1" block color="secondary" dark>Uredite profil</v-btn> -->
            <!-- <div class="separator mt-3 mb-3"> </div> -->

            <!-- Ovaj dio se salje u storage -->
            <!-- {{username}}
            {{firstname}}
            {{lastname}}
            {{adresa}} -->
          
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
            hint=""
            placeholder="Unesite adresu"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
          ></v-text-field>
          <v-btn tile type="submit" @click="updateprofile" class="ma-2" outlined color="black"> Spremi </v-btn>
          <v-btn tile @click="show3 =! show3" type="submit" class="ma-2" outlined color="black"> Promjena lozinke </v-btn> 
          <div v-if="!show3">
           
          <!-- Old password -->
            <v-text-field
            class="mt-7"
            v-model="oldPassword"
            background-color=""
            name="input-10-2"
            label="Lozinka"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="rules.password"
            :type="show2 ? 'text' : 'Password'"
            hint=""
            placeholder="Unesite staru lozinku"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
            @click:append="show2 = !show2"
          ></v-text-field> 
          
          <!-- Ovo se ne salje na bazu -->
          <!-- newPassword -->
          <v-text-field
            v-model="newPassword"
            background-color=""
            name="input-10-2"
            label="Lozinka"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="rules.password"
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

          <form @submit.prevent="postnewimage" class="mb-5 cropper">
            <v-card outlined>
            <croppa 
            :canvas-color="'default'"
            :placeholder="'Odaberi sliku'"
            :width="200" 
            :height="120" 
            v-model="imageData"
            ></croppa>
            </v-card>
          </form>
          <!-- </div> -->
          <div class="row">
            <div class="col-md-6 text-right pt-0 pb-0 mt-3">
              <v-btn type="submit" @click="postnewimage" class="ma-2" outlined color="black"> Promijeni profilnu </v-btn>
            </div>
          </div>
          </v-sheet>
        </v-col>
    </v-row>

  </v-container>
</template>

<script>
import localStore from '@/localStore.js';
export default {
  name: "Profil",
    data() {
      return localStore;
},


mounted() {
  console.log("Pozvan je profil mounted");
  var user = firebase.auth().currentUser;

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

},
  methods: {
    postnewimage() {
      var user = firebase.auth().currentUser;
      var id = user.email;
      this.imageData.generateBlob(blobData => {
        console.log(blobData);
        if(blobData != null) {
          let imageName = this.email + "/" + Date.now() + ".png";
          storage
          .ref(imageName)
          .put(blobData)
          .then(result => {
            result.ref.getDownloadURL()
            .then(url => {
            db.collection("users")
            .doc(id)
            .update({
              url: url,
              posted_at: Date.now(),
            })
            .then(docRef => {
              console.log("Document written with ID: ",
              docRef.id);
              this.imageData = null;
              })
              .catch(e => {
              console.error("Error adding document: ");
              });
              })
              .catch(e=> {
              console.error(e)
              })
              })
              .catch(e => {console.error(e)
              })
              }
              }); // da... zatvaranje zagrada nakon ovoga noćna je mora!
      //foto: this.photo
    },
    updateprofile () {
      var user = firebase.auth().currentUser;
      var id = user.email;
      db.collection("users").doc(id).update({
          ime: this.firstname,
          prezime: this.lastname,
          adresa: this.adresa,
          kupovina: this.kupovina,
      })
      .then(function(id) {
          console.log("Document written with ID: ", id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    },

    change () {
      var user = firebase.auth().currentUser;
      if(this.newPassword != null) {
          user.updatePassword(newPassword).then(function()  {
             console.log("Update successful.")
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            switch(error.code) {
            case 'auth/weak-password':
              console.log('Password is not strong enough.')
            default:
              console.log(error.message);
          }
          });
      }
      else {
        console.log("Well...");
      }
      // var user = firebase.auth().currentUser;
      // var credential;
      // // Prompt the user to re-provide their sign-in credentials
      // user.reauthenticateWithCredential(credential).then(function() {
      //   // User re-authenticated.
      // }).catch(function(error) {
      //   // An error happened.
      // });
    },//change
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
.croppa-container {
  background-color:#f0f0f0;
  border-style: solid;
  border-color: #c5c5c5;
  border-width: 1px;
  //margin: 1px;
  
}
.croppa-container:hover {
  opacity: 0.7;
}



</style>