<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
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
        <td>neko-tabs-nav-item</td>
        <td>tab页标签</td>
        <td>component</td>
        <td> Tabs/Tab</td>
        <td>Tabs</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Demo from "./Demo.vue";
  import Tabs1Demo from "./Tabs1.demo.vue";
  export default {
    components: {
      Demo,
    },
    setup() {
      return {
        Tabs1Demo,
      };
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
