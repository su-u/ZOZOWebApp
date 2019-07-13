var express = require('express');
var router = express.Router();

const checkTypeValue = (type) => {
    if (type) {
        return [1, ""];
    } else {
        return [-1, "type is empty."];
    }
}

router.get('/img', function (req, res, next) {
    const imgChanger = require('../../image_changer');
    const [status, result] = imgChanger.imageChanger('./huku.PNG', 245, 242, 235);
    if (status == -1) {
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

    let type = '';
    let color = '';

    //空チェック
    [status, message] = checkTypeValue(req.query.type);
    if (status == -1) {
        res.status(400).json({
            status: 400,
            message: message,
            response: ''
        });
        return;
    }

    if (req.query.color) {
        color = req.query.color;
    } else {
        res.status(400).json({
            status: 400,
            message: 'color is empt.',
            response: ''
        });
        return;
    }

    const is6characters = color.length == 6;
    if (!is6characters) {
        res.status(400).json({
            status: 400,
            message: 'The number of characters in the color value is not 6.',
            response: ''
        });
        return;
    }

    const segments = color.match(/.{2}/g);
    let r = segments[0];
    let g = segments[1];
    let b = segments[2];


    const [status, result] = imgChanger.imageChanger('./huku.PNG', 120, 242, 235);
    if (status == -1) {
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

