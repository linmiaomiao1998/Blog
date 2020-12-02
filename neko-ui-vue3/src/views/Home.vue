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
      <div class="block"></div>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>认真地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-dengpao"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
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
  .features {
    margin: 64px auto;
    width: 400px;
    @media (min-width: 800px) {
      width: 800px;
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      > li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
          "icon title"
          "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }
        > h3 {
          grid-area: title;
          font-size: 28px;
        }
        > p {
          grid-area: text;
        }
      }
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
    clip-path: ellipse(80% 60% at 50% 40%);
  }
</style>
