<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4" xl="3">
        <v-btn color="purple" @click="loginWithTwitch" block> <v-icon>mdi-twitch</v-icon>Login with Twitch</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';

const store = useAuthStore()

function loginWithTwitch() {
  console.log('env: ', import.meta.env)
  const authUrl = import.meta.env.VITE_API_DOMAIN_NAME + `/api/auth/twitch`;

  //window.location.href = authUrl;
  window.open(authUrl, '_blank')
}

</script>
