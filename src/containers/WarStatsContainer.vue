<template>
  <div>
    <add-stats @save="addStatsHandle"/>

    {{ stats.length }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { AddStats } from '@/components';
import type { StatsItem } from '@/api/types';
import { statsApi } from '@/api';
import { loadingsHook } from '@/hooks';

const stats = ref<StatsItem[]>([]);

const addStatsHandle = (stats: any) => {
  loadingsHook(async () => {
    stats.value = await statsApi.addStats(statsApi.normalizeItem(stats));
  });
};

onMounted(() => {
  loadingsHook(async () => {
    stats.value = await statsApi.getList();
  });
});
</script>
