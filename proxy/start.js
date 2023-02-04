//start.js
const app = require('./server.js');
const config = require('./config.js');

app.listen(config.get('port'));
//console.log('The server has been started` at localhost:3001');
