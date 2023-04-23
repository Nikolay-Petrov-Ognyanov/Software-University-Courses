const { getAll } = require("../services/cryptoService")

const catalogController = require("express").Router()

catalogController.get("/", async (req, res) => {
    const cryptos = await getAll()

    res.render("catalog", {
        title: "All Crypto Page", //check name
        cryptos
    })
})

module.exports = catalogController