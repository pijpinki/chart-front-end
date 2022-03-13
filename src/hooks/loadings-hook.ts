import { inject } from 'vue';

class Storage {
  public loading: any;
  public error: any;

  init() {
    if (!this.loading) {
      this.loading = inject('loading');
    }

    if (!this.error) {
      this.error = inject('error');
    }
  }

  setLoading(state: boolean): void {
    this.init();

    if (this.loading) {
      this.loading.value = state;
    }
  }

  setError(error: any): void {
    this.init();

    if (this.error) {
      this.error.value = error;
    }
  }
}

const storage = new Storage();

export const loadingsHook = async (func: Function): Promise<any> => {
  storage.setLoading(true);

  try {
    await func();
  } catch (e) {
    console.error(e);
    storage.setError(e);
  } finally {
    storage.setLoading(false);
  }
};
