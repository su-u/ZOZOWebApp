const express = require('express');
const router = express.Router();

const checkTypeValue = (type) => {
    if (type) {
        return [1, '', type];
    } else {
        return [-1, 'type is empty.', ''];
    }
}

const checkColorValue = (color) => {
    if (!color) {
        return [-1, 'color is empty.', 0, 0, 0];
    }

    if (color.length != 6) {
        return [-1, 'The number of characters in the color value is not 6.', 0, 0, 0];
    }

    const segments = color.match(/.{2}/g);
    const r = parseInt(segments[0], 16);
    const g = parseInt(segments[1], 16);
    const b = parseInt(segments[2], 16);

    if (isNaN(r)) {
        return [-1, 'R is NaN.', 0, 0, 0];
    }
    if (r < 0 || r > 255) {
        return [-1, 'The value of R is out of range.', 0, 0, 0];
    }
    if (isNaN(g)) {
        return [-1, 'G is NaN.', 0, 0, 0];
    }
    if (g < 0 || g > 255) {
        return [-1, 'The value of G is out of range.', 0, 0, 0];
    }
    if (isNaN(b)) {
        return [-1, 'B is NaN.', 0, 0, 0];
    }
    if (b < 0 || b > 255) {
        return [-1, 'The value of B is out of range.', 0, 0, 0];
    }

    //OK
    return [1, '', r, g, b];
}

router.get('/img', function (req, res, next) {
    const imgChanger = require('../../image_changer');
    const [imgSstatus, result] = imgChanger.imageChanger('./IMG_0769 - コピー.PNG', 50, 50, 40);
    if (imgSstatus == -1) {
        res.status(400).json({
            status: 400,
            message: result,
            response: ''
        });
        return;
    } else {
        res.status(200).send('<img src="data: image / png; base64, ' + result + '">');
        return;
    }
});

router.get('/test', function (req, res, next) {
    const imgChanger = require('../../image_changer');

    const [typeStatus, typeMessage, type] = checkTypeValue(req.query.type);
    if (typeStatus == -1) {
        res.status(400).json({
            status: 400,
            message: typeMessage,
            response: ''
        });
        return;
    }

    const [colorStatus, colorMessage, r, g, b] = checkColorValue(req.query.color);
    if (colorStatus == -1) {
        res.status(400).json({
            status: 400,
            message: colorMessage,
            response: ''
        });
        return;
    }

    const [imgSstatus, result] = imgChanger.imageChanger('./huku.PNG', r, g, b);
    if (imgSstatus == -1) {
        res.status(400).json({
            status: 400,
            message: result,
            response: ''
        });
        return;
    } else {
        res.status(200).send('<img src="data: image / png; base64, ' + result + '">');
        return;
    }
});

module.exports = router;

