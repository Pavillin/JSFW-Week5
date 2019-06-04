var express = require('express');
var router = express.Router();

/* GET articles listing. */
router.get('/', async(req, res) => {
  const articles = await Article.find();

  //res.json(articles); //respond back with our articles in json format
  res.render('articles/list', {articles});
});

module.exports = router;
