<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-h4">Explore Streamers</div>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="6" sm="6" md="4" lg="3" xl="2" v-for="user of users" :key="user._id">
            <UserCard :user="user"></UserCard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, inject } from "vue";
import { useAuthStore } from '@/store/auth';
import UserCard from "@/components/UserCard.vue";

const axios = inject('axios');
const auth = useAuthStore();

const users = ref(null);

let usersData = await axios.get("/api/users?broadcasterType=affiliate");

users.value = usersData?.data;
</script>