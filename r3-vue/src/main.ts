import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { IntializeVuetify } from './vuetifySettings';
import { IntializeGoogleChart } from './googleChartSettings';
import './assets/styles/main.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

IntializeVuetify();
IntializeGoogleChart();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
