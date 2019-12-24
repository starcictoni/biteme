<template>
    <v-app>
      <v-content>
        Registracija

            <h1>This is a signup page</h1>
            <div class="container">
              <div class="row">
                <div class="col"></div>
                <div class="col"></div>
              </div>
              <div class="row">
                <div class="col"></div>
                <div class="col">

                  <form @submit.prevent="signup"><!--Nemoj poslati na server-->
                    <div class="form-group">
                      <!--Mail-->
                      <label for="emailField">Email address</label>
                      <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email"/>
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    
                    <!--Password-->
                    <div class="form-group">
                      <label for="passwordField">Password</label>
                      <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password"/>
                    </div>

                    <!--Password 2-->
                    <div class="form-group">
                      <label for="confirmPasswordField">Confirm Password</label>
                      <input v-model="password2" type="password" class="form-control" id="confirmPasswordField" placeholder="Confirm password"/>
                    </div>

                    <div v-if="password != password2" class="alert alert-danger" role="alert">Passwords do not match.</div> <!--Promijeni css-->
                    <button v-if="password == password2" type="submit" class="btn btn-primary mt-5">Submit</button>
                  </form>

        </div>
        <div class="col"></div>
      </div>
    </div>
        <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
export default {
  name: "signup",
  data () {
    return {
      email: "",
      password: "",
      password2: ""
    }
  },
  methods: {
    signup () {
      debugger;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error);
      });
    },
  }
}
</script>

<style lang="scss">
form {
  text-align: left;
  label {
    margin-top: 10px;
    margin-left: 15px;
  }
  ::placeholder {
    color: gray;
  }
}
</style>