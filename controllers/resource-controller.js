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
            helpers.failedResponse(res, null, err.message);
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
            helpers.failedResponse(res, null, err.message);
        });
    }

    /* Retrieve one resource */
    getOne (req, res, next) {
        model.findByPk(req.params.id).then((resource)=>{
            helpers.successResponse(res, resource);
        }).catch((err)=>{
            helpers.failedResponse(res, null, err.message);
        });
    }

    /* Update one resource */
    updateOne (req, res, next) {
        model.findByPk(req.params.id).then((resource)=>{
            resource.update(req.params).then((resource)=>{
                helpers.successResponse(res, resource);
            }).catch((err)=>{
                helpers.failedResponse(res, null, err.message);
            });
        }).catch((err)=>{
            helpers.failedResponse(res, null, err.message);
        });
    }

    /* Delete one resource */
    deleteOne (req, res, next) {
        model.findByPk(req.params.id).then((resource)=>{
            resource.destroy().then((resource)=>{
                helpers.successResponse(res, resource);
            }).catch((err)=>{
                helpers.failedResponse(res, null, err.message);
            });
        }).catch((err)=>{
            helpers.failedResponse(res, null, err.message);
        });
    }

    static init (model) {
        return new this(model);
    }

    constructor (_model) {
        model = _model;
    }

    apiResources (router) {
        /* GET - retrieve resources listing. */
        router.get('/', this.getAll);

        /* POST - create resource. */
        router.post('/', this.createOne);

        /* GET - get resource by id. */
        router.get('/:id', this.getOne);

        /* PUT - update resource by id. */
        router.put('/:id', this.updateOne);

        /* DELETE - delete resource by id. */
        router.delete('/:id', this.deleteOne);
    }
}

module.exports = ResourceController;