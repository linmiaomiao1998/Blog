<template>
  <div>123456</div>
  <hr />
  <Button>1234</Button>
  <hr />
  <Switch v-model:value="switchValue" />
  <hr />

</template>

<script>
import { Button, Switch } from "neko-ui-vue3";
import "neko-ui-vue3/dist/lib/neko.css";
import"neko-ui-vue3/dist/lib/neko.js";
export default {
  components: {
    Button,
    Switch,
  },
  data() {
    return {
      switchValue: false,
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
