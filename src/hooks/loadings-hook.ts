import { inject } from 'vue';

let loading: any = null;
let error: any = null;

export const loadingsHook = async (func: Function): Promise<any> => {
  if (!loading) {
    loading = inject('loading');
  }
  if (!error) {
    error = inject('error');
  }

  loading.value = true;

  try {
    await func();
  } catch (e) {
    console.error(e);
    error.value = e;
  } finally {
    loading.value = false;
  }
};
