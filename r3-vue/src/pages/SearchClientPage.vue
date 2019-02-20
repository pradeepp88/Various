<template>
  <v-container fluid>
    <!--<h1>Search Client - {{searchString()}}</h1>
    <v-divider class="mb-3"></v-divider>-->
    <v-toolbar :color="getThemeAttr('Toolbar4').color" :dark="getThemeAttr('Toolbar4').isDark">
      <v-toolbar-title>Search Client - {{searchString()}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table
      :loading="loading"
      :headers="headers"
      :items="searchResultModel"
      :rows-per-page-items="[12]"
    >
      <v-progress-linear slot="progress" :color="getThemeAttr('Toolbar4').color" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <tr @click="redirectToClientSummary(props.item.clientNumber)">
          <td>{{ props.item.clientName }}</td>
          <td>{{ props.item.clientNumber }}</td>
          <td>{{ numberToCurrency(props.item.gainLoss) }}</td>
          <td>{{ numberToCurrency(props.item.marketValue) }}</td>
        </tr>
      </template>
    </v-data-table>
    <LoadingDialog :loading="loading"></LoadingDialog>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import * as R3 from '@/model/R3';

import SearchClientRequest from '@/model/SearchClient/SearchClientRequest';
import SearchClientResultRow from '@/model/SearchClient/SearchClientResultRow';
import LoadingDialog from '@/components/LoadingDialog.vue';

import store from '@/store';
import HttpService from '@/services/HttpService';

@Component({ components: { LoadingDialog } })
export default class SearchClientPage extends Vue {
  public name: string = 'searchClient';
  public searchResultModel: SearchClientResultRow[] = [];
  public loading: boolean = true;
  public headers: any;

  private httpService: HttpService;

  constructor() {
    super();
    this.httpService = new HttpService();
    this.headers = [
      {
        text: 'Full Name',
        value: 'clientName',
      },
      {
        text: 'Client Number',
        value: 'clientNumber',
      },
      {
        text: 'Gain/Loss Amount',
        value: 'gainLoss',
      },
      {
        text: 'Market Value',
        value: 'marketValue',
      },
    ];
  }
  public mounted() {
    this.doSearch();
  }
  public redirectToClientSummary(clientId: number) {
    store.state.clientSummaryPageId = clientId;
    this.$router.replace({ name: 'clientSummary' });
  }
  public getThemeAttr(attrName: string) {
    return store.state.theme.getThemeAttr(attrName);
  }

  public doSearch() {
    this.loading = true;
    this.searchResultModel = [];
    this.httpService.postAsync('/api/ClientSearch', new SearchClientRequest(this.searchString())).then((dto) => {
      this.loading = false;
      for (const row of dto.details) {
        this.searchResultModel.push(
          new SearchClientResultRow(row.clientName, row.clientNumber, row.gainLoss, row.marketValue),
        );
      }
    });
  }

  @Watch('$store.state.searchClientString')
  public onSearchStringChanged(value: string, oldValue: string) {
    this.doSearch();
  }

  public searchString(): string {
    return this.$store.state.searchClientString;
  }
  public numberToCurrency(n: number): string {
    return '$' + n.toFixed(2);
  }
}
</script>
