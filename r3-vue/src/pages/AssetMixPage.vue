<template>
  <div>
    <AssetMix/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import AssetMix from '@/components/AssetMixComponent.vue';

@Component({
  components: {
    AssetMix,
  },
})
export default class AssetMixPage extends Vue {}
</script>
