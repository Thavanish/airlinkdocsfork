const { startServer, addRoute, setFilePaths } = require('@privt00/blackjs');
setFilePaths('./bjs/looks.txt', './bjs/bjs.txt');
addRoute('/', './views/index.bjs');
startServer(2956);