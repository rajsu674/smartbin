const createService = require('feathers-knex');
const hooks = require('./user.hooks');

export default app => {
  const paginate = app.get('paginate');
  const db = app.get('knexClient');

  const options = {
    name: 'users', // matches db table name
    Model: db,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/users', createService(options));

  const service = app.service('api/users');
  // Get our initialized service so that we can register hooks and filters
  service.hooks(hooks); 
};
