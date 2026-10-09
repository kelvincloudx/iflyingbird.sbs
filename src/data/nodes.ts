export interface NodeRegion {
  name: string;
  code: string;
  flag: string;
  features: string;
  recommendedFor: string;
}

export const regions: NodeRegion[] = [
  {
    name: '香港优化节点',
    code: 'HK',
    flag: '🇭🇰',
    features: '中国大陆方向超低延迟直连、双向BGP优化线路',
    recommendedFor: '日常高速浏览、实时语音、网页会话与高清视频首选'
  },
  {
    name: '日本原生节点',
    code: 'JP',
    flag: '🇯🇵',
    features: '高质量东亚国际骨干网接入、高带宽吞吐能力',
    recommendedFor: '跨国游戏连接、流媒体播放及跨国业务办公'
  },
  {
    name: '美国高速节点',
    code: 'US',
    flag: '🇺🇸',
    features: '充沛的国际带宽储备、最高可跑满1000M峰值',
    recommendedFor: '大文件数据同步、软件更新下载与AI开发工具接入'
  },
  {
    name: '德国欧洲节点',
    code: 'DE',
    flag: '🇩🇪',
    features: '欧洲核心枢纽线路、稳健的骨干网路由收敛',
    recommendedFor: '欧洲方向业务对接、跨国云控制台管理与数据备份'
  }
];

export interface NetworkTopic {
  title: string;
  desc: string;
}

export const networkTopics: NetworkTopic[] = [
  {
    title: '节点地区选择',
    desc: '地理距离与骨干网路由直接决定基础物理延迟。地理位置距离本地越近（如香港、日本），交互延迟越低；而远距离节点（如美国、德国）则具备充沛的带宽池余量。'
  },
  {
    title: '网络延迟与抖动',
    desc: '延迟（Ping）代表数据包往返时间，而抖动指延迟的变化波动率。在视频会议和在线协作场景中，稳定的抖动控制比单纯追求极低延迟更为关键。'
  },
  {
    title: '下载速度与带宽峰值',
    desc: '带宽峰值（如 FlyingBird 支持的 1000M）决定了单位时间内最大可传输数据容量。实际下载速度取决于本地宽带、终端性能及目标服务器响应速度的协同。'
  },
  {
    title: '网络拥堵与高峰响应',
    desc: '在晚间 20:00–23:00 跨国骨干网国际出口高峰期，网络拥堵可能导致瞬时丢包率上升。通过分流规则或切换备用优化节点，可有效缓解加载缓慢。'
  },
  {
    title: '客户端代理连接',
    desc: '代理客户端通过建立虚拟 TUN 通道拦截出站数据，并按设定的路由规则（全局/规则/直连）进行分流转发，实现高效的网络资源调配。'
  },
  {
    title: '流量消耗与计量',
    desc: '网络流量消耗由上行发送量与下行接收量共同构成。高清流媒体视频、音视频通话以及自动备份是日常消耗流量最主要的场景。'
  },
  {
    title: '网络环境无缝切换',
    desc: '当设备从 Wi-Fi 切换至移动数据网络时，本地 IP 发生变更。开启客户端“网络变更自动重连”可确保代理通道在环境变化后迅速恢复连通。'
  }
];
