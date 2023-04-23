const { getUserBuys, getById } = require("../services/auctionService")

const profileController = require("express").Router()

profileController.get("/", async (req, res) => {
    const user = req.user
    const buys = await getUserBuys(req.params.id)
    
    res.render("profile", {
        title: "Profile Page",
        user,
        buys
    })
})

module.exports = profileController