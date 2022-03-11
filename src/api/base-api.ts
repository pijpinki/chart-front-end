import config from '@/config';

export class BaseApi {
  private readonly basePath: string;
  private readonly host: string;

  constructor(basePath: string) {
    this.basePath = basePath;
    this.host = config.host;
  }

  errorProcessor(error: any): void {
    console.info(error);
    throw error;
  }

  generateUrl(path: string, data: any): string {
    const url = `${this.basePath}${path}`;

    if (path.toLowerCase() === 'get') {
      return `${url}?${new URLSearchParams(data)}`;
    }

    return url;
  }

  async request(method: string, path: string, data: any): Promise<any> {
    const dataWithKey = {
      ...data,
      key: window.localStorage.get('key'),
    };

    try {
      const response = await fetch(this.generateUrl(path, dataWithKey), {
        method,
        body: method.toLowerCase() === 'get' ? undefined : JSON.stringify(dataWithKey),
        headers: {
          'Content-type': 'application/json'
        }
      });

      return response.json();
    } catch (e) {
      this.errorProcessor(e);
    }
  }

  async get(path: string, data: any): Promise<any> {
    return this.request('get', path, data);
  }

  async post(path: string, data: any): Promise<any> {
    return this.request('get', path, data);
  }

  async put(path: string, data: any): Promise<any> {
    return this.request('get', path, data);
  }

  async delete(path: string, data: any): Promise<any> {
    return this.request('get', path, data);
  }
}
