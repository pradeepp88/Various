import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';

export function IntializeVuetify() {

  Vue.use(Vuetify, {
    iconfont: 'fa',
  });
}
