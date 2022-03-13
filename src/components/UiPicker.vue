<template>
  <van-field
    v-model="value"
    is-link
    readonly
    name="picker"
    :label="label"
    :placeholder="placeholder"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" position="bottom">
    <van-picker
      :columns="options"
      @confirm="showPicker = false; emit('change', $event)"
      @cancel="showPicker = false"
    />
  </van-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  placeholder: { type: String },
  label: { type: String, default: '' },
  options: { type: Array, required: true },
  value: { type: [Number, String], default: null },
});

const emit = defineEmits(['change']);
const showPicker = ref(false);
</script>

<style scoped>

</style>
