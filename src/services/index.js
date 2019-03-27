const tutors = require('./tutors/tutors.service.js');
// const rooms = require('./rooms/rooms.service.js');
// const users = require('./users/users.service.js');
// const chatmessages = require('./chatmessages/chatmessages.service.js');
// const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(tutors);
};
