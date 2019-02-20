import Vue from 'vue';
import { GChart } from 'vue-google-charts';

export function IntializeGoogleChart() {
  Vue.component('GChart', GChart);
}
