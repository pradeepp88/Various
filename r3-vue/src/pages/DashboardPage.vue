<template>
  <v-container fill-height fluid>
    <v-layout fill-height row wrap>
      <v-flex sm12 md5>
        <v-layout fill-height column>
          <v-flex>
            <TSAssetMixComponent :data-model="dataModel.AssetMix">></TSAssetMixComponent>
          </v-flex>
          <v-flex>
            <RecentOrdersComponent :dataModel="dataModel.RecentOrders"></RecentOrdersComponent>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex sm12 md7>
        <TopTenClientComponent :dataModel="dataModel.ClientSummaries"></TopTenClientComponent>
      </v-flex>
      <LoadingDialog :loading="loading"></LoadingDialog>
    </v-layout>
  </v-container>
</template>
<script lang='ts'>
import Component from 'vue-class-component';
import { Vue, Prop, Watch } from 'vue-property-decorator';
import * as R3 from '@/model/R3';
import DashboardPageRequest from '@/model/Dashboard/DashboardPageRequest';

import TopTenClientComponent from '@/components/TopTenClientComponent.vue';
import ClientDemographicsComponent from '@/components/ClientDemographicsComponent.vue';
import RecentOrdersComponent from '@/components/RecentOrdersComponent.vue';
import TSAssetMixComponent from '@/components/TSAssetMixComponent.vue';

import HttpService from '@/services/HttpService';

import LoadingDialog from '@/components/LoadingDialog.vue';
@Component({
  components: {
    TopTenClientComponent,
    ClientDemographicsComponent,
    RecentOrdersComponent,
    TSAssetMixComponent,
    LoadingDialog,
  },
})
export default class DashboardPage extends Vue {
  public name: string = 'dashboard';
  public loading: boolean = false;
  public dataModel: any = {
    ClientSummaries: null,
    RecentOrders: null,
    AssetMix: null,
  };
  private httpService: HttpService;

  constructor() {
    super();
    this.httpService = new HttpService();
  }

  public mounted() {
    this.loading = true;
    this.httpService.postAsync('/api/Dashboard', new DashboardPageRequest()).then((dto) => {
      this.loading = false;
      this.dataModel.ClientSummaries = dto.ClientSummaries;
      this.dataModel.RecentOrders = dto.RecentOrders;
      this.dataModel.AssetMix = dto.AssetMixes;
    });
  }
}
</script>

