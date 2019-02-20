<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title class="headline">Error</v-card-title>
      <v-card-text>{{errorMessage}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error darken-1" flat @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class LoadingDialog extends Vue {
  @Prop() public dialog: boolean = false;
  @Prop() public errorMessage: string = '';
}
</script>
</script>
