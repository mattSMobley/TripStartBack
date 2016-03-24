
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('saves').del(),

    // Inserts seed entries
    knex('saves').insert({
      user_id: 3,
      city: 'Porto',
      country: 'Portugal'}),
    knex('saves').insert({
      user_id: 3,
      city: 'Nice',
      country: 'France'}),
    knex('saves').insert({
      user_id: 3,
      city: 'Tokyo',
      country: 'Japan'})
  );
};
