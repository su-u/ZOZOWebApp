'use strict';

const assert = require('assert');
const request = require('supertest');
const app = require('../api/app');
const expect = require('expect');

describe('ApiTest', function (done) {
    it('Home', function () {
        request(app).get('/')
            .expect(200);
    });
    it('ApiimgTest', function (done) {
        request(app).get('/api/v1/img')
            .expect(200)
            .end(done);

    });
    it('Testtest', function (done) {
        request(app)
            .get('/api/v1/test')
            .expect(400, {
                status: 400,
                message: 'type is empty.',
                response: ''
            }, done);
    });
});
