<template>
  <v-container fluid>
    <h1>Specify the client's contact information:</h1>
    <v-divider mb-2></v-divider>
    <v-layout column align-center>
      <v-flex mt-3 style="width:100%" v-for="(contact, index) in contactsModel" :key="index">
        <v-select
          prepend-icon="settings_cell"
          :items="responseModel.phoneTypes"
          item-text="description"
          item-value="code"
          label="Phone Type"
          box
          v-model="contactsModel[index].type"
        ></v-select>
        <v-layout>
          <v-flex xs3>
            <v-text-field
              prepend-icon="dialpad"
              box
              label="Route"
              v-model="contactsModel[index].route"
            ></v-text-field>
          </v-flex>
          <v-flex pl-3 xs6>
            <v-text-field box label="Number" v-model="contactsModel[index].No"></v-text-field>
          </v-flex>
          <v-flex pl-3 xs3>
            <v-text-field box label="Extension" v-model="contactsModel[index].extension"></v-text-field>
          </v-flex>
        </v-layout>
        <v-btn flat @click="mockData(index)" color="orange">Mock Data</v-btn>
        <v-btn
          flat
          color="error"
          :disabled="contactsModel.length===1"
          @click="removeContact(index)"
        >Remove</v-btn>
        <v-divider></v-divider>
      </v-flex>
    </v-layout>
    <v-layout justify-end>
      <v-btn outline @click="submitPrevToParent">prev</v-btn>
      <v-btn outline @click="submitUpdateToParent" color="warning">next</v-btn>
    </v-layout>
    <v-btn @click="addContact" flat color="success">Add</v-btn>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AddClientResponse from '@/model/AddClient/AddClientResponse';
import AddClientPhone from '@/model/AddClient/AddClientPhone';
@Component({})
export default class ACContactsComponent extends Vue {
  @Prop() public parentResponseModel: any;
  public responseModel: AddClientResponse;
  public contactsModel: AddClientPhone[] = [];
  constructor() {
    super();
    this.responseModel = this.parentResponseModel;
    this.contactsModel.push(new AddClientPhone());
  }

  public submitPrevToParent() {
    this.$emit('prev');
  }

  public submitUpdateToParent() {
    this.$emit('update', this.contactsModel);
  }
  public removeContact(index: number) {
    this.contactsModel.splice(index, 1);
  }
  public mockData(index: number) {
    this.contactsModel[index].route = '226';
    this.contactsModel[index].No = '4162987';
    this.contactsModel[index].extension = '3342';
  }
  public addContact() {
    this.contactsModel.push(new AddClientPhone());
  }
}
</script>

