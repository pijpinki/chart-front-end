import { BaseApi } from './base-api';
import type { VpnItem } from '@/api/types';


export class VpnApi extends BaseApi {
  constructor() {
    super('/vpn');
  }

  normalizeItem(item: any): VpnItem {
    return {
      id: parseInt(item.id, 10),
      name: String(item.name),
      key: String(item.key),
      date: new Date(item.date),
    }
  }

  async getVpnList(): Promise<VpnItem[]> {
    const response = await this.get();
    
    return response.map(this.normalizeItem)
  }

  async addVpn(name: string): Promise<VpnItem[]> {
    const response = await this.post('', { name });

    return response.map(this.normalizeItem);
  }
}
