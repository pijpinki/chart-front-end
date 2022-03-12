<template>
  <div>
    <add-stats/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AddStats } from '@/components';
import type { StatsItem } from '@/api/types';

const stats = ref<StatsItem[]>([]);
</script>
