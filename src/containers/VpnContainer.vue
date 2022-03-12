<template>
  <div>
    <access-input @apply="applyPasswordHandle"/>
  </div>
  <div>
    <add-vpn @apply="addVpnHandle"/>
  </div>
  <div>
    <vpn-card
      v-for="vpn in vpnList"
      :key="vpn.id"
      :vpn="vpn"
      @delete="deleteHandle"
    />
  </div>
  <div>{{ vpnList.length }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { loadingsHook } from '@/hooks';
import { vpnApi } from '@/api';
import type { VpnItem } from '@/api/types';
import { AccessInput, AddVpn, VpnCard } from '../components';

const vpnList = ref<VpnItem[]>([]);

const loadList = async () => {
  vpnList.value = await vpnApi.getVpnList();
};

const applyPasswordHandle = () => {
  loadingsHook(loadList);
};

const addVpnHandle = (input: any) => {
  loadingsHook(async () => {
    vpnList.value = await vpnApi.addVpn(String(input.name));
  });
};

const deleteHandle = (vpn: VpnItem) => {
  loadingsHook(async () => {
    vpnList.value = await vpnApi.deleteVpn(vpn.id);
  });
};

onMounted(() => {
  loadingsHook(loadList);
});
</script>
