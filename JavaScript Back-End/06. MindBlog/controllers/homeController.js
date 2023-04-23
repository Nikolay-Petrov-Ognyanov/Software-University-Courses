const { getAll} = require("../services/blogService")

const homeController = require("express").Router()

homeController.get("/", async (req, res) => {
    const blogs = (await getAll()).slice(-3)

    res.render("home", {
        title: "Home Page",
        blogs,
        user: req.user
    })
})

homeController.get("/search", async (req, res) => {
    const blogs = await getAll()

    res.render("search", {
        title: "Search Page",
        blogs,
        user: req.user

    })
})

homeController.post("/search", async (req, res) => {
    const getAllResult = await getAll(req.query.search)
    const searchByName = req.body.name
    const searchByPayment = req.body.payment
    let resultArr = []

    for (let obj of getAllResult) {
        if (searchByName != "" &&
            obj.name
                .toLowerCase()
                .includes(searchByName
                    .toLowerCase()) ||
            obj.payment
                .toLowerCase()
                .includes(searchByPayment
                    .toLowerCase())) {
            resultArr.push(obj)
        }
    }

    res.render("search", {
        title: "Search Page",
        resultArr,
        user: req.user

    })
})

homeController.get("*", async (req, res) => {
    res.render("404", {
        title: "404 Page Not Found",
        user: req.user

    })
})

module.exports = homeController