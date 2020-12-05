<template>
  <div>
    <div class="neko-tabs">
      <div class="neko-tabs-nav" ref="container">
        <div
          class="neko-tabs-nav-item"
          v-for="(t, index) in titles"
          :ref="
            (el) => {
              if ( t === selected ) selectedItems = el;
            }
          "
          @click="select(t)"
          :class="{ selected: t === selected }"
          :key="index"
        >
          {{ t }}
        </div>
        <div class="neko-tabs-nav-indicator" ref="indicator"></div>
      </div>
      <div class="neko-tabs-content">
        <component
          class="neko-tabs-content-item"
          :class="{ selected: c.props.title === selected }"
          v-for="(c, index) in defaults"
          :is="c"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Tab from "./Tab.vue";
  import { computed, ref, onMounted, onUpdated } from "vue";
  export default {
    props: {
      selected: {
        type: String,
      },
    },
    setup(props, context) {
      const selectedItems = ref<HTMLDivElement>(null);
      const indicator = ref<HTMLDivElement>(null);
      const container = ref<HTMLDivElement>(null);
      const x = () => {
        
        const { width } = selectedItems.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItems.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      };
      onMounted(x);
      onUpdated(x);
      
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type!== Tab) {
          throw new Error("Tab组件必须是tab");
        }
      });
      const current = computed(() => {
        console.log("重新 return");
        return defaults.filter((tag) => {
          return tag.props.title === props.selected;
        })[0];
      });
      const titles = defaults.map((tag) => {
        return tag.props.title;
      });
      const select = (title: string) => {
        context.emit("update:selected", title);
      };
      return {
        defaults,
        titles,
        select,
        selectedItems,
        indicator,
        container
      };
    },
  };
</script>

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .neko-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;
      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        &.selected {
          color: $blue;
        }
      }

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
      }
    }
    &-content {
      padding: 8px 0;
      &-item {
        display: none;
        &.selected {
          display: block;
        }
      }
    }
  }
</style>
