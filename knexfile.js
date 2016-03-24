module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tripstart'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
