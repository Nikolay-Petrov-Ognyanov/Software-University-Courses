const { getById, getByIdRaw } = require("../services/blogService")

module.exports = (lean) => async (req, res, next) => {
    if (lean) {
        res.locals.blog = await getById(req.params.id)
    } else {
        res.locals.blog = await getByIdRaw(req.params.id)
    }

    next()
}