<template>
  <div>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
    <Demo :component="Button6Demo" />
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

<style></style>
