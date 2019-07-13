const apitest = require('./apiTest');
const assert = require('assert');
const request = require('supertest');
const app = require('../api/app');
const expect = require('expect');

apitest('/api/v1/test');
apitest('/api/v1/tops');
apitest('/api/v1/bottoms');
apitest('/api/v1/shoes');

describe('Calltest [/]', function (done) {
    it('Index', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });
});