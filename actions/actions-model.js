const db = require('../data/dbConfig.js');

module.exports = {
    add
}

function add(body) {
    return db('actions')
    .insert(body)
}