import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


import './assets/style.css'

const app = createApp(App);
app.use(Toast);
app.mount('#app')
