<template>
    <v-container>
    <v-row>
      <v-col cols="3"> Prvi column
      </v-col>
      <v-col cols="6" md="5">
        <v-sheet elevation="12" class="pa-12 pt-12 mb-12 text-center">
          <v-row :justify="justify" :align="alignment">
            <v-avatar size="85" >
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="LOGO">
            </v-avatar>
          </v-row>
        <h3 class="dobrodosli-reg">Neki lijepi ugodni pozdrav</h3>
        <v-form @submit.prevent="signup">

          <!-- Email -->
          <v-text-field
            v-model="email"
            background-color=""
            name="nesto"
            label="Korisnicko ime"
            :rules="[rules.required]"
            placeholder="Unesite korisnicko ime"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
          >
          </v-text-field>

          <!-- Lozinka -->
          <v-text-field
            v-model="password"
            background-color=""
            name="nesto"
            label="Korisnicko ime"
            :rules="[rules.required]"
            placeholder="Unesite korisnicko ime"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
          >
          </v-text-field>

          <!-- Unesite ime -->

          <v-text-field
            v-model="firstname"
            background-color=""
            name="nesto"
            label="Korisnicko ime"
            :rules="[rules.required]"
            placeholder="Unesite korisnicko ime"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
          >
          </v-text-field>

          <!-- Unesite prezime -->

          <v-text-field
            v-model="lastname"
            background-color=""
            name="nesto"
            :rules="[rules.required]"
            label="E-mail"
            placeholder="Unesite e-mail"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
          >
          </v-text-field>

          <!-- Unesite adresu -->

          <v-text-field
            v-model="address"
            background-color=""
            name="input-10-2"
            label="Lozinka"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.password]"
            :type="show1 ? 'text' : 'Password'"
            hint=""
            placeholder="Unesite lozinku"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
            @click:append="show1 = !show1"
          ></v-text-field>

          <!-- Unesite profilnu sliku -->

          <v-text-field
            v-model="password2"
            background-color=""
            name="input-10-2"
            label="Potvrda lozinke"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show2 ? 'text' : 'Password'"
            placeholder="Ponovno unesite lozinku"
            row-height="14"
            rows="2"
            auto-grow
            clearable
            filled
            outlined
            @click:append="show2 = !show2"
          >
          </v-text-field>
          
          <!-- Ostatak -->
          <div class="row">
            <div class="col-md-6 text-left mt-1 pt-0 pb-0 ">
              <v-checkbox label="Pristajem na uvjete"></v-checkbox>
            </div>

          </div>
          </v-form>
        </v-sheet>
        <!-- Poslovni korisnici, ne znam hocemo li stici
        <v-btn block color="secondary" dark>Za poslovne korisnike</v-btn>
        -->
        
      </v-col>
      <v-col cols="3"> Treci column
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

</style>