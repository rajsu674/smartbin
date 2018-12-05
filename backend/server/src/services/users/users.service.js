// Initializes the `users` service on path `/api/users`
const createService = require('feathers-knex');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const db = app.get('knexClient');

  const options = {
    name: 'users', // matches db table name
    Model: db,  
  };

  // Initialize our service with any options it requires
  app.use('/api/users', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/users');

  service.hooks(hooks);
};
