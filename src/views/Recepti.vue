<template>
  <v-app>
    <v-content>
        Recepti
      <router-view></router-view>
    </v-content>
  </v-app> 
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'recepti',
  components: {
    HelloWorld
  }
}
</script>