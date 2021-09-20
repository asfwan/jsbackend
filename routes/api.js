var router = require('express').Router();
var UserController = require('../controllers/user-controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({
        api_status: "online"
    });
});

UserController.routes(router);

module.exports = router;
