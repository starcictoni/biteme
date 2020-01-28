<template>
    <v-container>
        <!-- ovo je testirnje sb -->
        <p>{{kupovina[0]}}</p>   
        <p>{{kupovina[1]}}</p>
        <p>{{kupovina[2]}}</p>
        <p>{{kupovina[3]}}</p>
        <p>{{kupovina[4]}}</p>
        <p>{{kupovina[5]}}</p>
        <p>{{kupovina[6]}}</p>
        <p>{{kupovina[7]}}</p>
        <p>{{kupovina[8]}}</p>
        <p>{{kupovina[9]}}</p>

    </v-container>
</template>

<script>
import localStore from "@/localStore.js";

export default {
    name:"kosarica",    
    data() {
        return localStore;
    }
};
</script>