const { host, port } = require('./base.config');
const app = require('https-localhost')(host);

app.serve('./dist');
app.listen(port);
