var express = require('express');
var router = express.Router();

/* GET articles listing. */
router.get('/', function(req, res) {
  res.send('Working');
});

module.exports = router;
