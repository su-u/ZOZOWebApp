"use strict";

const imgChanger = require('../image_changer.js')
const assert = require('assert')

describe('ImageChangerTest', function() {
    it('color', function() {
    	const img = imgChanger.imageChanger("huku.png",211,154,165);
        console.log(img);
    })
})