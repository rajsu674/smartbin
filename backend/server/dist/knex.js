const knex = require('knex');

module.exports = app => {
  // initialize database connection for app usage
  const {
    client,
    connection
  } = app.get('mysql');
  const db = knex({
    client,
    connection
  });
  app.set('knexClient', db);
};