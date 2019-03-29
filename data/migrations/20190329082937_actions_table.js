
exports.up = function(knex) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();

        tbl
        .text('description')
        .notNullable()

        tbl
        .text('notes')
        .notNullable()

        tbl
        .boolean('completed')
        .notNullable();

        tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('actions');
};
