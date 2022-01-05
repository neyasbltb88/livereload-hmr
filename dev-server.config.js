const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const DEV = NODE_ENV === 'development';
const { port, https, hot, hotOnly } = require('./base.config.js');

const devServer = {
    contentBase: path.join(__dirname, 'dist'),
    port,
    https,
    hot: DEV ? hot : false,
    hotOnly: DEV ? hotOnly : false,

    writeToDisk: false,

    clientLogLevel: 'warn',
    disableHostCheck: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    overlay: {
        warnings: true,
        errors: true
    },
    index: '',
    transportMode: {
        client: require.resolve('./hot/HotWebsocketClient'),
        server: 'ws'
    }
};

module.exports = devServer;
