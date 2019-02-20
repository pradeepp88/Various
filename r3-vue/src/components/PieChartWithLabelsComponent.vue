<template>
  <div style="height: 100%;">
    <!-- <% if (IsMobile)
        { %>
        <% if (this.ChartTitle.Length > 0)
        { %>
            <div class='chartTile fullTile tileBorder'>
         <% }  else { %>
            <div class='chartTile fullTile'>
         <% } %>
    <% } %>-->
    <div class="title-bar" id="chartTitleDiv">
      <p>{{chartTitle}}</p>
    </div>
    <div style="height: calc(100% - 20px);">
      <label
        id="lblChartDisclaimer"
        style="display: block; text-align: center;"
        v-hidden="false"
      >{{labeltest}}</label>

      <div
        id="chartContainer"
        runat="server"
        style="display: inline-block; position: relative; width: 100%; height: 93%;"
      >
        <canvas id="chartCanvas" class="pieChart">
          <asp:Literal runat="server" text="<%$ Resources:Resource, txtNoHTMLCanvasSupport%>"></asp:Literal>
        </canvas>
      </div>
    </div>
    <!-- <% if (IsMobile)
            { %>
        </div>
    <% } %>-->
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import * as R3 from '../model/R3';
import ChartVue from 'v-chart-plugin';

Vue.use(ChartVue);

@Component
export default class PieChartWithLabelsComponent extends Vue {
  @Provide() public chartTitle!: string;
  @Provide() public labeltest!: string;
  public mounted() {
    this.chartTitle = 'Asset Mix chart';
    this.labeltest = 'labelTest';
  }
}
</script>


