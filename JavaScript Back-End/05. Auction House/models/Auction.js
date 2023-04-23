const { Schema, model, Types } = require("mongoose")

const URL_PATTERN = /https?:\/\/./i

const auctionSchema = new Schema({ //checkValues
    title: {
        type: String, required: true, 
        minlength: [4, "The title should be a minimum of 4 characters long"]
    },
    description: {
        type: String,
        maxlength: [200, "The description should be a maximum of 200 characters long "]
    },
    category: {
        type: String, required: true
    },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: "Invalid URL"
        }
    },
    price: {
        type: Number, required: true,
        min: [0.01, "Price should be a positive number"]
    },
    author: { type: [Types.ObjectId], ref: "User" },
    bidder: { type: [Types.ObjectId], ref: "User" }
})

auctionSchema.index({ title: 1 }, {
    collation: {
        locale: "en",
        strength: 2
    }
})

const Auction = model("Auction", auctionSchema)

module.exports = Auction