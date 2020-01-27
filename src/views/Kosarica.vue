<template>
    <v-container>
        <!-- ovo je testirnje sb -->
        <p>{{kupovina[0]}}</p>   
         <p>{{kupovina[1]}}</p>  
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