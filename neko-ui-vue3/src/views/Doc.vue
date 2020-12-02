<template>
  <div>
    <Topnav />
    <div class="layout">
      <Topnav class="nav" />
      <div class="content">
        <aside v-if="asideVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </aside>
        <main>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from "../components/Topnav.vue";
  import { inject, Ref } from "vue";

  export default {
    components: { Topnav },
    setup() {
      const asideVisible = inject<Ref<boolean>>("asideVisible");
      return { asideVisible };
    },
  };
</script>

<style lang="scss" scoped>
  .router-link-active {
    margin: 0;
    font-family: helvetica, sans-serif;
    font-weight: bold;
    color: #BAD7DF;
    /*background-color: #F0CC82;
    
            /*text-shadow: 1px 1px white,-1px -1px #333;*/
    /*text-shadow: -1px -1px white,1px 1px #333;*/
    // text-shadow: -1px 0 #6a3f40, 1px 0#6A3F40, 0 1px#6A3F40, 0 -1px #6a3f40;
    animation: selectedSlide 0.25s;
  }
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
      flex-shrink: 0;
    }
    > .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }
  .content {
    display: flex;
    > aside {
      flex-shrink: 0;
      background: lightblue;
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }
  aside {
    padding: 16px 0;
    background: white;
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    z-index: 10;
    > h2 {
      margin-bottom: 4px;
      padding: 0 16px;
    }
    > ol {
      > li {
        > a {
          display: block;
          padding: 4px 16px;
          text-decoration: none;
        }
        .router-link-active {
          background: white;
        }
      }
    }
    main {
      overflow: auto;
    }
  }
</style>
