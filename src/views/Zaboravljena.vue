<template>
  <v-container>
    <v-row>
      <v-col cols="3"> Prvi column
      </v-col>
      <v-col cols="6" md="5">
        <v-sheet elevation="12" class="pa-12 pt-12 text-center">
          <v-form @submit.prevent="signup">
            <h3 class="naslov">Pronađi svoj Bite.me račun</h3>
            <h3 class="podnaslov">Reci nam svoj email :)</h3>
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
                    filled
                    outlined
                >
                </v-text-field>
                    <div class=" text-right pt-0 pb-0 mt-3">
                    <v-btn @click.prevent="resend" type="submit" class="mt-0 ma-2" outlined color="primary"> Pošalji </v-btn>
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
export default {
    name: 'Zaboravljena',
    methods: {
        resend () {
            var auth = firebase.auth();
            var emailAddress = "user@example.com";
            auth.sendPasswordResetEmail(emailAddress).then(function() {
            // Email sent
                console.log("Mail je poslan")
            }).catch(function(error) {
                switch(error.code) {
                    case 'auth/user-not-found':
                        console.log("User not found");
                    case 'auth/invalid-email':
                        console.log(`Email address ${this.email} is invalid.`);
                }
            // An error happened.
            });
        }
    }
}
</script>

<style lang="scss">
.naslov {
  text-align: left;
  color: black;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1.5px
}
.podnaslov {
  text-align: left;
  color: #aaaaaa;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
  margin-left: 5px;
}
</style>