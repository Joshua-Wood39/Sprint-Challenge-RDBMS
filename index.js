const server = require('./api/server.js');

const port = 5000;
server.listen(port, () => {
    console.log(`\n** API is creeping on http://localhost:${port} **\n`)
})
