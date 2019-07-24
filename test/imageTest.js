"use strict";

const imgChanger = require('../api/app/image_changer')
const assert = require('assert')

describe('ImageChangerTest', function () {
    it('color', function () {
        const [status, result] = imgChanger('./img/IMG_0769_c.PNG', 245, 242, 66);
        assert.equal(1, status);
    });
});