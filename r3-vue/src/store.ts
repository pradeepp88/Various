import Vue from 'vue';
import Vuex from 'vuex';
import Theme from './model/ThemeSelector/Theme';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiURL: 'http://localhost:62308',
    languageString: 'en',
    token: '',
    currentAgent: null,
    agents: [],
    searchClientString: '',
    clientSummaryPageId: 0,
    theme: new Theme(),
  },
  mutations: {
    setLanguage(state: any, isFrench) {
      state.languageString = isFrench ? 'fr' : 'en';
    },
    setCredentials(state: any, { token, defaultAgent, agents }) {
      state.token = token;
      state.currentAgent = defaultAgent;
      state.agents = agents;
    },
    setTheme(state: any, theme: Theme) {
      state.theme = theme;
    },
  },
  actions: {},
});
