<template>
  <v-container fluid fill-height>
    <v-layout row fill-height justify-center>
      <v-flex sm12>
        <v-card fluid>
          <v-layout column align-center>
            <v-toolbar
              :dark="getThemeAttr('Toolbar1').isDark"
              :color="getThemeAttr('Toolbar1').color"
            >
              <v-toolbar-title>Asset Mix</v-toolbar-title>
            </v-toolbar>
            <v-flex>
              <GChart
                :key="redrawKey"
                v-if="chartData().length>1"
                type="PieChart"
                :data="chartData()"
                :options="chartOptions"
              ></GChart>
              <v-card flat v-if="chartData().length<=1" height="300">
                <v-layout fill-height column justify-center>
                  <v-icon class="fas fa-exclamation-triangle" x-large></v-icon>
                  <v-card-title>
                    <v-layout row justify-center>
                      <h3 class="subtitle">No Asset Mixes Available</h3>
                    </v-layout>
                  </v-card-title>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import RecentOrderRow from '@/model/Dashboard/RecentOrderRow';
import store from '@/store';

@Component({})
export default class TSAssetMixComponent extends Vue {
  public redrawKey = 0;
  @Prop() public dataModel: any;

  public chartOptions: any;

  constructor() {
    super();
  }

  public mounted() {
    this.setChartOptions();
    window.addEventListener('resize', this.handleResize);
  }

  public chartData() {
    const rv = [['Asset Class', 'Market Value']];
    let i = 0;
    for (const item of this.dataModel) {
      rv.push([item.AssetClass, item.MarketValue]);
      if (i++ > 6) {
        break;
      }
    }
    return rv;
  }

  public getThemeAttr(attrName: string) {
    return store.state.theme.getThemeAttr(attrName);
  }

  public handleResize() {
    this.redrawKey++;
    this.setChartOptions();
  }

  public setChartOptions() {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
      case 'sm': {
        this.chartOptions = {
          backgroundColor: { fill: 'transparent' },
          chartArea: { left: 5, top: 20, width: '80%', height: '80%' },
          height: 300,
          legend: 'none',
        };
        break;
      }
      default: {
        this.chartOptions = {
          backgroundColor: { fill: 'transparent' },
          chartArea: { left: 20, top: 20, width: '80%', height: '80%' },
          height: 300,
          legend: {
            position: 'right',
            alignment: 'center',
            textStyle: {
              color: this.getThemeAttr('AppDark') ? 'white' : 'black',
              fontSize: 12,
            },
          },
        };
        break;
      }
    }
  }
}
</script>
<style>
svg > g > g:last-child {
  pointer-events: none;
}
</style>
