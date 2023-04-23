const { getAllByDate, getRecent } = require("../services/bookService")

const homeController = require("express").Router()

homeController.get("/", async (req, res) => {
    res.render("home", {
        title: "Home Page",
    })
})

module.exports = homeController