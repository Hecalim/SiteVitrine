<script setup lang="ts">
import type { Component } from "vue";

type Props = {
  icon?: Component;
  iconPosition?: "left" | "right";
};

withDefaults(defineProps<Props>(), {
  iconPosition: "left",
});
</script>

<template>
  <button
    class="bg-amber-200 rounded-full flex items-center gap-2 justify-center hover:bg-amber-400 cursor-pointer"
  >
    <component v-if="icon && iconPosition === 'left'" :is="icon" :size="20" />

    <span>
      <slot />
    </span>

    <component v-if="icon && iconPosition === 'right'" :is="icon" :size="20" />
  </button>
</template>

<style></style>
