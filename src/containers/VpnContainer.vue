<template>
  <div>
    <access-input @apply="applyPasswordHandle"/>
  </div>
  <div>{{ vpnList.length }}</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { loadingsHook } from '../hooks';
import { vpnApi } from '../api';
import AccessInput from '../components/AccessInput.vue';

const vpnList = ref([]);

const loadList = async () => {
  vpnList.value = await vpnApi.getVpnList();
}

const applyPasswordHandle = () => {
  loadingsHook(loadList);
}

onMounted(() => {
  loadingsHook(loadList);
});
</script>
