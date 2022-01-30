import { createApp } from 'vue';
import insecure_router from './routes.js';
import secure from './security.js';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

let app = createApp(App);

const secure_router = secure(insecure_router);

app.use(secure_router);

app.mount('#app');