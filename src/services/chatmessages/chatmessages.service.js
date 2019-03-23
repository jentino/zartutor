// Initializes the `chatmessages` service on path `/chatmessages`
const createService = require('feathers-memory');
const hooks = require('./chatmessages.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/chatmessages', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('chatmessages');

  service.hooks(hooks);
};
