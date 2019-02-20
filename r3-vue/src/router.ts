import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import DashboardPage from './pages/DashboardPage.vue';
import TopTenClient from './components/TopTenClientComponent.vue';
import AssetMixPage from './pages/AssetMixPage.vue';
import AddClientPage from './pages/AddClientPage.vue';
import SearchClientPage from './pages/SearchClientPage.vue';
import ClientSummaryPage from './pages/ClientSummaryPage.vue';
import ThemeSelectorPage from './pages/ThemeSelectorPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'default',
      component: LoginPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
    },
    {
      path: '/toptenclient',
      name: 'toptenclient',
      component: TopTenClient,
    },
    {
      path: '/assetMix',
      name: 'Asset Mix',
      component: AssetMixPage,
    },
    {
      path: '/addClient',
      name: 'addClient',
      component: AddClientPage,
    },
    {
      path: './searchClient',
      name: 'searchClient',
      component: SearchClientPage,
    },
    {
      path: './clientSummary',
      name: 'clientSummary',
      component: ClientSummaryPage,
    },
    {
      path: './themeSelector',
      name: 'themeSelector',
      component: ThemeSelectorPage,
    },
  ],
});
