import config from '@/config';

export class BaseApi {
  private readonly basePath: string;
  private readonly host: string;

  constructor(basePath: string) {
    this.basePath = basePath;
    this.host = config.host;
  }

  errorProcessor(error: any): void {
    console.error('error', error);
    throw error;
  }

  generateUrl(path: string, data: any): string {
    const url = `${this.host}${this.basePath}${path}`;

    if (path.toLowerCase() === 'get') {
      return `${url}?${new URLSearchParams(data)}`;
    }

    return url;
  }

  async request(method: string, path: string, data: any): Promise<any> {
    const dataWithKey = {
      ...data,
      key: window.localStorage.getItem('password') || undefined,
    };
    const url = this.generateUrl(path, dataWithKey);
    const body = method.toLowerCase() === 'get' ? undefined : JSON.stringify(dataWithKey);

    console.info('data ->', data);
    console.info('url ->', url);
    console.info('body ->', body);
    console.info('method ->', method);

    try {
      const response = await window.fetch(url, {
        method, body, headers: {
          'Content-type': 'application/json'
        }
      });

      return response.json();
    } catch (e) {
      this.errorProcessor(e);
    }
  }

  async get(path: string = '', data: any = {}): Promise<any> {
    console.info('call get must call request');
    await this.request('get', path, data);
    return;
  }

  async post(path: string = '', data: any = {}): Promise<any> {
    return this.request('get', path, data);
  }

  async put(path: string = '', data: any = {}): Promise<any> {
    return this.request('get', path, data);
  }

  async delete(path: string = '', data: any = {}): Promise<any> {
    return this.request('get', path, data);
  }
}
