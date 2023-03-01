<template>
  <v-app-bar flat>
    <router-link to="/">
      <v-app-bar-title>
        <v-icon icon="mdi-circle-slice-6" />

        Stream Drops
      </v-app-bar-title>
    </router-link>
    <v-btn to="/users" class="ml-3">Explore</v-btn>
    <v-spacer></v-spacer>
    <template v-if="user">
      <v-avatar class="mr-3">
        <v-img :src="user.profileImageUrl" alt="John"></v-img>
      </v-avatar>
      {{ user.username }}
      <v-btn @click="logout">
        <v-icon>mdi-logout</v-icon> logout
      </v-btn>
    </template>
    <v-btn v-else :to="{ name: 'Login' }">
      <v-icon>mdi-login</v-icon> Login
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const axios = inject('axios')
const auth = useAuthStore()
const user = ref(null);

await auth.syncUser();

if (auth.isAuthenticated) {
  user.value = auth.user;
}

function logout() {
  auth.logout();
  router.push({ name: "Login" })
}
</script>
