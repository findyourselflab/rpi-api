export default function handler(req, res) {
  // 设置CORS头（可选，方便调试）
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // 计算30分钟后的时间戳（秒）
  const expire = Math.floor(Date.now() / 1000) + 30 * 60;
  
  // 从查询参数中获取 test 类型，默认为 'rpi'（保持旧测试兼容）
  const test = req.query.test || 'rpi';
  
  // 基础域名（请替换为您的实际GitHub Pages域名）
  const baseDomain = 'https://findyourselflab.github.io/cc/';
  
  let link;
  switch (test) {
    case 'index':
      // 旧测试（RPI恋爱占有欲）—— 假设首页就是 index.html
      link = `${baseDomain}index.html?expire=${expire}`;
      break;
    case 'cpcityindex':
      // 天选之城测试
      link = `${baseDomain}cpcityindex.html?expire=${expire}`;
      break;
    case 'tianfu':
      // 天赋自测
      link = `${baseDomain}tianfu.html?expire=${expire}`;
      break;
    case 'beauty':
      link = `${baseDomain}beauty.html?expire=${expire}`;
      break;
    default:
      // 默认返回 rpi
      link = `${baseDomain}index.html?expire=${expire}`;
  }
  
  res.status(200).send(link);
}




