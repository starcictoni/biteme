<template>
  <v-container>
    <v-row class="justify-center text-center">
      <v-col class="text-center" cols="12" md="6">
        <v-sheet class="text-center">
          <v-form class="text-center" @submit.prevent="resend">
            <h3 class="naslov">Whoops! 😯 Zaboravio si lozinku za svoj Bite.me račun? 🤔</h3>
            <h3 class="podnaslov">Upiši svoj e-mail i šaljemo ti upute za reset.</h3>
                <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    v-model="email"
                    background-color=""
                    name="nesto"
                    label="E-mail"
                    row-height="14"
                    rows="2"
                    auto-grow
                    clearable
                    dense
                >
                </v-text-field>
                    <div class=" text-center pt-0 pb-0 mt-3">
                    <v-btn tile @click.prevent="resend" v-model="validate" type="submit" class="mt-0 ma-2" outlined color="black"> Pošalji </v-btn>
                    </div>
                 <div>   
                    <div v-if="validate">
                      <v-alert v-model="success" tile type="success">
                        {{success1}}
                      </v-alert>
                    </div>
                    <div v-if="validate">
                      <v-alert v-model="error1" tile type="error">
                        {{error11}}
                      </v-alert>
                      <v-alert v-model="error2" tile type="error">
                        {{error21}}
                      </v-alert>
                    </div>
                </div>
                </v-form>
                </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'Zaboravljena',
    data () {
      return {
        email: "",
        error11: "Email je nevažeći.",
        error21: "Korisnik nije pronađen.",
        success1: "Email je poslan.",
        error1: false,
        error2: false,
        success: true,
        validate: false,
      }
    },
    methods: {
        resend () {
            var auth = firebase.auth();
            var emailAddress = this.email;
            auth.sendPasswordResetEmail(emailAddress).then(function() {
            // Email sent
                //poziv successa
                console.log("Mail je poslan");
                this.validate = true;
            }).catch(function(error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // [START_EXCLUDE]
                        if (errorCode == 'auth/invalid-email') {
                          error2=true;
                          alert(errorMessage);
                        } else if (errorCode == 'auth/user-not-found') {
                          error1=true;
                          alert(errorMessage);
                        }
                        console.log(error);
                        // [END_EXCLUDE]
                      });
        }
    }
}
</script>

<style lang="scss">
.naslov {
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -1.5px
}
.podnaslov {
  color: #aaaaaa;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
}
</style>