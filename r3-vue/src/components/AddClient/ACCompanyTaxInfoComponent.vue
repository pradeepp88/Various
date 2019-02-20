<template>
  <v-container fluid>
    <v-form>
      <h1>Specify the following tax information:</h1>
      <v-divider mb-2></v-divider>
    </v-form>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AddClientResponse from '@/model/AddClient/AddClientResponse';
@Component({})
export default class ACCompanyTaxInfoComponent extends Vue {
  @Prop() public parentResponseModel: any;
  public responseModel: AddClientResponse;
  constructor() {
    super();
    this.responseModel = this.parentResponseModel;
  }
}
</script>

