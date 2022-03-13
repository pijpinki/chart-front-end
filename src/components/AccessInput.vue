<template>
  <div class="access-input">
    <van-cell-group class="row">
      <van-field
        v-model="password"
        label="Password"
        type="password"
        :colon="true"
      />
      <van-button class="button" type="primary" @click="applyHandle">Apply</van-button>
      <van-button class="button" type="warning" @click="resetHandle">Reset</van-button>
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits([ 'apply' ]);
const password = ref('');

const applyHandle = () => {
  window.localStorage.setItem('password', password.value.toString());
  emit('apply');
};

const resetHandle = () => {
  window.localStorage.setItem('password', undefined);
  password.value = '';
  emit('apply');
}

onMounted(() => {
  password.value = window.localStorage.getItem('password') || '';
})
</script>

<style scoped>
.access-input {
  background-color: var(--van-card-background-color);
  border-radius: 5px;
  padding: var(--margin-medium);
  margin: var(--margin-medium);

  display: flex;
}

.access-input .row {
  display: flex;
  width: 100%;
}

.access-input .button {
  margin-left: var(--margin-medium);
}
</style>
