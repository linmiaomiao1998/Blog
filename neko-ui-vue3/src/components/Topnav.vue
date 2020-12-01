<template>
  <div class="topnav">
    <div class="logo">
    <svg class="icon" >
    <use xlink:href="#icon-jumao"></use>
</svg></div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script lang="ts">
  import { inject, Ref } from "vue";
  export default {
    setup() {
      const asideVisible = inject<Ref<boolean>>("asideVisible");
      const toggleMenu = () => {
        asideVisible.value = !asideVisible.value;
      };
      return { toggleMenu };
    },
  };
</script>

<style lang="scss" scope>
  .topnav {
  background: rgb(186,215,223);
background: linear-gradient(180deg, rgba(186,215,223,1) 15%,  rgba(186,215,223,1) 100%);
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    justify-content: center;
    align-items: center;
    > .logo {
      max-width: 6em;
      margin-right: auto;
      > svg {
          width: 32px;
          height: 32px;
        }
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li {
        margin: 0 1em;
      }
    }
    > .toggleAside {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: transparent;
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: inline-block;
        background: red;
      }
     
    }
  }
</style>
