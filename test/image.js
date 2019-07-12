"use strict";

const imgChanger = require('../image_changer.js')
const assert = require('assert')

describe('ImageChangerTest', function() {
    it('color', function() {
    	const img = imgChanger.imageChanger("./huku.png",245,242,66);
        // console.log(img);
    })
})