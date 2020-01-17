<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <v-hover v-slot:default="{ hover }">
          <v-card
            to="/prijava"
            class="mx-auto"
            max-width="350px"
            :elevation="hover ? 24 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img
              class="white--text align-end"
              height="fill"
              src="https://cdn.sunbasket.com/tn_f85d0cb7-f443-4423-8bc4-c3bbefd20020.jpg"
            ></v-img>
            <v-card-title>Ime recepta</v-card-title>

            <v-card-subtitle>Tags za filtriranje</v-card-subtitle>
          </v-card>
        </v-hover>
      </v-col>
      
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: "recepti",
  components: {}
};
</script>