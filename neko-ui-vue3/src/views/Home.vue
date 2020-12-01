<template>
  <div>
    <div class="topnavandbanner">
      <Topnav />
      <div class="banner">
        <h1>neko UI</h1>
        <h2>一个随意的UI框架</h2>
        <p class="action">
          <a href=" ">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
  <svg class="icon">
    <use xlink:href="#icon-vue"></use>
  </svg>
    <svg class="icon">
    <use xlink:href="#icon-ts"></use>
  </svg>
    <svg class="icon">
    <use xlink:href="#icon-dengpao"></use>
  </svg>

  </div>
  
</template>

<script lang="ts">
  import Topnav from "../components/Topnav.vue";

  export default {
    components: { Topnav },
  };
</script>

<style lang="scss" scoped>
  $blue: #fcbeaf;
  $border-radius: 12px;
  .features{
    > svg{
      width: 64px;
      height: 64px;
    }
  }
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > .actions {
      padding: 8px 0;
    }
    a {
      margin: 0 8px;
      background: $blue;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
    }
    &:hover {
      text-decoration: none;
    }
  }
  .topnavandbanner {
    background: rgb(186, 215, 223);
    background: linear-gradient(
      180deg,
      rgba(186, 215, 223, 1) 15%,
      rgba(255, 226, 226, 1) 100%
    );
  }
</style>
