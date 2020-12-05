<template>
  <h1>Model页面</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
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
        <td>visiable</td>
        <td>是否展示</td>
        <td>boolean</td>
        <td>true/false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>ok</td>
        <td>确认触发函数</td>
        <td>function</td>
        <td>()=>{}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>cancel</td>
        <td>取消触发函数</td>
        <td>function</td>
        <td>()=>{}</td>
        <td>--</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
  import Demo from "./Demo.vue";
  import Dialog1Demo from "./Dialog1.demo.vue";
  import Dialog2Demo from "./Dialog2.demo.vue";

  export default {
    components: {
      Demo,
    },
    setup() {
      return { Dialog1Demo, Dialog2Demo };
    },
  };
</script>

<style>


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
</style>
