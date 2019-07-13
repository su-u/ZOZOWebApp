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
    it('Non value', function (done) {
        request(app)
            .get('/api/v1/test')
            .expect(400, {
                status: 400,
                message: 'type is empty.',
                response: ''
            }, done);
    });
    it('6 characters', function (done) {
        request(app)
            .get('/api/v1/test?color=ddaafffffd&type=testtype')
            .expect(400, {
                status: 400,
                message: 'The number of characters in the color value is not 6.',
                response: ''
            }, done);
    });

    it('Color value', function (done) {
        request(app)
            .get('/api/v1/test?color=ffffff&type=testtype')
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
    it('R is not number', function (done) {
        request(app)
            .get('/api/v1/test?color=gyffff&type=testtype')
            .expect(400, {
                status: 400,
                message: 'R is NaN.',
                response: ''
            }, done);
    });
    it('G is not number', function (done) {
        request(app)
            .get('/api/v1/test?color=ffmqff&type=testtype')
            .expect(400, {
                status: 400,
                message: 'G is NaN.',
                response: ''
            }, done);
    });
    it('B is not number', function (done) {
        request(app)
            .get('/api/v1/test?color=fffflo&type=testtype')
            .expect(400, {
                status: 400,
                message: 'B is NaN.',
                response: ''
            }, done);
    });
});