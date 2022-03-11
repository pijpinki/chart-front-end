<script setup lang="ts">
import { ref, provide } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';

const loading = ref(false);
const error = ref(null);

provide('loading', loading);
provide('error', error);
</script>

<template>
  <div>
    <van-loading v-if="loading"/>

    <nav-bar/>
    <RouterView/>
  </div>
</template>

<style></style>
