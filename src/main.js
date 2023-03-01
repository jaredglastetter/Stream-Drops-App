/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
axios.defaults.withCredentials = true;
import VueAxios from 'vue-axios'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'

registerPlugins(app)

app.mount('#app')
