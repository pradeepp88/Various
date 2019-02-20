<template>
  <v-container fluid>
    <v-form>
      <h1>Specify the following tax information:</h1>
      <v-divider mb-2></v-divider>
      <v-switch
        :label="'US Person: ' + (usPersonModel.usPerson ? 'Yes' : 'No')"
        v-model="usPersonModel.usPerson"
      ></v-switch>
      <v-slide-y-transition>
        <div v-if="usPersonModel.usPerson">
          <v-layout>
            <v-flex xs6>
              <v-select
                prepend-icon="outlined_flag"
                :items="responseModel.countries"
                item-text="description"
                item-value="code"
                label="Country of Birth"
                box
                v-model="usPersonModel.countryOfBirth"
              ></v-select>
            </v-flex>
            <v-flex ml-3>
              <v-select
                :items="responseModel.FATCATypeClassification"
                item-text="description"
                item-value="code"
                label="US Classification"
                box
                v-model="usPersonModel.classification"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs4>
              <v-select
                prepend-icon="map"
                :items="responseModel.countries"
                item-text="description"
                item-value="code"
                label="Country of Birth"
                box
                v-model="usPersonModel.citizenCountry1"
              ></v-select>
            </v-flex>
            <v-flex xs4 ml-3>
              <v-select
                :items="responseModel.countries"
                item-text="description"
                item-value="code"
                label="Country of Birth"
                box
                v-model="usPersonModel.citizenCountry2"
              ></v-select>
            </v-flex>
            <v-flex xs4 ml-3>
              <v-select
                :items="responseModel.countries"
                item-text="description"
                item-value="code"
                label="Country of Birth"
                box
                v-model="usPersonModel.citizenCountry3"
              ></v-select>
            </v-flex>
          </v-layout>
        </div>
      </v-slide-y-transition>
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
import AddClientUsPersonDetail from '@/model/AddClient/AddClientUsPersonDetail';
@Component({})
export default class ACTaxInfoComponent extends Vue {
  @Prop() public parentResponseModel: any;
  public responseModel: AddClientResponse;
  public usPersonModel: AddClientUsPersonDetail = new AddClientUsPersonDetail();
  constructor() {
    super();
    this.responseModel = this.parentResponseModel;
  }
  public submitPrevToParent() {
    this.$emit('prev');
  }

  public submitUpdateToParent() {
    this.$emit('update', this.usPersonModel);
  }
  public mockData() {
    this.usPersonModel.usPerson = true;
    this.usPersonModel.countryOfBirth = this.responseModel.countries[0].code;
    this.usPersonModel.citizenCountry1 = this.responseModel.countries[1].code;
    this.usPersonModel.citizenCountry2 = this.responseModel.countries[2].code;
    this.usPersonModel.citizenCountry3 = this.responseModel.countries[3].code;
    this.usPersonModel.classification = this.responseModel.FATCATypeClassification[0].code;
  }
}
</script>

