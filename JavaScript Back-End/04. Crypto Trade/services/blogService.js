const Crypto = require("../models/Blog");

async function updateById(crypto, data) { //checkValues
    crypto.name = data.name
    crypto.imageUrl = data.imageUrl
    crypto.price = data.price
    crypto.description = data.description
    crypto.payment = data.payment

    return crypto.save()
}

async function getAll(search) {
    const query = {}

    if (search) {
        //query.title = new RegExp(search, "i")

        //console.log(query)
    }

    return Crypto.find(query)
        //.sort({ createdAt: 1 })
        .lean()
}

async function getRecent() {
    return Crypto.find({}).sort({ userCount: -1 }).limit(3).lean()
}

async function createCrypto(crypto) {
    return Crypto.create(crypto)
}

async function getById(id) {
    return Crypto.findById(id).lean()
}

async function getByIdRaw(id) {
    return Crypto.findById(id)
}

async function getAll() {
    return Crypto.find({}).lean()
}

async function deleteById(id) {
    return Crypto.findByIdAndDelete(id)
}


async function enrollUser(crypto, userId) {
    crypto.users.push(userId)
    crypto.userCount++

    return crypto.save()
}

async function buyCrypto(cryptoId, userId) {
    const crypto = await Crypto.findById(cryptoId)

    crypto.buyACrypto.push(userId)
    await crypto.save()
}

async function getUserBuys(userId) {
    return await Crypto.find({ buys: userId }).lean()
}

module.exports = {
    getAll,
    getRecent,
    createCrypto,
    getById,
    getByIdRaw,
    getAll,
    deleteById,
    updateById,
    enrollUser,
    buyCrypto,
    getUserBuys
}