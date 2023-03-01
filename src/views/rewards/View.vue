<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-img class="rounded-lg" :src="reward.image || reward.defaultImage?.url_4x"></v-img>
      </v-col>
      <v-col cols="12" md="8">
        <div class="text-h4">{{ reward.title }}</div>
        <!-- Creator Spot -->
        <v-list-item :title="auth.user.username" :prepend-avatar="auth.user.profileImageUrl">
        </v-list-item>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-h5 mb-3">Redemptions</div>
        <v-list>
          <v-list-item v-for="redemption of redemptions" :key="redemption.id" :title="redemption.user.username"
            :subtitle="redemption.redeemedAt" :prepend-avatar="redemption.user.profileImageUrl"
            :to="{ name: 'Redemption', params: { id: redemption._id } }">
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, inject, reactive, computed } from "vue";
import { useRoute } from 'vue-router'

import { useAuthStore } from '@/store/auth';

const auth = useAuthStore()
const route = useRoute()
const axios = inject('axios');

let reward = ref(null)
let redemptions = ref(null)

const rewardId = route.params?.id;

console.log('route params: ', route.params)

let response = await axios.get("/api/rewards/" + rewardId);
reward.value = response.data;

let redemptionData = await axios.get("/api/redemptions/reward/" + reward.value._id);
redemptions.value = redemptionData.data;

//computed
const rewardImage = computed(() => {
  if (reward)
    return reward.image || reward.defaultImage?.url_4x;
})

</script>