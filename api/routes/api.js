var express = require('express');
var router = express.Router();

router.get('/img', function (req, res, next) {
    const imgChanger = require('../../image_changer');
    const [status, result] = imgChanger.imageChanger('./huku.PNG', 245, 242, 235);
    if (status == -1) {
        res.json({
            status: "error",
            data: result
        });
    } else {
        res.send('<img src="data:image/png;base64,' + result + '">');
    }
});

router.get('/test', function (req, res, next) {
    const imgChanger = require('../../image_changer');

    let type = "";
    let color = "";
    // NAMEパラメタが空でなければ画面に表示
    if (req.query.type) {
        type = req.query.type;
    } else {
        res.json({
            status: "error",
            message: "type is empty"
        });
    }
    if (req.query.color) {
        color = req.query.color;
    } else {
        res.json({
            status: "error",
            message: "color is empty"
        });
    }

    const [status, result] = imgChanger.imageChanger('./huku.PNG', r, 242, 235);
    if (status == -1) {
        res.json({
            status: "error",
            data: result
        });
    } else {
        res.send('<img src="data:image/png;base64,' + result + '">');
    }
});



module.exports = router;

