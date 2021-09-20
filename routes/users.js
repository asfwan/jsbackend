var router = require('express').Router();
var UserController = require('../controllers/user-controller');

UserController.apiResources(router);

module.exports = router;
