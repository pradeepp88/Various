<template>
  <div>
    <div id="divAssetMix">
      <h1 align="center">Asset Mix</h1>
    </div>
    <PieChart/>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as R3 from '../model/R3';
import PieChart from '@/components/PieChartWithLabelsComponent.vue';

@Component({
  components: {
    PieChart,
  },
})
export default class AssetMixComponent extends Vue {
  public ajax: string = '';
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
h1 {
  height: 100%;
}
</style>
