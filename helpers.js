const params = {};

const init = ({req, res, next}) => {
    if(req) Object.entries(req.query).forEach(q => {
        key = q[0];
        params[key] = req.params[key] ? req.params[key] : req.query[key];
    });
}

const successResponse = (res, data, status, responseCode) => {
    return res
    .status(responseCode ? responseCode : 200)
    .send({
        success: true,
        data,
        status,
    });
}

const failedResponse = (res, data, status, responseCode) => {
    return res.send({
        success: false,
        data,
        status,
    });
}

module.exports = {
    init,
    params,
    successResponse,
    failedResponse,
}