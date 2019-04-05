
exports.seed = function(knex) {
      return knex('actions').insert([
        {a_description: 'The Photon Rogue', notes: 'Power-condensing satellite', a_completed: false, project_id: 1},
        {a_description: 'Conquest Staging Area', notes: 'Needs terraforming before construction facility to be implemented', a_completed: false, project_id: 2},
        {a_description: 'Conquest Station', notes: 'City construction via colony ship; powered by Photon Rogue', a_completed: false, project_id: 3}
      ]);
};
