<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-lg navbar-light bg-white mb-3">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <router-link class="navbar-brand" to="/"> Logo </router-link> 
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <router-link class="nav-item nav-link active" to="/"> Naslovna </router-link>
                <router-link class="nav-item nav-link active" to="/namirnice"> Namirnice </router-link>
                <router-link class="nav-item nav-link active" to="/recepti"> Recepti </router-link>
                <router-link class="nav-item nav-link active" to="/partner"> Postani partner </router-link>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <router-link class="btn btn-info my-0 my-sm-0 mr-2" to="/about"> Prijavi se </router-link>
              <router-link class="btn btn-info my-0 my-sm-0 mr-0" to="/about"> Registriraj se </router-link>
            </div>
          </nav> <!--footer -->
          <div>

          </div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
//promijeni navbar (body-0,header-pad-20-25)

#nav {
  padding: 30px;
    margin-bottom: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
