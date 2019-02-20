<template>
  <v-app :dark="getThemeAttr('AppDark')">
    <v-navigation-drawer
      :dark="getThemeAttr('Drawer').isDark"
      :class="getThemeAttr('Drawer').color"
      clipped
      v-model="drawerHideShow"
      v-if="!isLoginPage()"
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, index) in drawerList"
          :key="index"
          @click="drawerClicked(item.redirectPageName)"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :dark="getThemeAttr('MainToolbar').isDark"
      :color="getThemeAttr('MainToolbar').color"
      v-if="!isLoginPage()"
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawerHideShow = !drawerHideShow"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down" mr-1>R3</v-toolbar-title>
      <v-layout justify-end>
        <v-flex sm8 md3 mr-4>
          <v-select
            v-model="currentAgent"
            box
            :items="agents"
            item-text="FullName"
            return-object
            label="Agent"
          ></v-select>
        </v-flex>
        <v-flex sm1 md3>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn @click="searchClient" fab small outline :color="getThemeAttr('ToolbarSpecialColor')">
              <v-icon>search</v-icon>
            </v-btn>
            <v-text-field
              v-model="searchClientString"
              @change="searchClient"
              :color="getThemeAttr('ToolbarSpecialColor')"
              label="Search Client"
              placeholder="Last Name, First Name"
              box
            ></v-text-field>
          </v-toolbar-items>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content>
      <router-view
        :key="refreshKey"
        @authenticated="setAuthenticated"
        @backToDashboard="backToDashboard"
      />
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import LoginPage from '@/pages/LoginPage.vue';
import DrawerListItem from '@/model/App/DrawerListItem';
import store from '@/store';
import Agent from '@/model/Agent';

@Component({
  components: { LoginPage },
})
export default class App extends Vue {
  public drawerHideShow: boolean = true;
  public drawerList: DrawerListItem[] = [];
  public searchClientString: string = '';
  public agents: Agent[] = [];
  public refreshKey: number = 0;

  private authenticated: boolean;
  constructor() {
    super();
    this.authenticated = false;
    this.drawerList.push(new DrawerListItem('Dashboard', 'dashboard', 'dashboard'));
    this.drawerList.push(new DrawerListItem('Add Client', 'account_box', 'addClient'));
    this.drawerList.push(new DrawerListItem('Theme Selector', 'palette', 'themeSelector'));
    this.drawerList.push(new DrawerListItem('Log Out', 'power_settings_new', 'login'));
  }

  get currentAgent() {
    return store.state.currentAgent;
  }
  set currentAgent(agent: Agent) {
    store.state.currentAgent = agent;
    this.$router.replace({ name: 'dashboard' });
    this.refreshKey++;
  }

  public getThemeAttr(attrName: string) {
    return store.state.theme.getThemeAttr(attrName);
  }

  public setAuthenticated() {
    this.authenticated = true;
    this.agents = store.state.agents;
    this.$router.replace({ name: 'dashboard' });
  }

  public backToDashboard() {
    this.$router.replace({ name: 'dashboard' });
  }

  public drawerClicked(redirectPageName: string) {
    this.$router.replace({ name: redirectPageName });
  }
  public searchClient() {
    if (this.searchClientString && this.searchClientString.length > 0) {
      this.$store.state.searchClientString = this.searchClientString;
      this.$router.replace({ name: 'searchClient' });
    }
  }
  private isLoginPage(): boolean {
    return this.$router.currentRoute.name === 'login' || this.$router.currentRoute.name === 'default';
  }
}
</script>
