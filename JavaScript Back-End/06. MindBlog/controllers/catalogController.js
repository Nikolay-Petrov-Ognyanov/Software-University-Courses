const { getAll } = require("../services/blogService")

const catalogController = require("express").Router()

catalogController.get("/", async (req, res) => {
    const blogs = await getAll()

    res.render("catalog", {
        title: "Blog Catalog", //check name
        blogs,
        user: req.user
    })
})

module.exports = catalogController