<template>
  <v-form>
    <h1>Specify the client's details:</h1>
    <v-divider mb-2></v-divider>
    <v-select
      prepend-icon="school"
      :items="responseModel.titles"
      item-text="description"
      item-value="code"
      label="Title"
      box
      v-model="detailModel.title"
    ></v-select>
    <v-layout>
      <v-flex mr-3>
        <v-select
          prepend-icon="feedback"
          :items="['Male', 'Female']"
          label="Gender"
          box
          v-model="detailModel.gender"
        ></v-select>
      </v-flex>
      <v-flex>
        <v-select
          :items="['English', 'French']"
          label="Language"
          box
          v-model="detailModel.language"
        ></v-select>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex mr-3>
        <v-text-field prepend-icon="person" box label="First Name" v-model="detailModel.firstName"></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field box label="Middle Name" v-model="detailModel.middleName"></v-text-field>
      </v-flex>
      <v-flex ml-3>
        <v-text-field box label="Last Name" v-model="detailModel.lastName"></v-text-field>
      </v-flex>
    </v-layout>

    <v-text-field
      prepend-icon="tab_unselected"
      box
      label="Social Insurance Number"
      v-model="detailModel.SIN"
    ></v-text-field>

    <v-menu
      :close-on-content-click="false"
      v-model="menu"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      max-width="290px"
      min-width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="detailModel.DOB"
        label="Date of Birth"
        prepend-icon="cake"
        readonly
      ></v-text-field>
      <v-date-picker v-model="detailModel.DOB" no-title @input="menu = false"></v-date-picker>
    </v-menu>
    <v-text-field prepend-icon="email" box label="Email" v-model="detailModel.email"></v-text-field>
    <v-layout justify-end>
      <v-btn @click="detailModel.setMockData()" outline color="success">Mock Data</v-btn>
      <v-btn outline @click="submitUpdateToParent" color="warning">next</v-btn>
    </v-layout>
  </v-form>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AddClientPersonalDetail from '@/model/AddClient/AddClientPersonalDetail';
import AddClientResponse from '@/model/AddClient/AddClientResponse';
@Component({})
export default class ACPersonalDetailsComponent extends Vue {
  @Prop() public parentResponseModel: any;
  public responseModel: AddClientResponse;
  public date: string = new Date().toISOString().substr(0, 10);
  public menu: boolean = false;
  public detailModel: AddClientPersonalDetail = new AddClientPersonalDetail();
  constructor() {
    super();
    this.responseModel = this.parentResponseModel;
  }

  public submitUpdateToParent() {
    this.$emit('update', this.detailModel);
  }
}
</script>
