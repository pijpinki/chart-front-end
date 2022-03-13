import { BaseApi } from '@/api/base-api';
import type { StatsItem } from '@/api/types';

export class StatsApi extends BaseApi {
  constructor() {
    super('/stats');
  }

  normalizeItem(res: any): StatsItem {
    return {
      id: parseInt(res.id, 10),
      type: String(res.type),
      count: parseInt(res.count, 10),
      date: new Date(res.date),
    };
  }

  async getList(): Promise<StatsItem[]> {
    const res = await this.get();

    return res.map(this.normalizeItem);
  }

  async addStats(stats: StatsItem): Promise<StatsItem[]> {
    const res = await this.post('', {
      ...stats,
      date: stats.date.getTime(),
    });

    return res.map(this.normalizeItem);
  }
}
