var express = require('express');
var router = express.Router();

router.get('/img', function (req, res, next) {
    const imgChanger = require('../../image_changer');
    const [status, result] = imgChanger.imageChanger('./huku.PNG', 245, 242, 235);
    if (status == -1) {
        res.json({
            message: status,
            data: result
        })
    } else {
        res.send('<img src="data:image/png;base64,' + result + '">');
    }
});

router.get('/test', function (req, res, next) {
    const imgChanger = require('../../image_changer');

    let type = "";
    let r;
    // NAMEパラメタが空でなければ画面に表示
    if (req.query.type) {
        type = req.query.type;
    }
    if (req.query.r) {
        r = req.query.r;
    }

    const [status, result] = imgChanger.imageChanger('./huku.PNG', r, 242, 235);
    if (status == -1) {
        res.send(result)
    } else {
        res.send('<img src="data:image/png;base64,' + result + '">');
    }
});



module.exports = router;

