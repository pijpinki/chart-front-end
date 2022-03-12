<template>
  <div v-if="isAddAllowed" class="add-stats">
    <van-button
      @click="showAddForm = true"
      type="primary"
      class="add-button"
    >
      Add
    </van-button>

    <div class="form">
      <van-form>
        <van-cell-group>
          <ui-picker
            label="Type"
            placeholder="Select type"
            :options="[]"
          />
          <van-field
            label="Count"
            placeholder="Count"
            type="number"
          />
        </van-cell-group>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import UiPicker from './UiPicker.vue';

const isAddAllowed = ref(false);
const showAddForm = ref(false);

onMounted(() => {
  isAddAllowed.value = !!window.localStorage.getItem('password');
});
</script>

<style scoped>
.add-stats {
  width: 100%;
  padding: var(--margin-big);
}

.add-stats .add-button {
  width: 100%;
}

.add-stats .form {
  background-color: var(--van-card-background-color);
  margin-top: var(--margin-medium);
  padding: var(--margin-medium);
}
</style>
