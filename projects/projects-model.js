const db = require('../data/dbConfig.js');

module.exports = {
    findById,
    add
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

