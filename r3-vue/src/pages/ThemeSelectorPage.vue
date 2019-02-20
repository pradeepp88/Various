<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex sm6 md4 v-for="theme in themes" :key="theme.Name">
        <v-card>
          <v-card-title primary-title>
            <div class="headline">{{theme.Name}}</div>
          </v-card-title>
          <v-divider class="mb-2"></v-divider>
          <v-layout class="text-md-center px-3 pb-3" row wrap>
            <v-flex md4>
              <v-card dark :color="theme.MainToolbar.color">
                <v-card-text>Main</v-card-text>
              </v-card>
            </v-flex>
            <v-flex md4>
              <v-card dark :color="theme.Toolbar1.color">
                <v-card-text>Toolbar 1</v-card-text>
              </v-card>
            </v-flex>
            <v-flex md4>
              <v-card dark :color="theme.Toolbar2.color">
                <v-card-text>Toolbar 2</v-card-text>
              </v-card>
            </v-flex>
            <v-flex md4>
              <v-card dark :color="theme.Toolbar3.color">
                <v-card-text>Toolbar 3</v-card-text>
              </v-card>
            </v-flex>
            <v-flex md4>
              <v-card dark :color="theme.Toolbar4.color">
                <v-card-text>Toolbar 4</v-card-text>
              </v-card>
            </v-flex>
            <v-flex md4>
              <v-card dark :color="theme.LoaderColor">
                <v-card-text>loader</v-card-text>
              </v-card>
            </v-flex>
            <!-- <v-flex md4>
              <v-card
                :dark="!determineDark(theme.ToolbarSpecialColor)"
                :light="determineDark(theme.ToolbarSpecialColor)"
                :color="theme.ToolbarSpecialColor"
              >
                <v-card-text>Special</v-card-text>
              </v-card>
            </v-flex> -->
          </v-layout>
          <v-divider></v-divider>
          <v-card-actions class="pa-3">
            <v-spacer></v-spacer>
            <v-btn flat color="success" @click="applyTheme(theme)">Apply</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import * as R3 from '@/model/R3';
import store from '@/store';
import HttpService from '@/services/HttpService';
import Theme from '@/model/ThemeSelector/Theme';
import ThemeUnit from '@/model/ThemeSelector/ThemeUnit';

@Component({})
export default class ThemeSelectorPage extends Vue {
  public themes: Theme[] = [];
  public constructor() {
    super();
    this.themes.push(new Theme());
    this.themes.push(
      new Theme({
        Name: 'RDigital',
        AppDark: false,
        MainToolbar: new ThemeUnit({ isDark: true, color: 'primary' }),
        Toolbar1: new ThemeUnit({ isDark: true, color: 'primary' }),
        Toolbar2: new ThemeUnit({ isDark: true, color: 'primary' }),
        Toolbar3: new ThemeUnit({ isDark: true, color: 'primary' }),
        Toolbar4: new ThemeUnit({ isDark: true, color: 'success' }),
        ToolbarSpecialColor: 'white',
        LoaderColor: 'primary lighten-2',
      }),
    );
    this.themes.push(
      new Theme({
        Name: 'NBC',
        AppDark: false,
        MainToolbar: new ThemeUnit({ isDark: true, color: 'error darken-1' }),
        Toolbar1: new ThemeUnit({ isDark: true, color: 'error darken-1' }),
        Toolbar2: new ThemeUnit({ isDark: true, color: 'error darken-1' }),
        Toolbar3: new ThemeUnit({ isDark: true, color: 'error darken-1' }),
        Toolbar4: new ThemeUnit({ isDark: true, color: 'orange' }),
        ToolbarSpecialColor: 'white',
        LoaderColor: 'error lighten-2',
      }),
    );
  }

  public determineDark(c: string) {
    var c = c.substring(1); // strip #
    var rgb = parseInt(c, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 40) {
      return true;
    }
    return false;
  }

  public applyTheme(theme: Theme) {
    this.$vuetify.theme.primary = theme.Primary!;
    this.$vuetify.theme.secondary = theme.Secondary!;
    this.$vuetify.theme.accent = theme.Accent!;
    this.$vuetify.theme.info = theme.Info!;
    this.$vuetify.theme.error = theme.Error!;
    this.$vuetify.theme.success = theme.Success!;
    this.$vuetify.theme.warning = theme.Warning!;
    store.state.theme = theme;
  }
}
</script>
