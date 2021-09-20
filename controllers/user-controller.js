const helpers = require('../helpers');
const models = require('../models/index');
const User = models.User;
const ResourceController = require('./resource-controller');

class UserController extends ResourceController{
    
}

module.exports = UserController.init(User);