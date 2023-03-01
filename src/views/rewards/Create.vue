<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="text-h4">
          Create New Reward
        </div>
      </v-col>
      <v-col cols="12">
        <v-form>
          <v-text-field v-model="form.title" label="Name"></v-text-field>
          <v-text-field v-model="form.cost" label="Channel Points Cost" type="number"></v-text-field>
          <v-text-field v-model="form.totalSupply" label="Reward Supply"
            placeholder="Type the number of rewards you would like to make available for redemption"
            type="number"></v-text-field>
          <v-text-field v-model="form.image" label="Image"
            placeholder="An image url from an image hosting service (ex. imgur)"></v-text-field>
          <v-text-field v-model="form.prompt" label="Prompt"></v-text-field>
        </v-form>
        <v-btn color="primary" rounded @click="submit">Submit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, inject } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const axios = inject('axios');

let form = ref({});

async function submit() {
  try {
    let response = await axios.post("/api/twitch/rewards/create", { reward: form.value });
    let rewardId = response.data;
    //redirect to newly created reward
    router.push({ name: 'Reward', params: { id: rewardId } })

  } catch (e) {
    //error snackbar
  }
}

</script>