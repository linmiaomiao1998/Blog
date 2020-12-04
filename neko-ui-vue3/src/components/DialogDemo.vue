<template>
  <h1>Dialog页面</h1>
 <Demo :component="Dialog1Demo" />
<Demo :component="Dialog2Demo" />
12345
</template>

<script lang="ts">
 import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
  export default {
    components: {
     Demo
    },
    setup() {
      return {  Dialog1Demo,
      Dialog2Demo};
    },
  };
</script>

<style></style>
