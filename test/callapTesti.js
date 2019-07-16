const apitest = require('./apiTest');
const assert = require('assert');
const request = require('supertest');
const app = require('../api/app');
const expect = require('expect');

apitest('/api/v1/tops');
apitest('/api/v1/bottoms');
apitest('/api/v1/shoes');

describe('Calltest', function (done) {
    it('/', function (done) {
        request(app)
            .get('/')
            .expect(302)
            .end(done);
    });
    it('/index.html', function (done) {
        request(app)
            .get('/index.html')
            .expect(200)
            .end(done);
    });
    it('/aaaaaa', function (done) {
        request(app)
            .get('/aaaaaa')
            .expect(404)
            .end(done);
    });
});