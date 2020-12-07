<template>
  <div id="app">
    <hr />
    <router-view />
    <hr />
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body {
  color: #b36f1d;
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:lighten(#e2cc92, 21%);
}
.clearfix::after
{
  content: '';
  display: block;
  clear: both;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#app{
  max-width: 500px;
  margin: 0 auto;
}


</style>

