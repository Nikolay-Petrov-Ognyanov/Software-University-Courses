const { isOwner } = require("../middlewares/guards")
const preload = require("../middlewares/preload")
const { createCrypto, getById, deleteById, editById, updateById, enrollUser, buyCrypto } = require("../services/blogService")
const { parseError } = require("../util/parser")
const cryptoController = require("express").Router()

cryptoController.get("/create", (req, res) => {
    res.render("create", {
        title: "Create Crypto"
    })
})

cryptoController.get("/:id", preload(true), async (req, res) => {
    const crypto = res.locals.crypto

    if (req.user) {
        crypto.isOwner = crypto.owner.toString() == req.user._id.toString()

        if (crypto.owner == req.user._id) {
            crypto.isOwner = true
        } else if (crypto.buyACrypto.map(buy => buy.toString()).includes(req.user._id.toString())) {
            crypto.isBought = true
        }
        
        if (crypto.isOwner) {
            res.render("details-isOwner", {
                title: crypto.title,
                user: req.user,
                crypto
            })
        } else {
            res.render("details-isUser", {
                title: crypto.title,
                user: req.user,
                crypto
            })
        }
    } else {
        res.render("details-isGuest", {
            title: crypto.title,
            user: req.user,
            crypto
        })
    }
})

cryptoController.get("/:id/delete", preload(), isOwner(), async (req, res) => {
    await deleteById(req.params.id)
    res.redirect("/catalog")
})

cryptoController.post("/create", async (req, res) => {
    const crypto = { //checkValues
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        description: req.body.description,
        payment: req.body.payment,
        //buyCrypto: req.body.buyACrypto,
        owner: req.user._id,
    }

    try {
        if (Object.values(crypto).some(value => !value)) {
            throw new Error("All fields are required")
        }

        await createCrypto(crypto)
        res.redirect("/catalog") //redirect to?
    } catch (error) {
        console.log(error)
        res.render("create", {
            title: "Create Crypto Review",
            errors: parseError(error)[0], // [0]
            body: crypto
        })
    }
})

cryptoController.get("/:id/edit", preload(true), isOwner(), async (req, res) => {
    const crypto = res.locals.crypto

    res.render("edit", {
        title: "Edit Crypto",
        crypto
    })
})

cryptoController.post("/:id/edit", preload(), isOwner(), async (req, res) => {
    const crypto = res.locals.crypto
    const reqParamsId = req.params.id

    try {
        await updateById(crypto, req.body)
        res.redirect(`/crypto/${req.params.id}`)
    } catch (error) {
        req.body._id = reqParamsId
        res.render("edit", {
            title: "Edit Crypto",
            errors: parseError(error)[0], //[0]
            crypto: req.body
        })
    }
})

cryptoController.get("/:id/buy", async (req, res) => {
    const crypto = await getById(req.params.id)

    try {
        if (crypto.owner == req.user._id) {
            crypto.isOwner = true

            throw new Error("Cannot buy your own crypto")
        }

        if (crypto.buyACrypto.map(buy => buy.toString()).includes(req.user._id.toString())) {
            crypto.isBought = true

            throw new Error("Cannot buy the same crypto twice")
        }

        await buyCrypto(req.params.id, req.user._id)
        res.redirect(`/crypto/${req.params.id}`)
    } catch (error) {
        res.render("details", {
            title: crypto.title,
            crypto,
            errors: parseError(error)[0]
        })
    }
})

module.exports = cryptoController