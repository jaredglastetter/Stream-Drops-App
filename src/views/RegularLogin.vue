<template>
  <v-container>
    <v-card>
      <v-card-title class="text-center">Login</v-card-title>
      <v-card-text>
        <v-form v-model="valid" @submit.prevent="login">
          <v-text-field v-model="email" label="Email" required :rules="[emailRules]"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
          <v-btn type="submit" color="primary" :disabled="!valid">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  setup() {
    const email = ref('');
    const password = ref('');
    const store = useStore();
    const router = useRouter();
    const valid = ref(false);

    const emailRules = [
      (v) => !!v || 'Email is required',
      (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
    ];

    const login = async () => {
      const success = await store.dispatch('login', { email: email.value, password: password.value });
      if (success) {
        router.push('/dashboard');
      } else {
        // handle error
      }
    }

    return { email, password, login, valid, emailRules };
  }
}
</script>
