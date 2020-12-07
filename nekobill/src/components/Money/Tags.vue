<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul div class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        <div>
          {{ tag.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component, Prop } from "vue-property-decorator";
  import {mixins} from 'vue-class-component';
  import TagHelper from '@/mixins/TagHelper';

  @Component
  export default class Tags extends mixins(TagHelper) {
    selectedTags: string[] = [];
    get tagList() {
      return this.$store.state.tagList;
    }
    created() {
      this.$store.commit('fetchTags');
    }
    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit("update:value", this.selectedTags);
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    display: flex;
    flex-direction: column-reverse;
    background-color: lighten(#e2cc92, 23%);
    flex-grow: 1;
    font-size: 14px;
    padding: 16px;
    > .current {
      flex-wrap: wrap;
      display: flex;
      > li {
        background: #ffe787;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 10px;
        margin-top: 4px;
        &.selected {
          background: darken(#ffe787, 20%);
          color: white;
        }
      }
    }
    > .new {
      padding-top: 16px;
      > button {
        background: transparent;
        border: none;
        color: #999;
        padding: 0 4px;
        border-bottom: 1px solid;
      }
    }
  }
</style>
