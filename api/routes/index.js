const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/index.html');
});

module.exports = router;
