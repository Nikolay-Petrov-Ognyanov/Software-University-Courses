const { Schema, model, Types } = require("mongoose")

const URL_PATTERN = /https?:\/\/./i

const bookSchema = new Schema({
    title: {
        type: String,
        minlength: [2, "Title must be at least 2 characters long"]
    },
    author: {
        type: String,
        minlength: [2, "Author name must be at least 5 characters long"]

    },
    genre: {
        type: String,
        minlength: [3, "Genre name must be at least 3 characters long"]
    },
    stars: {
        type: Number,
        min: [1, "Stars must be between 1 and 5 inclusively"],
        max: [5, "Stars must be between 1 and 5 inclusively"]
    },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: "Invalid URL"
        }
    },
    review: {
        type: String,
        minlength: [10, "Review must be at least 10 characters long"]
    },
    wishingList: { type: [Types.ObjectId], ref: "User", default: [] },
    owner: { type: [Types.ObjectId], ref: "User" }
})

bookSchema.index({ title: 1 }, {
    collation: {
        locale: "en",
        strength: 2
    }
})

const Book = model("Book", bookSchema)

module.exports = Book