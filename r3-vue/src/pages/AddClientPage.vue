<template>
  <v-container fill-height fluid>
    <v-layout v-if="!success" justify-center>
      <v-flex lg8 md12>
        <v-tabs id="AddClientTab" v-model="tabModel">
          <v-tab disabled></v-tab>
          <v-tab disabled></v-tab>
          <v-tab disabled></v-tab>
          <v-tab disabled></v-tab>
          <v-tab disabled></v-tab>
          <v-tab disabled></v-tab>
          <v-tab disabled></v-tab>
          <v-tab-item>
            <ACPersonalDetailsComponent
              @update="submitPersonalDetail"
              :parentResponseModel="responseModel"
            ></ACPersonalDetailsComponent>
          </v-tab-item>
          <v-tab-item>
            <ACPreferencesComponent
              @update="submitPreferences"
              @prev="submitPrev"
              :parentResponseModel="responseModel"
            ></ACPreferencesComponent>
          </v-tab-item>
          <v-tab-item>
            <ACAddressesComponent
              @update="submitAddresses"
              @prev="submitPrev"
              :parentResponseModel="responseModel"
            ></ACAddressesComponent>
          </v-tab-item>
          <v-tab-item>
            <ACContactsComponent
              @update="submitContacts"
              @prev="submitPrev"
              :parentResponseModel="responseModel"
            ></ACContactsComponent>
          </v-tab-item>
          <v-tab-item>
            <ACTaxInfoComponent
              @update="submitTaxInfo"
              @prev="submitPrev"
              :parentResponseModel="responseModel"
            ></ACTaxInfoComponent>
          </v-tab-item>
          <v-tab-item>
            <ACCompanyTaxInfoComponent
              @update="submitCompanyTaxInfo"
              @prev="submitPrev"
              :parentResponseModel="responseModel"
            ></ACCompanyTaxInfoComponent>
          </v-tab-item>
          <v-tab-item>
            <ACBankInfoComponent
              @update="submitBankInfo"
              @prev="submitPrev"
              :parentResponseModel="responseModel"
            ></ACBankInfoComponent>
          </v-tab-item>
        </v-tabs>
      </v-flex>
      <LoadingDialog :loading="loading"></LoadingDialog>
      <ErrorDialog :dialog="error" :errorMessage="errorMessage"></ErrorDialog>
    </v-layout>
    <v-layout column justify-center fill-height align-center v-if="success">
      <v-icon class="fas fa-paper-plane" large></v-icon>
      <h1>Add Client Successful!</h1>
      <v-btn @click="backToDashboard" outline color="success" dark>Back to Dashboard
        <v-icon dark right>check_circle</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as R3 from '@/model/R3';
import AddClientRequest from '@/model/AddClient/AddClientRequest';
import AddClientResponse from '@/model/AddClient/AddClientResponse';
import AddClientPersonalDetail from '@/model/AddClient/AddClientPersonalDetail';
import AddClientPreferences from '@/model/AddClient/AddClientPreferences';
import AddClientAddress from '@/model/AddClient/AddClientAddress';

import ACPersonalDetailsComponent from '@/components/AddClient/ACPersonalDetailsComponent.vue';
import ACPreferencesComponent from '@/components/AddClient/ACPreferencesComponent.vue';
import ACAddressesComponent from '@/components/AddClient/ACAddressesComponent.vue';
import ACContactsComponent from '@/components/AddClient/ACContactsComponent.vue';
import ACTaxInfoComponent from '@/components/AddClient/ACTaxInfoComponent.vue';
import ACCompanyTaxInfoComponent from '@/components/AddClient/ACCompanyTaxInfoComponent.vue';
import ACBankInfoComponent from '@/components/AddClient/ACBankInfoComponent.vue';
import AddClientPhone from '@/model/AddClient/AddClientPhone';
import AddClientUsPersonDetail from '@/model/AddClient/AddClientUsPersonDetail';
import AddClientBankInfo from '@/model/AddClient/AddClientBankInfo';

import LoadingDialog from '@/components/LoadingDialog.vue';
import ErrorDialog from '@/components/ErrorDialog.vue';

@Component({
  components: {
    ACPersonalDetailsComponent,
    ACPreferencesComponent,
    ACAddressesComponent,
    ACContactsComponent,
    ACTaxInfoComponent,
    ACCompanyTaxInfoComponent,
    ACBankInfoComponent,
    LoadingDialog,
    ErrorDialog,
  },
})
export default class AddClientPage extends Vue {
  public responseModel: AddClientResponse = new AddClientResponse();
  public tabModel: number = 0;
  public loading: boolean = false;
  public error: boolean = false;
  public success = false;
  public errorMessage: string = '';
  public navigator: string[] = [
    'addClientDetails',
    'addClientPreferences',
    'addClientAddresses',
    'addClientContacts',
    'addClientTaxInfo',
    'addClientCompanyTaxInfo',
    'addClientBankInfo',
  ];
  public request: AddClientRequest = new AddClientRequest();

  public mounted() {
    this.postData('init');
  }

  public backToDashboard() {
    this.$emit('backToDashboard');
  }

  public submitPrev() {
    this.postData('prev');
  }

  public submitPersonalDetail(data: AddClientPersonalDetail) {
    this.request.isEnterprise = false;
    this.request.Details = data;
    this.postData('update');
  }

  public submitPreferences(data: AddClientPreferences) {
    this.request.preferences = data;
    this.postData('update');
  }

  public submitAddresses(data: AddClientAddress[]) {
    this.request.addresses = data;
    this.postData('update');
  }

  public submitContacts(data: AddClientPhone[]) {
    this.request.Phones = data;
    this.postData('update');
  }
  public submitTaxInfo(data: AddClientUsPersonDetail) {
    this.request.usPersonDetail = data;
    this.postData('update');
  }
  public submitCompanyTaxInfo(data: any) {}
  public submitBankInfo(data: AddClientBankInfo) {
    this.request.bankInfo = data;
    this.postData('submit');
  }

  private postData(postType: string) {
    this.request.postType = postType;
    this.request.currentForm = this.navigator[this.tabModel];
    this.request.workflowId = this.responseModel.workflowId;
    this.request.rowVer = this.responseModel.rowVer;
    this.request.moduleId = this.responseModel.moduleId;

    this.loading = true;

    R3.postData('/api/AddClient', this.request).then((dto) => {
      this.loading = false;
      if (dto.hasError) {
        this.error = true;
        console.log(dto);
      } else if (postType === 'submit') {
        this.success = true;
      } else {
        this.responseModel.updateResponse(dto);
        this.tabModel = this.navigator.indexOf(this.responseModel.formToShow);
      }
    });
  }
}
</script>
<style>
#AddClientTab .v-tabs__container {
  display: none !important;
}
</style>
