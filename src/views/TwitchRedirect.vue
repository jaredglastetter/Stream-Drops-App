<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useRoute } from 'vue-router'
import { inject } from 'vue'
export default {

  setup() {
    const route = useRoute()
    const axios = inject('axios')
    //call backend to set login credentials
    console.log('calling backend')
    axios.get('http://localhost:3001/api/auth/twitch/callback', { params: route.query });
  },
}
</script>