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
    />
  </div>
  <div>{{ vpnList.length }}</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { loadingsHook } from '../hooks';
import { vpnApi } from '../api';
import { AccessInput, AddVpn, VpnCard } from '../components';

const vpnList = ref([]);

const loadList = async () => {
  vpnList.value = await vpnApi.getVpnList();
}

const applyPasswordHandle = () => {
  loadingsHook(loadList);
}

const addVpnHandle = ({ name }) => {
  loadingsHook(async () => {
    vpnList.value = await vpnApi.addVpn(name);
  })
}

onMounted(() => {
  loadingsHook(loadList);
});
</script>
