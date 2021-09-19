var router = require('express').Router();
var UserController = require('../controllers/user-controller');

/* GET users listing. */
router.get('/', UserController.getAll);
router.post('/', UserController.createOne);

module.exports = router;
