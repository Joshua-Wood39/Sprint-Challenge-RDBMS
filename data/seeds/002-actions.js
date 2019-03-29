
exports.seed = function(knex) {
      return knex('actions').insert([
        {description: 'The Photon Rogue', notes: 'Power-condensing satellite', completed: false, project_id: 1},
        {description: 'Conquest Staging Area', notes: 'Needs terraforming before construction facility to be implemented', completed: false, project_id: 2},
        {description: 'Conquest Station', notes: 'City construction via colony ship; powered by Photon Rogue', completed: false, project_id: 3}
      ]);
};
