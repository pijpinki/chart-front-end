<template>
  <van-nav-bar title="Русский корабыль иди на хуй!">
    <template #right>
      <van-button class="margin">
        <router-link to="/">Втрати вогора</router-link>
      </van-button>
      <van-button class="margin">
        <router-link to="heroes">Наші Герої</router-link>
      </van-button>
      <van-button class="margin" v-if="isVpnAllowed">
        <router-link to="vpn">VPN</router-link>
      </van-button>
    </template>
  </van-nav-bar>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isVpnAllowed = ref(false);

onMounted(() => {
  if (window.localStorage.getItem('vpn')) {
    isVpnAllowed.value = true;
  }
});
</script>

<style scoped>
.margin {
  margin: var(--margin-small);
}
</style>
