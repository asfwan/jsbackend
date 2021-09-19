var router = require('express').Router();
var UserController = require('../controllers/user-controller');

/* GET - retrieve users listing. */
router.get('/', UserController.getAll);

/* POST - create user. */
router.post('/', UserController.createOne);

/* GET - get user by id. */
router.get('/:userId', UserController.getOne);

/* PUT - update user. */
router.put('/:userId', UserController.updateOne);

/* DELETE - delete user. */
router.delete('/:userId', UserController.deleteOne);

module.exports = router;
