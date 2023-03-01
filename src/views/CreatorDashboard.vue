<template>
  <v-container>
    <v-row v-if="auth.user">
      <v-col cols="12">
        <div class="text-h3">Welcome {{ auth.user.username }}</div>
      </v-col>
      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <div class="text-h5">
            Your Custom Rewards
          </div>
          <v-btn color="primary" rounded :to="{ name: 'RewardCreate' }">Create Reward</v-btn>
        </div>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="reward of rewards" :key="reward.id">
            <RewardCard :reward="reward">
            </RewardCard>
          </v-col>
        </v-row>
      </v-col>
      <!-- <v-col cols="12">
        <div class="text-h5">
          Recent Redemptions
        </div>
        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="redemption of redemptions" :key="redemption.id">
            <RedemptionCard :redemption="redemption">
            </RedemptionCard>
          </v-col>
        </v-row>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, inject } from "vue";
import { useAuthStore } from '@/store/auth';
import RewardCard from "@/components/RewardCard.vue";
import RedemptionCard from "@/components/RedemptionCard.vue";

const axios = inject('axios');
const auth = useAuthStore();

const rewards = ref(null);
const redemptions = ref(null);

let rewardsData = await axios.get("/api/rewards");

rewards.value = rewardsData?.data;

//init redemptions
// let response = await axios.get("/api/twitch/redemptions");

// redemptions.value = response?.data?.data;

</script>
