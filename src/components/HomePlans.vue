<template>
    <v-container grid-list-lg>
        <v-layout row class="justify-cenet">
            <v-flex xs12 class="text-xs-center text-center justify-center display-1 font-weight-black my-5"
                >Dostupni planovi prehrane</v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/hjCA3ecCXAQ"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >KETO</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Keto</h3>
                            <div>
                                Keto dijeta je HFLC dijeta sa adekvatnom količinom bjelančevina. Dijeta forsira tijelo
                                 da sagorijeva masti, a ne ugljikohidrate,
                                 stavljajući tako tijelo u ketozu.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('keto')"
                            data-cy="plansKetoBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/6S27S6pZ6o0"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >PALEO</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Paleo</h3>
                            <div>
                                Paleo dijeta zahtijeva pretežno konzumiranje hrane za koju se pretpostavlja da je bila jedina dostupna hrana koju su ljudi imali ili konzumirali tijekom ere paleolita.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('paleo')"
                            data-cy="plansPaleoBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/1SPu0KT-Ejg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >VEGAN</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Vegan</h3>
                            <div>
                                Veganska prehrana suzdržava se od upotrebe životinjskih proizvoda. Ona ne sadrži meso, mlijeko, jaja ili bilo koje druge sastojke životinjskog porijekla.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('vegan')"
                            data-cy="plansVeganBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    methods: {
        showRecipes(plan) {
            this.$store.dispatch('getRecipes', plan);
        }
    }
};
</script>

<style scoped></style>
