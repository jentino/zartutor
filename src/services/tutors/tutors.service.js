// Initializes the `tutors` service on path `/tutors`
const createService = require('feathers-mongodb');
const hooks = require('./tutors.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/tutors', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tutors');

  mongoClient.then(db => {
    service.Model = db.collection('tutors');
  });

  service.hooks(hooks);
};
