const helpers = require('../helpers');
const models = require('../models/index');
const User = models.User;

/* Retrieve all users */
const getAll = (req, res, next) => {
    User.findAll().then((users)=>{
        helpers.successResponse(res, users);
    }).catch((err)=>{
        msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
        helpers.failedResponse(res, null, msg);
    });
}

/* Retrieve all users */
const createOne = (req, res, next) => {
    helpers.init({req, res, next});
    User.create(helpers.params).then((user)=>{
        User.findByPk(user.id).then((user)=>{
            helpers.successResponse(res, user);
        })
    }).catch((err)=>{
        msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
        helpers.failedResponse(res, null, msg);
    });
}

/* Retrieve all users */
const getOne = (req, res, next) => {
    User.findByPk(req.params.userId).then((user)=>{
        helpers.successResponse(res, user);
    }).catch((err)=>{
        msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
        helpers.failedResponse(res, null, msg);
    });
}

/* Update one user */
const updateOne = (req, res, next) => {
    User.findByPk(req.params.userId).then((user)=>{
        user.update(req.params).then((user)=>{
            helpers.successResponse(res, user);
        }).catch((err)=>{
            msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
            helpers.failedResponse(res, null, msg);
        });
    }).catch((err)=>{
        msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
        helpers.failedResponse(res, null, msg);
    });
}

/* Delete one user */
const deleteOne = (req, res, next) => {
    User.findByPk(req.params.userId).then((user)=>{
        user.destroy().then((user)=>{
            helpers.successResponse(res, user);
        }).catch((err)=>{
            msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
            helpers.failedResponse(res, null, msg);
        });
    }).catch((err)=>{
        msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
        helpers.failedResponse(res, null, msg);
    });
}

module.exports = {
    getAll,
    createOne,
    getOne,
    updateOne,
    deleteOne,
}