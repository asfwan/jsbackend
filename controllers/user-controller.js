const helpers = require('../helpers');
const models = require('../models/index');
const User = models.User;
const ResourceController = require('./resource-controller');

class UserController extends ResourceController{
    routes (router) {
        this.apiResources(router);
    constructor () {
        super({
            modelObject: User,
            resourceName: 'users'
        });
    }
}

module.exports = UserController.init();