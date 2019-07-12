var express = require('express');
var router = express.Router();

router.get('/img', function (req, res, next) {
    const imgChanger = require('../../image_changer');
    const img = imgChanger.imageChanger('./huku.PNG', 245, 242, 165);
    res.send('<img src="data:image/png;base64,' + img + '">');
});



module.exports = router;

