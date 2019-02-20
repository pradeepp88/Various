<template>
  <v-container fluid>
    <v-layout row justify-center>
      <v-flex sm12>
        <v-card style="min-height:365px;" fluid>
          <v-layout column align-center fill-height>
            <v-toolbar :dark="getThemeAttr('Toolbar2').isDark"
              :color="getThemeAttr('Toolbar2').color">
              <v-toolbar-title>Recent Orders</v-toolbar-title>
            </v-toolbar>
            <v-flex>
              <div v-for="(row, index) in rows()" :key="index">
                <v-card v-if="index==tabModel-1" flat>
                  <v-card-title primary-title>
                    <div
                      class="title"
                    >{{row.dateTime.toLocaleDateString('en-GB', {month: 'short', day: 'numeric', year: 'numeric'})}}</div>
                  </v-card-title>
                  <v-card-text>
                    <span>{{row.message}}</span>
                  </v-card-text>
                </v-card>
              </div>
            </v-flex>
          </v-layout>
          <v-layout align-end fill-height justify-center>
            <v-pagination
              v-if="rows().length != 0"
              class="mt-5"
              v-model="tabModel"
              :length="rows().length"
              :total-visible="5"
            ></v-pagination>
          </v-layout>
          <v-card flat v-if="rows().length == 0" height="270">
            <v-layout fill-height column justify-center>
              <v-icon class="fas fa-exclamation-triangle" x-large></v-icon>
              <v-card-title>
                <v-layout row justify-center>
                  <h3 class="subtitle">No Recent Orders Available</h3>
                </v-layout>
              </v-card-title>
            </v-layout>
          </v-card>
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
export default class RecentOrdersComponent extends Vue {
  @Prop() public dataModel: any;
  public tabModel: number = 1;
  public rows(): RecentOrderRow[] {
    const rv: RecentOrderRow[] = [];
    if (this.dataModel != null) {
      for (const row of this.dataModel) {
        rv.push(new RecentOrderRow(row.modifiedDateTime, row.message));
      }
    }
    return rv;
  }
  public getThemeAttr(attrName: string) {
    return store.state.theme.getThemeAttr(attrName);
  }
}
</script>
