const express = require('express');
const router = express.Router();
const checkColorValue = require('../app/checkColorValue');
const checkTypeValue = require('../app/checkTypeValue');

router.get('/img', function (req, res, next) {
    const imgChanger = require('../../image_changer');
    const [imgSstatus, result] = imgChanger.imageChanger('./IMG_0769_c.PNG', 50, 50, 40);
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

    const [imgSstatus, result] = imgChanger.imageChanger('./IMG_0769_c.PNG', r, g, b);
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

