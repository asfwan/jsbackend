'use strict';

const helpers = require('../helpers');
// const models = require('../models/index');
// const User = models.User;
let model;

class ResourceController{
    /* Retrieve all resources */
    getAll (req, res, next) {
        model.findAll().then((resources)=>{
            helpers.successResponse(res, resources);
        }).catch((err)=>{
            let msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
            helpers.failedResponse(res, null, msg);
        });
    }

    /* Create one resource */
    createOne (req, res, next) {
        helpers.init({req, res, next});
        model.create(helpers.params).then((resource)=>{
            model.findByPk(resource.id).then((resource)=>{
                helpers.successResponse(res, resource);
            })
        }).catch((err)=>{
            let msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
            helpers.failedResponse(res, null, msg);
        });
    }

    /* Retrieve one resource */
    getOne (req, res, next) {
        model.findByPk(req.params.id).then((resource)=>{
            helpers.successResponse(res, resource);
        }).catch((err)=>{
            let msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
            helpers.failedResponse(res, null, msg);
        });
    }

    /* Update one resource */
    updateOne (req, res, next) {
        model.findByPk(req.params.id).then((resource)=>{
            resource.update(req.params).then((resource)=>{
                helpers.successResponse(res, resource);
            }).catch((err)=>{
                let msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
                helpers.failedResponse(res, null, msg);
            });
        }).catch((err)=>{
            let msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
            helpers.failedResponse(res, null, msg);
        });
    }

    /* Delete one resource */
    deleteOne (req, res, next) {
        model.findByPk(req.params.id).then((resource)=>{
            resource.destroy().then((resource)=>{
                helpers.successResponse(res, resource);
            }).catch((err)=>{
                let msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
                helpers.failedResponse(res, null, msg);
            });
        }).catch((err)=>{
            let msg = err && err.errors && err.errors[0] ? err.errors[0].message : err.errors;
            helpers.failedResponse(res, null, msg);
        });
    }

    static init (model) {
        return new ResourceController(model);
    }

    constructor (_model) {
        model = _model;
    }

    crudFunctions () {
        return this;
    }
}

module.exports = ResourceController;