<template>
  <v-card class="rounded-lg" :to="{ name: 'Redemption', params: { id: redemption._id } }">
    <v-img :src="redemption.reward.image"></v-img>
    <v-card-item>
      <v-card-title>{{ redemption.reward.title }}</v-card-title>
      <v-card-subtitle>{{ redemption.user.username }}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup>
defineProps(['redemption'])
</script>