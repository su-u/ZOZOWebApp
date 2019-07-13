'use strict';

const assert = require('assert');
const request = require('supertest');
const app = require('../api/app');
const expect = require('expect');

const apitest = (path) => {
    describe('Calltest [' + path + ']', function (done) {
        it('Non value', function (done) {
            request(app)
                .get(path)
                .expect(400, {
                    status: 400,
                    message: 'type is empty.',
                    response: ''
                }, done);
        });
        it('Not 6 characters', function (done) {
            request(app)
                .get(path + '?color=ddaafffffd&type=testtype')
                .expect(400, {
                    status: 400,
                    message: 'The number of characters in the color value is not 6.',
                    response: ''
                }, done);
        });
        it('Color value', function (done) {
            request(app)
                .get(path + '?color=ffffff&type=testtype')
                .expect(200)
                .end(done);
        });
        it('R is out of value test', function (done) {
            request(app)
                .get(path + '?color=-1FFFF&type=testtype')
                .expect(400, {
                    status: 400,
                    message: 'The value of R is out of range.',
                    response: ''
                }, done);
        });
        it('R is not a number', function (done) {
            request(app)
                .get(path + '?color=gyffff&type=testtype')
                .expect(400, {
                    status: 400,
                    message: 'R is NaN.',
                    response: ''
                }, done);
        });
        it('G is not a number', function (done) {
            request(app)
                .get(path + '?color=ffmqff&type=testtype')
                .expect(400, {
                    status: 400,
                    message: 'G is NaN.',
                    response: ''
                }, done);
        });
        it('B is not a number', function (done) {
            request(app)
                .get(path + '?color=fffflo&type=testtype')
                .expect(400, {
                    status: 400,
                    message: 'B is NaN.',
                    response: ''
                }, done);
        });
    });
}
module.exports = apitest;