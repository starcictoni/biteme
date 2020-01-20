<template>
    <v-container  fill-height fluid class="homebackground" style="max-height: 90vh;">
        <v-layout justify-center align-center column pa-5>
            <div v-bind:class="[$vuetify.breakpoint.mdAndUp ? 'display-5' : 'display-2']" class="white--text font-weight-black tekst text-center">
            Priprema jela nikad nije bila jednostavnija!
            </div>
            <div class="display-1 font-weight-bold black--text text-center">
            Uz Bite.me jedite zdravo, domaće i ukusno!
            </div>
            <v-btn fab large color="#ffe600" class="mt-5"  @click="$vuetify.goTo('.white', [500, 0, 'easeInOutCubic'])">
            <v-icon large color="black">mdi-chevron-down</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>;
export default {
    name: 'Hero' 
};
</script>
<style scoped>
.homebackground{
    background: url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center center;
}
.tekst{
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    font-size: 76px !important;
    line-height: 5rem;
    max-width: 70%;
    letter-spacing: -0.0083333333em !important
}
</style>
