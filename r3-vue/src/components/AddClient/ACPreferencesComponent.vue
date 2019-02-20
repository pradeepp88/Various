<template>
  <v-container fluid>
    <v-form>
      <h1>Specify the client's preferences:</h1>
      <v-divider mb-2></v-divider>
      <v-select
        prepend-icon="attach_money"
        :items="responseModel.currencies"
        item-text="description"
        item-value="code"
        label="Currency Preference"
        box
        v-model="preferencesModel.currencyPreference"
      ></v-select>
      <v-select
        prepend-icon="class"
        :items="responseModel.clientClasses"
        item-text="description"
        item-value="code"
        label="Client Class Preference"
        box
        v-model="preferencesModel.clientClassPreference"
      ></v-select>
      <v-layout justify-end>
        <v-btn outline @click="mockData" color="success">Mock Data</v-btn>
        <v-btn outline @click="submitPrevToParent">prev</v-btn>
        <v-btn outline @click="submitUpdateToParent" color="warning">next</v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AddClientResponse from '@/model/AddClient/AddClientResponse';
import AddClientPreferences from '@/model/AddClient/AddClientPreferences';

@Component({})
export default class ACPreferencesComponent extends Vue {
  @Prop() public parentResponseModel: any;
  public responseModel: AddClientResponse;
  public preferencesModel: AddClientPreferences = new AddClientPreferences();

  constructor() {
    super();
    this.responseModel = this.parentResponseModel;
  }

  public submitPrevToParent() {
    this.$emit('prev');
  }

  public submitUpdateToParent() {
    this.$emit('update', this.preferencesModel);
  }
  public mockData() {
    for (const currency of this.responseModel.currencies) {
      if (currency.description === 'Canadian Dollar') {
        this.preferencesModel.currencyPreference = currency.code;
        break;
      }
    }
    for (const clientClass of this.responseModel.clientClasses) {
      if (clientClass.description === 'Normal') {
        this.preferencesModel.clientClassPreference = clientClass.code;
        break;
      }
    }
  }
}
</script>
