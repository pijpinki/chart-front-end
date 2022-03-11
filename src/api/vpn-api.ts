import { BaseApi } from './base-api';
import type { VpnItem } from '@/api/types';


export class VpnApi extends BaseApi {
  constructor() {
    super('/vpn');
  }

  async getVpnList(): Promise<VpnItem[]> {
    const response = await this.get();

    return response.map((item: any) => ({
      id: parseInt(item.id, 10),
      name: String(item.name),
      key: String(item.key),
      date: new Date(item.date),
    }))
  }
}
