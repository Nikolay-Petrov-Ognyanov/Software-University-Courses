const { getAll, getRecent } = require("../services/auctionService")

const homeController = require("express").Router()

homeController.get("/", async (req, res) => {
    res.render("home", {
        title: "Home Page",
        user: req.user //!!!
    })
})

// homeController.get("/search", async (req, res) => {
//     const auctions = await getAll()

//     res.render("search", {
//         title: "Search Page",
//         auctions
//     })
// })

// homeController.post("/search", async (req, res) => {
//     const getAllResult = await getAll(req.query.search)
//     const searchByName = req.body.name
//     const searchByPayment = req.body.payment
//     let resultArr = []

//     for (let obj of getAllResult) {
//         if (searchByName != "" &&
//             obj.name
//                 .toLowerCase()
//                 .includes(searchByName
//                     .toLowerCase()) ||
//             obj.payment
//                 .toLowerCase()
//                 .includes(searchByPayment
//                     .toLowerCase())) {
//             resultArr.push(obj)
//         }
//     }

//     res.render("search", {
//         title: "Search Page",
//         resultArr
//     })
// })

module.exports = homeController