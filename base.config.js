const clientConfig = require('./client.config');

const https = clientConfig.https === true ? true : false;
const host = clientConfig.host ? clientConfig.host : 'localhost';
const port = clientConfig.port ? clientConfig.port : 3000;
const publicPath = `${https ? 'https' : 'http'}://${host}:${port}/`;
const hot = clientConfig.hot === true ? true : false;
const hotOnly = clientConfig.hotOnly === true ? true : false;

module.exports = {
    clientConfig,
    https,
    host,
    port,
    publicPath,
    hot,
    hotOnly
};
