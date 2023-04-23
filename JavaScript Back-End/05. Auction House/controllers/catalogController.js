const { getAll } = require("../services/auctionService")

const catalogController = require("express").Router()

catalogController.get("/", async (req, res) => {
    const auctions = await getAll()

    res.render("browse", {
        title: "Browse Auctions", //check name
        auctions
    })
})

module.exports = catalogController