var express = require('express');
var router = express.Router();

router.get('/img', function (req, res, next) {
    const imgChanger = require('../../image_changer');
    const [status, result] = imgChanger.imageChanger('./huku.PNG', 245, 242, 235);
    if (status == -1) {
        res.send(result)
    } else {
        res.send('<img src="data:image/png;base64,' + result + '">');
    }
});



module.exports = router;

