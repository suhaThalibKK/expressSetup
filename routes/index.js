var express = require('express');
var router = express.Router();
let abc;; // This is a comment
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
