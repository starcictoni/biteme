<template>
    <v-container  fill-height fluid class="homebackground2" style="max-height: 90vh;">
        <v-layout justify-center align-center column pa-5>
            <div v-bind:class="[$vuetify.breakpoint.mdAndUp ? 'display-5' : 'display-2']" class="white--text font-weight-black tekst text-center">
            Započnite godinu zdravo
            </div>
            <div style="-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: #000000;" class="display-1 font-weight-black white--text text-center">
            Ovaj tjedan u Bite.me zeleno nesto
            </div>
            <v-btn fab large color="#ffe600" class="mt-5"  @click="$vuetify.goTo('.white', [500, 0, 'easeInOutCubic'])">
            <v-icon large color="black">mdi-chevron-down</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>;
export default {
    name: 'Heroauth' 
};
</script>
<style scoped>
.homebackground2{
    background: url('https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
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
