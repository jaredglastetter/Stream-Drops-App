import { defineStore } from 'pinia';
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      user: null,
    };
  },
  getters: {
    isAuthenticated() {
      return this.user !== null;
    },
  },
  actions: {
    async syncUser() {
      let userData = await axios.get("/api/auth/me").catch((err) => {
        return err;
      })

      if (userData) this.setUser(userData.data);
    },
    setUser(user) {
      this.user = user;
    },
    logout() {
      axios.get('/api/auth/logout');
      this.setUser(null)
    }
  },
});
