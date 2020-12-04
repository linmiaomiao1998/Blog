<template>
  <div>Dialog页面</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :OnClickOverlay="false">
    <template v-slot:content>
      <div>hi</div>
    </template>
    <template v-slot:title>
    <div>标题</div>
    </template>
  </Dialog>
  <h2>示例2</h2>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
  import Dialog from "../lib/Dialog.vue";
  import { ref, h } from "vue";
  import Button from "../components/Button.vue";
  import {openDialog} from '../lib/openDialog';
  export default {
    components: {
      Dialog,
      Button,
    },
    setup() {
      const x = ref(false);
      const toggle = () => {
        x.value = !x.value;
      };
      const showDialog=()=>{
        openDialog({
          title:h('strong',{},'标题'),
          content:'你好',
          ok(){
            console.log('ok')
          },
          cancel(){
             console.log('cancel')
          }
        });
      }
      return { x, toggle ,showDialog};
    },
  };
</script>

<style></style>
