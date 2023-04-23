const Auction = require("../models/Auction");

async function updateById(auction, data) { //checkValues
    auction.name = data.name
    auction.imageUrl = data.imageUrl
    auction.price = data.price
    auction.description = data.description
    auction.payment = data.payment

    return auction.save()
}

async function getAll(search) {
    const query = {}

    if (search) {
        //query.title = new RegExp(search, "i")

        //console.log(query)
    }

    return Auction.find(query)
        //.sort({ createdAt: 1 })
        .lean()
}

async function getRecent() {
    return Auction.find({}).sort({ userCount: -1 }).limit(3).lean()
}

async function createAuction(auction) {
    return Auction.create(auction)
}

async function getById(id) {
    return Auction.findById(id).lean()
}

async function getByIdRaw(id) {
    return Auction.findById(id)
}

async function getAll() {
    return Auction.find({}).lean()
}

async function deleteById(id) {
    return Auction.findByIdAndDelete(id)
}


async function enrollUser(auction, userId) {
    auction.users.push(userId)
    auction.userCount++

    return auction.save()
}

async function buyAuction(auctionId, userId) {
    const auction = await Auction.findById(auctionId)

    auction.bidder.push(userId)
    await auction.save()
}

async function getUserBuys(userId) {
    return await Auction.find({ buys: userId }).lean()
}

module.exports = {
    getAll,
    getRecent,
    createAuction,
    getById,
    getByIdRaw,
    getAll,
    deleteById,
    updateById,
    enrollUser,
    buyAuction,
    getUserBuys
}