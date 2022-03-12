<template>
  <van-card
    type="edit"
    class="card"
    :desc="vpn.key"
    :title="vpn.name"
  >
    <template #footer>
      <van-button v-if="!showActions" @click="showActions = true">Delete</van-button>

      <div v-else>
        <van-button type="primary" @click="showActions = false; emit('delete', vpn)">Yes</van-button>
        <van-button type="warning" @click="showActions = false">No</van-button>
      </div>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

defineProps({
  vpn: { type: Object, required: true },
});

const showActions = ref(false);

const emit = defineEmits([ 'delete' ]);
</script>

<style scoped>
.card {
  margin: var(--margin-big);
}
</style>
