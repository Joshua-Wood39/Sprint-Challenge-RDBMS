
exports.seed = function(knex) {
      return knex('projects').insert([
        {name: 'Sun', description: 'Harness', completed: false},
        {name: 'Moon', description: 'Atmosphere', completed: false},
        {name: 'Mars', description: 'Civilize', completed: false}
      ]);
};
