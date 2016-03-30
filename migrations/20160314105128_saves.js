exports.up = function(knex, Promise) {
  return knex.schema.createTable('saves', function(table){
    table.increments();
    table.string('email');
    table.string('city');
    table.string('country');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('saves');
};
