export default function handler(req, res) {
  // 计算30分钟后的时间戳（秒）
  const expire = Math.floor(Date.now() / 1000) + 30 * 60;
  
  // 从查询参数中获取 type，默认为 'old'
  const type = req.query.type || 'old';
  
  let link;
  if (type === 'new') {
    // 新测试页面的地址（请将“新文件名.html”替换为您实际的文件名）
    link = `https://findyourselflab.github.io/cc/cpcityindex.html?expire=${expire}`;
  } else {
    // 旧测试页面的地址
    link = `https://findyourselflab.github.io/cc/index.html?expire=${expire}`;
  }
  
  res.status(200).send(link);
}
