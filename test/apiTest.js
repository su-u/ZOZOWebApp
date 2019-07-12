"use strict";

const assert = require('assert');
const request = require('supertest');
const app = require('../api/app');
const expect = require('expect');

describe('ApiTest', function () {
    it('Home', function () {
        request(app).get('/')
            .then((response) => {
                expect(response.statusCode).toBe(200);
            })
    })
    it('ApiimgTest', function () {
        request(app).get('/api/v1/img')
            .then((response) => {
                expect(response.statusCode).toBe(200);
            })
    })
})