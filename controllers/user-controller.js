const helpers = require('../helpers');
const models = require('../models/index');
const User = models.User;

const getAll = (req, res, next) => {
    User.findAll().then((users)=>{
        res.send(users);
    });
}

const createOne = (req, res, next) => {
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
}

module.exports = {
    getAll,
    createOne,
}