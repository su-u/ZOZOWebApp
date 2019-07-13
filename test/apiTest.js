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
    it('Call api', function (done) {
        request(app).get('/api/v1/img')
            .expect(200)
            .end(done);

    });
    it('Non value test', function (done) {
        request(app)
            .get('/api/v1/test')
            .expect(400, {
                status: 400,
                message: 'type is empty.',
                response: ''
            }, done);
    });
    it('6 characters test', function (done) {
        request(app)
            .get('/api/v1/test?color=FFaFFFFd&type=testtype')
            .expect(400, {
                status: 400,
                message: 'The number of characters in the color value is not 6.',
                response: ''
            }, done);
    });

    it('Color value test', function (done) {
        request(app)
            .get('/api/v1/test?color=FFFFFF&type=testtype')
            .expect(200)
            .end(done);
    });

    it('R is out of value test', function (done) {
        request(app)
            .get('/api/v1/test?color=-1FFFF&type=testtype')
            .expect(400, {
                status: 400,
                message: 'The value of R is out of range.',
                response: ''
            }, done);
    });
});