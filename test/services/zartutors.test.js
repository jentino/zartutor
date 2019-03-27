const assert = require('assert');
const app = require('../../src/app');

describe('\'zartutors\' service', () => {
  it('registered the service', () => {
    const service = app.service('zartutors');

    assert.ok(service, 'Registered the service');
  });
});
