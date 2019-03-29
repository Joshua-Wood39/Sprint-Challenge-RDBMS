const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
    update,
    remove
}

function add(body) {
    return db('actions')
    .insert(body)
}

function find() {
    return db('actions')
}

function findById(id) {
    return db('actions')
    .where({ id })
}

function update(id, changes) {
    return db('actions')
    .where({ id })
    .update(changes)
}

function remove(id) {
    return db('actions')
    .where({ id })
    .del()
}