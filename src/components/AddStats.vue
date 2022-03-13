<template>
  <div v-if="isAddAllowed" class="add-stats">
    <van-button
      v-if="!showAddForm"
      @click="showAddForm = true"
      type="primary"
      class="add-button"
    >
      Add
    </van-button>

    <div class="form" v-if="showAddForm">
      <van-form @submit="submitHandle">
        <van-cell-group>
          <ui-picker
            class="field"
            label="Type"
            placeholder="Select type"
            :options="options"
            :value="values.type"
            @change="values.type = $event"
          />
          <van-field
            class="field"
            v-model="values.count"
            label="Count"
            placeholder="Count"
            type="number"
          />
          <van-field
            class="field"
            v-model="values.day"
            label="Day"
            placeholder="Day"
            type="number"
          />
          <van-field
            class="field"
            v-model="values.mounts"
            label="Mounts"
            placeholder="Mounts"
            type="number"
          />
        </van-cell-group>

        <van-button class="field" round block type="primary" native-type="submit">
          Save
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash';
import { onMounted, reactive, ref } from 'vue';
import { TYPES } from '@/constants';
import UiPicker from './UiPicker.vue';

const emit = defineEmits(['save']);

const options = _.values(TYPES);
const isAddAllowed = ref(false);
const showAddForm = ref(false);
const values = reactive({
  type: '',
  count: 0,
  day: new Date().getDate(),
  mounts: new Date().getMonth(),
});

const generateDate = () => {
  const date = new Date();
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);
  date.setDate(values.day);
  date.setMonth(values.mounts);

  return date;
}

const submitHandle = () => {
  showAddForm.value = false;
  emit('save', {
    ...values,
    date: generateDate()
  });
};

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

.add-stats .form .field {
  margin-top: var(--margin-medium);
}
</style>
