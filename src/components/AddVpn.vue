<template>
  <div class="add-vpn">
    <van-button
      @click="expand = ['1']"
      class="open-button"
      type="primary"
      v-if="!expand.includes('1')"
    >
      Add
    </van-button>

    <van-collapse v-model="expand">
      <van-collapse-item title="Add vpn" name="1">
        <van-cell-group inset>
          <van-field label="Name" placeholder="Name" v-model="name"/>

          <van-button type="primary" class="apply-button" @click="clickApplyHandle">Apply</van-button>
        </van-cell-group>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>


<script setup>
import { ref, defineEmits } from 'vue';

const name = ref('');
const expand = ref([]);
const emit = defineEmits(['apply']);

const clickApplyHandle = () => {
  emit('apply', { name: name.value });

  name.value = '';
  expand.value = [];
};
</script>


<style scoped>
.add-vpn {
  background-color: var(--van-card-background-color);
  padding: var(--margin-medium);
}

.add-vpn .open-button {
  width: 100%;
  margin: var(--margin-small);
}

.add-vpn .apply-button {
  width: 100%;
  margin: var(--margin-medium)
}
</style>
