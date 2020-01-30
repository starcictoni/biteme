<template>
  <v-container fill-width fluid class="justify-center mt-12 ekobg" style=" height: 60vh; max-width: 80%">
    <div fill-height style="height: 60vh;">
      <v-row class="mt-8 mb-0 py-0 justify-center align-center text-center">
        <v-col cols="10" >
          <div v-bind:class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'headline']"
            height="100%"
            class="mb-12 font-weight-bold black--text text-center"
          >Koristeći Bite.me, pomažete lokalnom gospodarstvu i čuvate okoliš!</div>

          <div v-bind:class="[$vuetify.breakpoint.mdAndUp ? 'title' : 'subtitle-2']"
            class="mb-4 font-weight-bold"
          >Surađujući sa obiteljskim poljoprivrednim gospodarstvima i malim tvrtkama, na vaš stol stavljamo isključivo svježu hranu i namirnice ekološkoga uzgoja.</div>
          <div v-bind:class="[$vuetify.breakpoint.mdAndUp ? 'title' : 'subtitle-2']" >Tako eliminiramo posrednike, a samim time i nepotrebno zagađenje.</div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeEko"
};
</script>
<style css scoped>
.ekobg {
  background: url("https://i.imgur.com/N8MYzx6.png");
  background-size: cover;
  width: 100%;
  background-position: center center;
  z-index: 0;
  border: 20px solid #ffe600;

}
.overlay {
  position: relative;
  width: 100%;
  height: 100%;
}
.tekst {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;
  font-size: 76px !important;
  line-height: 5rem;
  max-width: 70%;
  letter-spacing: -0.0083333333em !important;
}
.xxx {
  border-width: 10px;
  border-color: black;
}
</style>

