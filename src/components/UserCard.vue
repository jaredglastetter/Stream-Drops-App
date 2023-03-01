<template>
  <v-card class="text-center pa-5 rounded-lg" :to="{ name: 'User', params: { username: user.username } }">
    <v-avatar size="80" class="mb-1">
      <v-img :src="user.profileImageUrl"></v-img>
    </v-avatar>
    <div>{{ user.username }}</div>
  </v-card>
</template>

<script setup>
defineProps(['user'])
</script>