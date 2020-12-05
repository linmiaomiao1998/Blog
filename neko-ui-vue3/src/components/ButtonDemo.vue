<template>
  <h1>Button 示例</h1>
  <div>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
    <Demo :component="Button6Demo" />
  </div>
  <div>
   <h1>Attributes</h1>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类别</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>theme</td>
        <td>常规使用</td>
        <td>string  </td>
        <td>button/link/text</td>
        <td>button</td>
      </tr>
       <tr>
        <td>size</td>
        <td>尺寸</td>
        <td>string</td>
        <td>small/normal/big</td>
        <td>normal</td>
      </tr>
      <tr>
        <td>level</td>
        <td>级别</td>
        <td>string</td>
        <td>main/normal/danger</td>
        <td>normal</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>禁止使用</td>
        <td>boolean</td>
        <td>false/true</td>
        <td>false</td>
      </tr>
          <tr>
        <td>loading</td>
        <td>加载中</td>
        <td>boolean</td>
        <td>false/true</td>
        <td>false</td>
      </tr>
       <tr>
        <td>other</td>
        <td>其他样式</td>
        <td>string</td>
        <td>grather/spread/roll/open</td>
        <td>--</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import Demo from "./Demo.vue";
  import Button1Demo from "../components/Buttons.demo/Button1.demo.vue";
  import Button2Demo from "../components/Buttons.demo/Button2.demo.vue";
  import Button3Demo from "../components/Buttons.demo/Button3.demo.vue";
  import Button4Demo from "../components/Buttons.demo/Button4.demo.vue";
  import Button5Demo from "../components/Buttons.demo/Button5.demo.vue";
  import Button6Demo from "../components/Buttons.demo/Button6.demo.vue";
  export default {
    components: { Demo },
    setup() {
      const onClick = () => {
        console.log("hi");
      };
      return {
        Button1Demo,
        Button2Demo,
        Button3Demo,
        Button4Demo,
        Button5Demo,
        Button6Demo,
      };
    },
  };
</script>

<style>
  .table {
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
