<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pictures/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import HelloWorldComponent from '@/components/HelloWorldComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorldComponent,
  },
})
export default class HomePage extends Vue {}
</script>
