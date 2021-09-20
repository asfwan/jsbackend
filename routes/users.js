var router = require('express').Router();
var UserController = require('../controllers/user-controller');

/* GET - retrieve users listing. */
router.get('/', UserController.getAll);

/* POST - create user. */
router.post('/', UserController.createOne);

/* GET - get user by id. */
router.get('/:id', UserController.getOne);

/* PUT - update user. */
router.put('/:id', UserController.updateOne);

/* DELETE - delete user. */
router.delete('/:id', UserController.deleteOne);

module.exports = router;
