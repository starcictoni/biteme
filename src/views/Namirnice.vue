<template>
  <v-app>
    <v-app-bar app>
    <!-- -->
   </v-app-bar>
  <!-- Sizes your content based upon application components -->
    <v-content>
    <!-- Provides the application the proper gutter -->
        Namirnice
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-content>
    <v-footer app>
    <!-- -->
    </v-footer>
  </v-app> 
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'namirnice',
  components: {
    HelloWorld
  }
}
</script>