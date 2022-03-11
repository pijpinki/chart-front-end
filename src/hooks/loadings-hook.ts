import { inject } from 'vue';

export const loadingsHook = async (func: Function): Promise<any> => {
  const loading = inject('loading');
  const error = inject('error');

  // @ts-ignore
  loading.value = true;

  try {
    await func();
  } catch (e) {
    // @ts-ignore
    error.value = e;
  } finally {
    // @ts-ignore
    loading.value = false;
  }
};
