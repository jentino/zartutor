const assert = require('assert');
const app = require('../../src/app');

describe('\'chatmessages\' service', () => {
  it('registered the service', () => {
    const service = app.service('chatmessages');

    assert.ok(service, 'Registered the service');
  });
});
