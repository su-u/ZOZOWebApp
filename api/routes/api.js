var express = require('express');
var router = express.Router();

router.get('/img', function (req, res, next) {
    const imgChanger = require('../../image_changer');
    const [status, result] = imgChanger.imageChanger('./huku.PNG', 245, 242, 235);
    if (status == -1) {
        res.json({
            status: 400,
            message: result,
            response: ""
        });
    } else {
        res.send('<img src="data:image/png;base64,' + result + '">');
    }
});

router.get('/test', function (req, res, next) {
    const imgChanger = require('../../image_changer');

    let type = "";
    let color = "";

    //空チェック
    if (req.query.type) {
        type = req.query.type;
    } else {
        res.json({
            status: 400,
            message: "type is empty.",
            response: ""
        });
    }
    if (req.query.color) {
        color = req.query.color;
    } else {
        res.json({
            status: 400,
            message: "color is empt.",
            response: ""
        });
    }

    //値チェック
    if (color.length != 6) {
        res.json({
            status: 400,
            message: "The number of characters in the color value is not 6.",
            response: ""
        });
    }



    const [status, result] = imgChanger.imageChanger('./huku.PNG', 120, 242, 235);
    if (status == -1) {
        res.json({
            status: 400,
            message: result,
            response: ""
        });
    } else {
        res.send('<img src="data:image/png;base64,' + result + '">');
    }
});



module.exports = router;

