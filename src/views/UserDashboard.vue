<template>
  <v-container>
    <v-row v-if="auth.user">
      <v-col cols="12">
        <div class="text-h3">Welcome {{ auth.user.username }}</div>
      </v-col>
      <v-col cols="12">
        <div class="text-h5 mb-3">
          Your Rewards
        </div>
        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="redemption of redemptions" :key="redemption.id">
            <RedemptionCard :redemption="redemption">
            </RedemptionCard>
          </v-col>
        </v-row>
      </v-col>
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


//init redemptions
let response = await axios.get("/api/redemptions/user/" + auth.user._id);

redemptions.value = response?.data;

</script>
