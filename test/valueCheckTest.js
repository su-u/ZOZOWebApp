const assert = require('assert');

describe('checkColorValueTest', function () {
    const checkColorValue = require('../api/app/checkColorValue');

    it('Correct value', function () {
        const [status, message, r, g, b] = checkColorValue('ffffff');
        assert.equal(1, status);
        assert.equal('', message);
        assert.equal(255, r);
        assert.equal(255, g);
        assert.equal(255, b);
    });
    it('Empty', function () {
        const [status, message, r, g, b] = checkColorValue('');
        assert.equal(-1, status);
        assert.equal('color is empty.', message);
        assert.equal(0, r);
        assert.equal(0, g);
        assert.equal(0, b);
    });
    it('Not 6 characters', function () {
        const [status, message, r, g, b] = checkColorValue('1234567');
        assert.equal(-1, status);
        assert.equal('The number of characters in the color value is not 6.', message);
        assert.equal(0, r);
        assert.equal(0, g);
        assert.equal(0, b);
    });
    it('Not 6 characters', function () {
        const [status, message, r, g, b] = checkColorValue('12o56q7');
        assert.equal(-1, status);
        assert.equal('The number of characters in the color value is not 6.', message);
        assert.equal(0, r);
        assert.equal(0, g);
        assert.equal(0, b);
    });
    it('R is not a number', function () {
        const [status, message, r, g, b] = checkColorValue('gu3456');
        assert.equal(-1, status);
        assert.equal('R is NaN.', message);
        assert.equal(0, r);
        assert.equal(0, g);
        assert.equal(0, b);
    });
    it('G is not a number', function () {
        const [status, message, r, g, b] = checkColorValue('34ju67');
        assert.equal(-1, status);
        assert.equal('G is NaN.', message);
        assert.equal(0, r);
        assert.equal(0, g);
        assert.equal(0, b);
    });
    it('B is not a number', function () {
        const [status, message, r, g, b] = checkColorValue('3457rm');
        assert.equal(-1, status);
        assert.equal('B is NaN.', message);
        assert.equal(0, r);
        assert.equal(0, g);
        assert.equal(0, b);
    });
});

describe('getTopsImgPath', function () {
    const getTopsImg = require('../api/app/type').getTopsImg;

    it('0', function () {
        const [typeStatus, typeMessage, imgPath] = getTopsImg(0);
        assert.equal(1, typeStatus);
        assert.equal('', typeMessage);
        assert.equal('./img/IMG_0771_c.PNG', imgPath);
    });
    it('1', function () {
        const [typeStatus, typeMessage, imgPath] = getTopsImg(1);
        assert.equal(1, typeStatus);
        assert.equal('', typeMessage);
        assert.equal('./img/IMG_0776_c.PNG', imgPath);
    });
    it('2', function () {
        const [typeStatus, typeMessage, imgPath] = getTopsImg(2);
        assert.equal(1, typeStatus);
        assert.equal('', typeMessage);
        assert.equal('./img/IMG_0769_c.PNG', imgPath);
    });
    it('-1', function () {
        const [typeStatus, typeMessage, imgPath] = getTopsImg(-1);
        assert.equal(-1, typeStatus);
        assert.equal('type is out of range.', typeMessage);
        assert.equal('', imgPath);
    });
    it('3', function () {
        const [typeStatus, typeMessage, imgPath] = getTopsImg(3);
        assert.equal(-1, typeStatus);
        assert.equal('type is out of range.', typeMessage);
        assert.equal('', imgPath);
    });
});

describe('getBottomsImg', function () {
    const getBottomsImg = require('../api/app/type').getBottomsImg;

    it('0', function () {
        const [typeStatus, typeMessage, imgPath] = getBottomsImg(0);
        assert.equal(1, typeStatus);
        assert.equal('', typeMessage);
        assert.equal('./img/IMG_0774_c.PNG', imgPath);
    });
    it('1', function () {
        const [typeStatus, typeMessage, imgPath] = getBottomsImg(1);
        assert.equal(1, typeStatus);
        assert.equal('', typeMessage);
        assert.equal('./img/IMG_0775_c.PNG', imgPath);
    });
    it('-1', function () {
        const [typeStatus, typeMessage, imgPath] = getBottomsImg(-1);
        assert.equal(-1, typeStatus);
        assert.equal('type is out of range.', typeMessage);
        assert.equal('', imgPath);
    });
    it('2', function () {
        const [typeStatus, typeMessage, imgPath] = getBottomsImg(2);
        assert.equal(-1, typeStatus);
        assert.equal('type is out of range.', typeMessage);
        assert.equal('', imgPath);
    });
});

describe('getShoesImg', function () {
    const getShoesImg = require('../api/app/type').getShoesImg;

    it('0', function () {
        const [typeStatus, typeMessage, imgPath] = getShoesImg(0);
        assert.equal(1, typeStatus);
        assert.equal('', typeMessage);
        assert.equal('./img/IMG_0773_c.PNG', imgPath);
    });
    it('-1', function () {
        const [typeStatus, typeMessage, imgPath] = getShoesImg(-1);
        assert.equal(-1, typeStatus);
        assert.equal('type is out of range.', typeMessage);
        assert.equal('', imgPath);
    });
    it('1', function () {
        const [typeStatus, typeMessage, imgPath] = getShoesImg(1);
        assert.equal(-1, typeStatus);
        assert.equal('type is out of range.', typeMessage);
        assert.equal('', imgPath);
    });
});