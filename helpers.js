const params = {};
const init = ({req, res, next}) => {
    if(req) Object.entries(req.query).forEach(q => {
        key = q[0];
        params[key] = req.params[key] ? req.params[key] : req.query[key];
    });
}

module.exports = {
    init,
    params
}