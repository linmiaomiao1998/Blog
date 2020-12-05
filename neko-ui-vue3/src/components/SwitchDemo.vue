<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
  <h1>Attributes</h1>
  <div>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类别</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>value</td>
        <td>是否选中</td>
        <td>boolean</td>
        <td>false/true</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
  import { ref } from "vue";
  import Switch1Demo from "./Switch1.demo.vue";
  import Switch2Demo from "./Switch2.demo.vue";
  import Demo from "./Demo.vue";
  export default {
    components: { Switch1Demo, Switch2Demo, Demo },
    setup() {
      return { Switch1Demo, Switch2Demo };
    },
  };
</script>

<style lang="scss" scoped>
  $border-color: #d9d9d9;
  .demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }
    &-component {
      padding: 16px;
    }
    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
    }
    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
      > pre {
        line-height: 1.1;
        font-family: Consolas, "Courier New", Courier, monospace;
        margin: 0;
      }
    }
    table {
      text-align: left;
      border-collapse: collapse;
      border: 1px #ddffff solid;
      width: 100%;
    }
    table tr:hover > td {
      background-color: #bad7df;
    }
    th,
    td {
      border-bottom: 1px #bdbabd solid;
      text-align: left;
      font-size: 16px;
      line-height: 30px;
    }
    th {
      background: #bad7df;
    }
  }
</style>
