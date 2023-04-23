const { getById, getByIdRaw } = require("../services/blogService")

module.exports = (lean) => async (req, res, next) => {
    if (lean) {
        res.locals.crypto = await getById(req.params.id)
    } else {
        res.locals.crypto = await getByIdRaw(req.params.id)
    }

    next()
}