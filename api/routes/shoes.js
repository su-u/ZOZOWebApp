const express = require('express');
const router = express.Router();
const checkColorValue = require('../app/checkColorValue');
const checkTypeValue = require('../app/checkTypeValue');

router.get('/shoes', function (req, res, next) {
    const imgChanger = require('../app/image_changer');

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

    const [imgSstatus, result] = imgChanger.imageChanger('./img/IMG_0773_c.PNG', r, g, b);
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