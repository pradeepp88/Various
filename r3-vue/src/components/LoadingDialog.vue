<template>
  <v-dialog
    v-model="loading"
    persistent
    no-click-animation
    content
    transition="none"
    content-class="centered-dialog"
  >
    <v-container fill-height>
      <v-layout row justify-center align-center>
        <v-progress-circular indeterminate :size="70" :width="7" :color="getThemeAttr('LoaderColor')"></v-progress-circular>
      </v-layout>
    </v-container>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component({})
export default class LoadingDialog extends Vue {
  @Prop() public readonly loading: boolean = false;
  public getThemeAttr(attrName: string) {
    return store.state.theme.getThemeAttr(attrName);
  }
}
</script>
<style>
.dialog.centered-dialog,
.v-dialog.centered-dialog {
  background: #282c2dad;
  box-shadow: none;
  border-radius: 6px;
  width: auto;
  color: whitesmoke;
}
</style>
