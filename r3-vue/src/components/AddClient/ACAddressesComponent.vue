<template>
  <v-container fluid>
    <h1>Specify the client's address:</h1>
    <v-divider mb-2></v-divider>
    <v-layout column align-center>
      <v-flex mt-3 style="width:100%" v-for="(address, index) in addressesModel" :key="index">
        <v-form ma-5>
          <v-select
            prepend-icon="work_outline"
            :items="responseModel.addressTypes"
            item-text="description"
            item-value="code"
            label="Address Type"
            box
            v-model="addressesModel[index].addressType"
          ></v-select>
          <v-layout>
            <v-flex>
              <v-select
                prepend-icon="map"
                :items="responseModel.countries"
                item-text="description"
                item-value="code"
                label="Country"
                box
                v-model="addressesModel[index].country"
              ></v-select>
            </v-flex>
            <v-flex ml-3>
              <v-select
                :items="responseModel.provinces"
                item-text="description"
                item-value="code"
                label="Province"
                box
                v-model="addressesModel[index].province"
              ></v-select>
            </v-flex>
            <v-flex ml-3>
              <v-text-field box label="City" v-model="addressesModel[index].city"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-text-field
                prepend-icon="location_on"
                box
                label="Address"
                v-model="addressesModel[index].address"
              ></v-text-field>
            </v-flex>
            <v-flex ml-3>
              <v-text-field box label="Postal Code" v-model="addressesModel[index].postalCode"></v-text-field>
            </v-flex>
          </v-layout>
        </v-form>

        <v-btn flat @click="mockData(index)" color="orange">Mock Data</v-btn>
        <v-btn
          flat
          color="error"
          :disabled="addressesModel.length===1"
          @click="removeAddress(index)"
        >Remove</v-btn>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
    <v-btn @click="addAddress" flat color="success">Add</v-btn>
    <v-layout justify-end>
      <v-btn outline @click="submitPrevToParent">prev</v-btn>
      <v-btn outline @click="submitUpdateToParent" color="warning">next</v-btn>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AddClientResponse from '@/model/AddClient/AddClientResponse';
import AddClientAddress from '@/model/AddClient/AddClientAddress';

@Component({})
export default class ACAddressesComponent extends Vue {
  @Prop() public parentResponseModel: any;
  public responseModel: AddClientResponse;
  public addressesModel: AddClientAddress[] = [];
  constructor() {
    super();
    this.responseModel = this.parentResponseModel;
    this.addressesModel.push(new AddClientAddress());
  }

  public submitPrevToParent() {
    this.$emit('prev');
  }

  public submitUpdateToParent() {
    for (let i = 0; i < this.addressesModel.length; i++) {
      this.addressesModel[i].defaultAddress = i === 0;
    }
    this.$emit('update', this.addressesModel);
  }

  public removeAddress(index: number) {
    this.addressesModel.splice(index, 1);
  }

  public addAddress() {
    this.addressesModel.push(new AddClientAddress());
  }

  public mockData(index: number) {
    for (const addressType of this.responseModel.addressTypes) {
      if (addressType.description === 'Work') {
        this.addressesModel[index].addressType = addressType.code;
        break;
      }
    }
    for (const country of this.responseModel.countries) {
      if (country.description === 'Canada') {
        this.addressesModel[index].country = country.code;
        break;
      }
    }
    for (const province of this.responseModel.provinces) {
      if (province.description === 'Ontario') {
        this.addressesModel[index].province = province.code;
        break;
      }
    }
    this.addressesModel[index].city = 'Toronto';
    this.addressesModel[index].address = '120 Test Street West';
    this.addressesModel[index].postalCode = 'T2Y1F7';
  }
}
</script>

