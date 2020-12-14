function proxy(path, config) {
  return require(`${config}`);
}
module.exports = proxy;
