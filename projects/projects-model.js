const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    add,
    update,
    remove,
    find
}

function findById(id) {
    return db('projects as p')
    .join('actions as a', 'p.id', 'a.project_id')
    .where('a.project_id', id)
    .select('p.name', 'p.description', 'p.completed', 'a.a_description as descript.', 'a.notes', 'a.a_completed as comp.')
    
}

function add(body) {
    return db('projects')
    .insert(body)
}

function update(id, changes) {
    return db('projects')
    .where({ id })
    .update(changes)
}

function remove(id) {
    return db('projects')
    .where({ id })
    .del()
}

function find() {
    return db('projects')
}
