<template>
  <v-card :to="{ name: 'Reward', params: { id: reward._id } }" class="rounded-lg">
    <v-img v-if="reward.defaultImage" :src="reward.image || reward.defaultImage?.url_4x"></v-img>
    <v-card-item>
      <v-card-title>{{ reward.title }}</v-card-title>
      <v-card-subtitle>
        <div class="d-flex align-center">
          <div v-if="reward.defaultImage">
            <v-img :src="reward.defaultImage.url_1x" height="16" width="16"></v-img>
          </div>
          {{ reward.cost }}
        </div>
      </v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup>
defineProps(['reward'])
</script>