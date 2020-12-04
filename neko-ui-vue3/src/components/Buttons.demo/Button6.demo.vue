<demo>
其他特殊样式
</demo>
<template>
<div>
  <div>
    <Button other="gather">内发光</Button>
    <Button other="spread">外发光</Button>
    <Button other="roll">滚动</Button>
    <Button other="open">打开动作</Button>
  </div>
</div>
</template>

<script lang="ts">
import Button from "../Button.vue";
export default {
  components: {
    Button
  }
}
</script>