module.exports = (req, res) => {
  const expire = Math.floor(Date.now() / 1000) + 30 * 60;
  const link = `https://findyourselflab.github.io/cc/?expire=${expire}`;
  res.status(200).send(link);
};