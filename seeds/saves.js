
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('saves').del(),

    // Inserts seed entries
    knex('saves').insert({
      email: 'pantsguy@pants.com',
      city: 'Porto',
      country: 'Portugal'}),
    knex('saves').insert({
      email: 'pantsguy@pants.com',
      city: 'Nice',
      country: 'France'}),
    knex('saves').insert({
      email: 'pantsguy@pants.com',
      city: 'Valencia',
      country: 'Spain'}),
    knex('saves').insert({
      email: 'pantsguy@pants.com',
      city: 'Ljubljana',
      country: 'Slovenia'}),
    knex('saves').insert({
      email: 'pantsguy@pants.com',
      city: 'Kyoto',
      country: 'Japan'})
  );
};
