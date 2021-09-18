var router = require('express').Router();
var models = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.send({
    api_status: "online"
  });
  
});

module.exports = router;
