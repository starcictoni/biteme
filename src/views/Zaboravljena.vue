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
                    <v-btn tile @click.prevent="resend"  type="submit" class="mt-0 ma-2" outlined color="black"> Pošalji </v-btn>
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
      }
    },
    methods: {
        resend () {
            var auth = firebase.auth();
            var emailAddress = this.email;
            auth.sendPasswordResetEmail(emailAddress)
            .then(function(success) {
                // Email sent
                alert("Email je poslan");
            }).catch(function(error, error1, error2) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode == 'auth/invalid-email') {

                          alert(errorMessage);
                        } else if (errorCode == 'auth/user-not-found') {
                          alert(errorMessage);
                        }
                        console.log(error);
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