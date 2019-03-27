const assert = require('assert');
const app = require('../../src/app');

describe('\'tutors\' service', () => {
  it('registered the service', () => {
    const service = app.service('tutors');

    assert.ok(service, 'Registered the service');
  });
});
