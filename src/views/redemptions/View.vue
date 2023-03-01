<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-img class="rounded-lg" :src="reward.image || reward.defaultImage?.url_4x"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-list-item>
          <v-list-item-title>
            <div class="text-h5">{{ reward.title }} #62</div>
          </v-list-item-title>
        </v-list-item>
        <div class="d-flex flex-wrap">
          <!-- Creator Spot -->
          <v-list-item :title="auth.user.username" subtitle="Verified Creator"
            :prepend-avatar="auth.user.profileImageUrl">
          </v-list-item>

          <v-list-item :title="owner.username" subtitle="Verified Owner" :prepend-avatar="owner.profileImageUrl"
            :to="{ name: 'User', params: { username: owner.username } }">
          </v-list-item>
        </div>

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

let redemption = ref(null)
let reward = ref(null)
let owner = ref(null)

const redemptionId = route.params?.id;

let response = await axios.get("/api/redemptions/" + redemptionId);
redemption.value = response.data;
reward.value = redemption.value.reward;
owner.value = redemption.value.user;

//computed
const rewardImage = computed(() => {
  if (reward)
    return reward?.image || reward?.defaultImage?.url_4x;
})

</script>