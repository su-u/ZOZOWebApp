var express = require('express');
var router = express.Router();

router.get('/img', function (req, res, next) {
    const imgChanger = require('../../image_changer');
    const img = imgChanger.imageChanger('../../huku.PNG',211,154,165);
    res.send("img");
});



module.exports = router;
