export interface Plan {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  unit: string;
  traffic: string;
  cycle: string;
  type: 'monthly' | 'onetime';
  badge?: string;
  popular?: boolean;
  features: string[];
  note: string;
}

export const AFFILIATE_URL = 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa';

export const plans: Plan[] = [
  {
    id: 'monthly-300g',
    name: '月付套餐',
    price: '15',
    priceNum: 15,
    unit: '¥ / 月',
    traffic: '300GB / 月',
    cycle: '按月重置',
    type: 'monthly',
    badge: '灵活用量推荐',
    popular: true,
    features: [
      '每月 300GB 高速流量',
      '每月固定结算日自动重置额度',
      '最高支持 1000M 带宽峰值',
      '中国大陆方向优化线路',
      '覆盖香港、日本、美国、德国等优质节点地区',
      '适合日常网页浏览、4K视频播放及多终端同时连接'
    ],
    note: '包含中国大陆优化线路，资源按月独立分配。'
  },
  {
    id: 'onetime-300g',
    name: '300GB流量包',
    price: '25',
    priceNum: 25,
    unit: '¥ / 次',
    traffic: '300GB 总量',
    cycle: '一次性计费',
    type: 'onetime',
    badge: '不限时长',
    popular: false,
    features: [
      '300GB 累计流量总额',
      '一次购买，流量不过期，用完为止',
      '最高支持 1000M 带宽峰值',
      '共用主站优化线路资源',
      '覆盖香港、日本、美国、德国等节点',
      '适合轻度网络使用、备用连接与临时加速需求'
    ],
    note: '流量不过期，用完即止，无需担忧按月重置消耗压力。'
  },
  {
    id: 'onetime-1000g',
    name: '1000GB流量包',
    price: '60',
    priceNum: 60,
    unit: '¥ / 次',
    traffic: '1000GB 总量',
    cycle: '一次性计费',
    type: 'onetime',
    badge: '超值高额度',
    popular: true,
    features: [
      '1000GB 充沛流量总额',
      '一次购买，流量长期有效，用完为止',
      '最高支持 1000M 带宽峰值',
      '全节点高速线路接入',
      '覆盖香港、日本、美国、德国等主流节点',
      '适合大文件传输、长途出差及长期跨国办公用户'
    ],
    note: '大容量流量保障，单GB单价更低，长期使用更省心。'
  }
];
