<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-list-item :title="user.username" :prepend-avatar="user.profileImageUrl">
        </v-list-item>
      </v-col>
      <v-col cols="12">
        <div class="text-h5">Rewards</div>
        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="reward of rewards" :key="reward.id">
            <RewardCard :reward="reward">
            </RewardCard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, inject } from "vue";
import { useRoute } from 'vue-router'

import { useAuthStore } from '@/store/auth';

import RewardCard from "@/components/RewardCard.vue";

const auth = useAuthStore()
const route = useRoute()
const axios = inject('axios');

let user = ref(null)

const username = route.params?.username;

let response = await axios.get("/api/users/" + username);
user.value = response.data;

const rewards = ref(null);

let rewardsData = await axios.get("/api/rewards");

rewards.value = rewardsData?.data;

</script>