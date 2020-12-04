<template>
  <button class="neko-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="neko-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
  import { computed } from "vue";
  export default {
    props: {
      theme: {
        type: String,
        default: "button",
      },
      size: {
        type: String,
        default: "normal",
      },
      level: {
        type: String,
        default: "normal",
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      other: {
        type: String,
        default: "normal",
      },
    },
    setup(props) {
      const { theme, size, level, other } = props;
      const classes = computed(() => {
        return {
          [`neko-theme-${theme}`]: theme,
          [`neko-size-${size}`]: size,
          [`neko-level-${level}`]: level,
          [`neko-other-${other}`]: other,
        };
      });
      return { classes };
    },
  };
</script>

<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  $grey: grey;
  $green: #2ecc71;
  $red: #e74c3c;
  $yellow: #F9A102;
  $purple: #8e44ad;
  $turquoise: #1abc9c;
  .neko-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    & + & {
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }
    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
    &.neko-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;
      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }
    &.neko-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;
      &:hover,
      &:focus {
        background: darken(white, 5%);
      }
    }
    &.neko-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }
    &.neko-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
    &.neko-theme-button {
      &.neko-level-main {
        background: $blue;
        color: white;
        border-color: $blue;
        &:hover,
        &:focus {
          background: darken($blue, 10%);
          border-color: darken($blue, 10%);
        }
      }
      &.neko-level-danger {
        font-weight:bold;
        background: black;
        border-color: black;
        color:$yellow;
        &:hover,
        &:focus {
          background: darken($yellow, 10%);
          border-color: darken($yellow, 10%);
        }
      }
    }
    &.neko-theme-link {
      &.neko-level-danger {
        font-weight:bold;
        color: $yellow;
        &:hover,
        &:focus {
          color: darken($yellow, 10%);
        }
      }
    }
    &.neko-theme-text {
      &.neko-level-main {
        color: $blue;
        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }
      &.neko-level-danger {
        font-weight:bold;
        color: $yellow;
        &:hover,
        &:focus {
          color: darken($yellow, 10%);
        }
      }
    }

    &.neko-other-gather {
      transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
      &:hover {
        box-shadow: 0 0 40px 40px $blue inset;
        color: white;
      }
    }
    &.neko-other-spread {
      border-color: $blue;
      color: white;
      box-shadow: 0 0 40px 40px $blue inset, 0 0 0 0 $blue;
      transition: all 150ms ease-in-out;

      &:hover {
        box-shadow: 0 0 10px 0 $blue inset, 0 0 10px 4px $blue;
        color: $blue;
      }
    }
    &.neko-other-roll {
      border-color: $turquoise;
      color: #fff;
      background: {
        image: linear-gradient(
          to right,
          transparentize($turquoise, 0.4),
          transparentize($turquoise, 0.4) 5%,
          $turquoise 5%,
          $turquoise 10%,
          transparentize($turquoise, 0.4) 10%,
          transparentize($turquoise, 0.4) 15%,
          $turquoise 15%,
          $turquoise 20%,
          transparentize($turquoise, 0.4) 20%,
          transparentize($turquoise, 0.4) 25%,
          $turquoise 25%,
          $turquoise 30%,
          transparentize($turquoise, 0.4) 30%,
          transparentize($turquoise, 0.4) 35%,
          $turquoise 35%,
          $turquoise 40%,
          transparentize($turquoise, 0.4) 40%,
          transparentize($turquoise, 0.4) 45%,
          $turquoise 45%,
          $turquoise 50%,
          transparentize($turquoise, 0.4) 50%,
          transparentize($turquoise, 0.4) 55%,
          $turquoise 55%,
          $turquoise 60%,
          transparentize($turquoise, 0.4) 60%,
          transparentize($turquoise, 0.4) 65%,
          $turquoise 65%,
          $turquoise 70%,
          transparentize($turquoise, 0.4) 70%,
          transparentize($turquoise, 0.4) 75%,
          $turquoise 75%,
          $turquoise 80%,
          transparentize($turquoise, 0.4) 80%,
          transparentize($turquoise, 0.4) 85%,
          $turquoise 85%,
          $turquoise 90%,
          transparentize($turquoise, 0.4) 90%,
          transparentize($turquoise, 0.4) 95%,
          $turquoise 95%,
          $turquoise 100%
        );
        position: 0 0;
        size: 100%;
      }
      transition: background 300ms ease-in-out;

      &:hover {
        background-position: 100px;
      }
    }
    &.neko-other-open {
      border-color: $purple;
      // border: 0;
      border-radius: 0;
      color: $purple;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: color 150ms ease-in-out;

      &:after {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 100%;
        background: $purple;
        z-index: -1;
        transition: width 150ms ease-in-out;
      }

      &:hover {
        color: #fff;
        &:after {
          width: 110%;
        }
      }
    }
    &.neko-theme-button {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
        &:hover {
          border-color: $grey;
        }
      }
    }
    &.neko-theme-link,
    &.neko-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }
    > .neko-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: neko-spin 1s infinite linear;
    }
  }
  @keyframes neko-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
