const { isOwner } = require("../middlewares/guards")
const preload = require("../middlewares/preload")
const { createAuction, getById, deleteById, updateById, buyAuction } = require("../services/auctionService")
const { parseError } = require("../util/parser")
const auctionController = require("express").Router()

auctionController.get("/create", (req, res) => {
    res.render("create", {
        title: "Create Auction"
    })
})

auctionController.get("/:id", preload(true), async (req, res) => {
    const auction = res.locals.auction

    if (req.user) {
        auction.isOwner = auction.author.toString() == req.user._id.toString()

        if (auction.isOwner == req.user._id) {
            auction.isOwner = true
        } else if (auction.bidder.map(buy => buy.toString()).includes(req.user._id.toString())) {
            auction.isBought = true
        }
        
        if (auction.isOwner) {
            res.render("details-owner", {
                title: auction.title,
                user: req.user,
                auction
            })
        } else {
            res.render("details-user", {
                title: auction.title,
                user: req.user,
                auction
            })
        }
    } else {
        res.render("details-guest", {
            title: auction.title,
            user: req.user,
            auction
        })
    }
})

auctionController.get("/:id/delete", preload(), isOwner(), async (req, res) => {
    await deleteById(req.params.id)
    res.redirect("/catalog")
})

auctionController.post("/create", async (req, res) => {
    const auction = { //checkValues
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        author: req.user._id,        
    }

    try {
        if (Object.values(auction).some(value => !value)) {
            throw new Error("All fields are required")
        }

        await createAuction(auction)
        res.redirect("/catalog") //redirect to?
    } catch (error) {
        console.log("error:", error)
        res.render("create", {
            title: "Create Auction Review",
            errors: parseError(error), // [0]
            body: auction
        })
    }
})

auctionController.get("/:id/edit", preload(true), isOwner(), async (req, res) => {
    const auction = res.locals.auction

    res.render("edit", {
        title: "Edit Auction",
        auction
    })
})

auctionController.post("/:id/edit", preload(), isOwner(), async (req, res) => {
    const auction = res.locals.auction
    const reqParamsId = req.params.id

    try {
        await updateById(auction, req.body)
        res.redirect(`/auction/${req.params.id}`)
    } catch (error) {
        req.body._id = reqParamsId
        res.render("edit", {
            title: "Edit Auction",
            errors: parseError(error), // [0]
            auction: req.body
        })
    }
})

auctionController.get("/:id/buy", async (req, res) => {
    const auction = await getById(req.params.id)

    try {
        if (auction.owner == req.user._id) {
            auction.isOwner = true

            throw new Error("Cannot buy your own auction")
        }

        if (auction.bidder.map(buy => buy.toString()).includes(req.user._id.toString())) {
            auction.isBought = true

            throw new Error("Cannot buy the same auction twice")
        }

        await buyAuction(req.params.id, req.user._id)
        res.redirect(`/auction/${req.params.id}`)
    } catch (error) {
        res.render("details", {
            title: auction.title,
            auction,
            errors: parseError(error) // [0]
        })
    }
})

module.exports = auctionController