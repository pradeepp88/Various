<template>
  <v-container fluid>
    <v-form>
      <h1>Specify the client's bank details:</h1>
      <v-divider mb-2></v-divider>
      <v-switch
        :label="'US Person: ' + (bankInfoModel.linkBankInfo ? 'Yes' : 'No')"
        v-model="bankInfoModel.linkBankInfo"
      ></v-switch>
      <v-slide-y-transition>
        <div v-if="bankInfoModel.linkBankInfo">
          <v-layout>
            <v-flex xs3>
              <v-text-field
                prepend-icon="account_balance"
                box
                label="Bank Number"
                v-model="bankInfoModel.bankNo"
              ></v-text-field>
            </v-flex>
            <v-flex ml-3>
              <v-text-field box label="Transit Number" v-model="bankInfoModel.transitNo"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs3>
              <v-text-field
                prepend-icon="account_box"
                box
                label="Account Name"
                v-model="bankInfoModel.accountName"
              ></v-text-field>
            </v-flex>
            <v-flex ml-3>
              <v-text-field box label="Account Number" v-model="bankInfoModel.accountNo"></v-text-field>
            </v-flex>
          </v-layout>
          <v-select
            prepend-icon="attach_money"
            :items="responseModel.currencies"
            item-text="description"
            item-value="code"
            label="Currency"
            box
            v-model="bankInfoModel.currency"
          ></v-select>
          <v-text-field
            prepend-icon="description"
            box
            label="Description"
            v-model="bankInfoModel.description"
          ></v-text-field>
        </div>
      </v-slide-y-transition>
      <v-layout justify-end>
        <v-btn outline @click="mockData" color="success">Mock Data</v-btn>
        <v-btn outline @click="submitPrevToParent">prev</v-btn>
        <v-btn outline @click="submitUpdateToParent" color="orange">submit</v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AddClientResponse from '@/model/AddClient/AddClientResponse';
import AddClientBankInfo from '@/model/AddClient/AddClientBankInfo';
@Component({})
export default class ACBankInfoComponent extends Vue {
  @Prop() public parentResponseModel: any;
  public responseModel: AddClientResponse;
  public bankInfoModel: AddClientBankInfo = new AddClientBankInfo();

  constructor() {
    super();
    this.responseModel = this.parentResponseModel;
  }
  public submitPrevToParent() {
    this.$emit('prev');
  }

  public submitUpdateToParent() {
    this.$emit('update', this.bankInfoModel);
  }
  public mockData() {
    this.bankInfoModel.linkBankInfo = true;
    this.bankInfoModel.bankNo = '001';
    this.bankInfoModel.transitNo = '23866';
    this.bankInfoModel.accountName = 'R3Account';
    this.bankInfoModel.accountNo = '3491038761';
    this.bankInfoModel.description = 'R3 Bank Info Test Description';
    this.bankInfoModel.currency = this.responseModel.currencies[0].code;
  }
}
</script>

