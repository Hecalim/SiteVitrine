<script setup lang="ts">
import { RouterView } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button.vue";
import PlusIcon from "vue-material-design-icons/Plus.vue";
</script>

<template>
  <HelloWorld />
  <Button :icon="PlusIcon">Caca</Button>
  <RouterView />
</template>
