<template>
  <v-container fill-height>
    <v-layout row fill-height justify-center>
      <v-flex sm12>
        <v-card fluid dark style="height: 100%">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Client Demographics</v-toolbar-title>
          </v-toolbar>
          <v-data-table
            :items="[]"
           dark></v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class ClientDemographicsComponent extends Vue {

}
</script>
