export default function handler(req, res) {
  // 计算30分钟后的时间戳（秒）
  const expire = Math.floor(Date.now() / 1000) + 30 * 60;
  // 拼接链接，替换成你的实际测评地址
  const link = `https://findyourselflab.github.io/cc/?expire=${expire}`;
  // 返回纯文本链接
  res.status(200).send(link);
}