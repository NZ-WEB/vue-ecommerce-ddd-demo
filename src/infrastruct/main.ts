import { createApp } from 'vue';
import App from './App.vue';
import { router } from './shared/instances/router.ts';
import { pinia } from './shared/instances/store.ts';
import Notifications from '@kyvg/vue3-notification';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(Notifications);
app.mount('#app');
