const imgChanger = require('../image_changer.js')
const assert = require('assert')

describe('ImageChangerTest', function() {
  it('color', function() {
      imgChanger.imageChanger(150,154,165);
  })
})