<template>
  <v-container fluid fill-height>
    <v-layout row fill-height justify-center>
      <v-flex sm12>
        <v-card  fluid style="height: 100%">
          <v-toolbar :dark="getThemeAttr('Toolbar3').isDark"
              :color="getThemeAttr('Toolbar3').color" >
            <v-toolbar-title>Top Ten Clients</v-toolbar-title>
          </v-toolbar>
          <v-data-table
            color="primary"
            expand
            :headers="headers"
            :items="rows()"
            :rows-per-page-items="[10]"
            fill-height
          >
            <template slot="items" slot-scope="props">
              <tr @click="redirectToClientSummary(props.item.id)">
                <td>{{ (props.item.firstName ? props.item.firstName : '') + ' ' + (props.item.lastName ? props.item.lastName : '') }}</td>
                <td>{{props.item.id}}</td>
                <td>{{ props.item.marketValue }}</td>
                <td>
                  <v-layout column align-center>
                    <v-flex>{{ props.item.gainLoss }}</v-flex>
                    <v-flex>
                      <span
                        :class="{'red--text': props.item.gainLossP < 0, 'green--text': props.item.gainLossP > 0}"
                        class="text--lighten-1"
                      >{{percentageFormat(props.item.gainLossP)}}</span>
                    </v-flex>
                  </v-layout>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import TopTenClientRow from '@/model/Dashboard/TopTenClientRow';
import Agent from '@/model/Agent';
import store from '@/store';

@Component({})
export default class TopTenClientComponent extends Vue {
  @Prop() public dataModel: any;
  public headers: object[] = [];
  constructor() {
    super();
    this.headers = [
      {
        text: 'Full Name',
        value: 'firstName',
      },
      {
        text: 'Client Number',
        value: 'id',
      },
      {
        text: 'Market Value',
        value: 'marketValue',
      },
      {
        text: 'Gain/Loss Amount',
        value: 'gainLoss',
      },
    ];
  }

  public getThemeAttr(attrName: string) {
    return store.state.theme.getThemeAttr(attrName);
  }

  public redirectToClientSummary(clientId: number) {
    console.log(clientId);
    store.state.clientSummaryPageId = clientId;
    this.$router.replace({ name: 'clientSummary' });
  }

  public percentageFormat(p: number): string {
    return p < 0 ? '↓' + (-p).toFixed(2) : p > 0 ? '↑' + p.toFixed(2) : p.toFixed(2);
  }

  public rows(): TopTenClientRow[] {
    const rv: TopTenClientRow[] = [];
    if (this.dataModel != null) {
      for (const row of this.dataModel) {
        rv.push(
          new TopTenClientRow(
            row.ClientId,
            row.FirstName,
            row.LastName,
            row.ElectronicAddress,
            row.PhoneNumber,
            row.MarketValue,
            row.GainLossAmt,
            row.GainLossPct,
          ),
        );
      }
    }
    return rv;
  }
}
</script>
