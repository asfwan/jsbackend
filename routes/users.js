var router = require('express').Router();
var models = require('../models/index');
var helpers = require('../helpers');
var User = models.User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then((users)=>{
    res.send(users);
  });
});

router.post('/',function(req, res, next) {
  helpers.init({req, res, next});
  User.create({
    firstName: helpers.params.firstName,
    lastName: helpers.params.lastName,
    email: helpers.params.email
  }).then((user)=>{
    User.findByPk(user.id).then((user)=>{
      res.send(user);
    })
  })
});

module.exports = router;
