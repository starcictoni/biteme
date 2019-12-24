<template>
  <v-app>
    <v-content>
        Trgovina
    <h1>This is a login page</h1>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>

        <div class="col">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="emailField">Email address</label>
              <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="passwordField">Password</label>
              <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Password"/>
            </div>
              <div class="text-center">
    <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
    <v-btn class="ma-2" outlined fab color="teal">
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>
    <v-btn class="ma-2" outlined large fab color="indigo">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </div>
            <button type="submit" class="btn btn-primary mt-5">Submit</button>
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
    data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>
