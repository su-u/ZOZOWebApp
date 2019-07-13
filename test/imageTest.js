"use strict";

const imgChanger = require('../api/app/image_changer.js/index.js')
const assert = require('assert')

describe('ImageChangerTest', function () {
    it('color', function () {
        const [status, result] = imgChanger.imageChanger("./huku.png", 245, 242, 66);
        assert.equal(1, status);
    })
})