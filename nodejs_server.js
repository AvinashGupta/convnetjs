var connect = require('connect');

// just serve local files
connect.createServer(
    connect.static(__dirname)
).listen(8080);
console.log('listning on port 8080');

