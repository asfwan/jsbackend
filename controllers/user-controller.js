const helpers = require('../helpers');
const models = require('../models/index');
const User = models.User;

const getAll = (req, res, next) => {
    User.findAll().then((users)=>{
        helpers.successResponse(res, users);
    }).catch((err)=>{
        helpers.failedResponse(res, null, err.errors[0].message);
    });
}

const createOne = (req, res, next) => {
    helpers.init({req, res, next});
    User.create(helpers.params).then((user)=>{
        User.findByPk(user.id).then((user)=>{
            helpers.successResponse(res, user);
        })
    }).catch((err)=>{
        helpers.failedResponse(res, null, err.errors[0].message);
    });
}

const getOne = (req, res, next) => {
    User.findByPk(req.params.userId).then((user)=>{
        helpers.successResponse(res, user);
    }).catch((err)=>{
        helpers.failedResponse(res, null, err.errors[0].message);
    });
}

const updateOne = (req, res, next) => {
    User.update(req.params, {
        where:{
            id: req.userId
        }
    }).then((user)=>{
        User.findByPk(user.id).then((user)=>{
            helpers.successResponse(res, user);
        })
    }).catch((err)=>{
        helpers.failedResponse(res, null, err.errors[0].message);
    });
}

const deleteOne = (req, res, next) => {
    User.delete(req.params, {
        where:{
            id: req.userId
        }
    }).then((user)=>{
        helpers.successResponse(res, user);
    }).catch((err)=>{
        helpers.failedResponse(res, null, err.errors[0].message);
    });
}

module.exports = {
    getAll,
    createOne,
    getOne,
    updateOne,
    deleteOne,
}