var express = require('express');
var router = express.Router();

router.get('/img', function (req, res, next) {
  const imgChanger = require('../../image_changer.js');
  const img = imgChanger.imageChanger('../../huku.png',211,154,165);
  res.send("img");
});



module.exports = router;
