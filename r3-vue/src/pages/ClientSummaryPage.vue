<template>
  <v-container fluid>
    <v-toolbar color="success">
      <v-toolbar-title>Client Summary - {{getClientId()}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table mt-5 :items="rows" :rows-per-page-items="[10]" :headers="headers">
      <template slot="items" slot-scope="props">
        <tr>
          <td>{{props.item.accountNo}}</td>
          <td>{{props.item.accountType}}</td>
          <td>{{props.item.marketValue}}</td>
          <td>
            <span
              :class="{'red--text': props.item.gainLossAmt < 0, 'green--text': props.item.gainLossAmt > 0}"
              class="text--lighten-1"
            >{{formatGainLossAmt(props.item.gainLossAmt)}}</span>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop, Watch } from 'vue-property-decorator';
import * as R3 from '@/model/R3';
import store from '@/store';

import ClientSummaryRequest from '@/model/ClientSummary/ClientSummaryRequest';
import ClientSummaryRow from '@/model/ClientSummary/ClientSummaryRow';

@Component({})
export default class ClientSummaryPage extends Vue {
  public name: string = 'clientSummary';
  public responseData: any = null;
  public rows: ClientSummaryRow[] = [];
  public headers = [
    {
      text: 'Account Number',
      value: 'accountNumber',
    },
    {
      text: 'Account Type',
      value: 'accountType',
    },
    {
      text: 'Market Value',
      value: 'marketValue',
    },
    {
      text: 'Gain/Loss',
      value: 'gainLossAmt',
    },
  ];

  public getClientId() {
    return store.state.clientSummaryPageId;
  }

  public formatGainLossAmt(amt: number): string {
    return amt === 0 ? '$' + amt.toFixed(2) : amt > 0 ? '↑$' + amt.toFixed(2) : '↓$' + -amt.toFixed(2);
  }
  public mounted() {
    R3.postData('/api/ClientSummary', new ClientSummaryRequest(store.state.clientSummaryPageId)).then((dto) => {
      this.responseData = dto;
      for (const row of dto.PlanAccounts) {
        this.rows.push(
          new ClientSummaryRow(
            row.AccountId,
            row.AccountNumber,
            row.AccountType,
            row.CurrCode,
            row.GainLossAmt,
            row.GainLossPct,
            row.MarketValue,
          ),
        );
      }
    });
  }
}
</script>
