<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-5 font-weight-black white--text tagline text-xs-center">
            Priprema jela nikad nije
            </div>
            <div
                class="display-5 tagline font-weight-black white--text text-xs-center">
            bila jednostavnija!
            </div>
            <div class="display-1 font-weight-bold black--text text-xs-center">
                Uz Bite.me jedite zdravo, domaće i ukusno!
            </div>
            <v-btn fab color="#ffe600" class="mt-5">
                <v-icon large color="white"></v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>
<style scoped>
.home-hero {
    background: url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    width: 100%;
    height: 100%;
}
.tagline{
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    font-size: 76px !important;
    line-height: 5rem;
    letter-spacing: -0.0083333333em !important
}
</style>
