exports.up = function(knex, Promise) {
  return knex.schema.createTable('saves', function(table){
    table.increments();
    table.string('user_id');
    table.string('city');
    table.string('country');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('saves');
};
