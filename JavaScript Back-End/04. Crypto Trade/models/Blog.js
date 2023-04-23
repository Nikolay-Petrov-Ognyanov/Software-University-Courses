const { Schema, model, Types } = require("mongoose")

const URL_PATTERN = /https?:\/\/./i

const cryptoSchema = new Schema({ //checkValues
    name: {
        type: String,
        minlength: [2, "Title must be at least 2 characters long"]
    },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: "Invalid URL"
        }
    },
    price: {
        type: Number,
        min: [0.01, "Price should be a positive number"]
    },
    description: {
        type: String,
        minlength: [10, "Description should be at least 10 characters long"]
    },
    payment: { type: String },
    buyACrypto: { type: [Types.ObjectId], ref: "User", default: [] },
    owner: { type: [Types.ObjectId], ref: "User" }
})

cryptoSchema.index({ title: 1 }, {
    collation: {
        locale: "en",
        strength: 2
    }
})

const Crypto = model("Crypto", cryptoSchema)

module.exports = Crypto