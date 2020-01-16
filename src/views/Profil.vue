<template>
    <v-container>

    <v-row>
      <v-col cols="3"> Prvi column </v-col>
          {{funkcija()}}
        <v-col cols="6" md="5">
          <v-sheet elevation="12" class="pa-12 pt-12 mb-12 text-center">
            <v-avatar size="150" >
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="LOGO"> <!-- User photo -->
            </v-avatar>
            <v-btn class="mt-8 mb-1" block color="secondary" dark>Uredite profil</v-btn>
            <div class="separator mt-3 mb-3"> </div>
              <!-- {{username}} -->
            <div class="separator mt-3 mb-3"> </div>
              <!-- {{email}} -->
            <div class="separator mt-3 mb-3"> </div>
          </v-sheet>
        </v-col>


      <v-col cols="3"> Treci column </v-col>
    </v-row>

  </v-container>
</template>

<script>
import localStore from '@/localStore.js';
export default {
  name: "Profil",
    data() {
      return {
       localStore,
      }
    },
    
     methods:  {
      funkcija() {
      console.log("nesto",this.localStore_Username);
      console.log("mailcek",this.localStore_UserEmail);
      let id = self.email;
      db.collection("users")
        .doc(id)
        .get()
        .then(doc => {
        if (doc.exists) {
        self.username = doc.data().username;
        self.email = doc.data().email;
 /*       this.userFirstName = doc.data().User_First_Name;
        this.userSecondName = doc.data().User_Second_Name;
        this.userShelterName = doc.data().User_Shelter_Name;
        this.userGender = doc.data().User_Gender;
        this.userOibSsn = doc.data().User_Shelter_OIB_SSN;
        this.userLocation = doc.data().User_Shelter_Location;
        this.userPicture = doc.data().User_Picture;*/
        console.log("Document data:", doc.data());
        console.log(self.username);
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
                }
            });
            }
      } 
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
</style>