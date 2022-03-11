export class BaseApi {
  private basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  errorProcessor(error: any): void {
    console.info(error);
  }

  generateUrl(path: string, data: any): string {
    const url = `${this.basePath}${path}`;

    if (path.toLowerCase() === 'get') {
      return `${url}?${new URLSearchParams(data)}`;
    }

    return url;
  }

  async request(method: string, path: string, data: any): Promise<any> {
    try {
      const response = await fetch(this.generateUrl(path, data), {
        method,
        body: method.toLowerCase() === 'get' ? undefined : JSON.stringify(data),
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
