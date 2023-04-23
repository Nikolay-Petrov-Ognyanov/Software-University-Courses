const { Schema, model, Types } = require("mongoose")

const URL_PATTERN = /https?:\/\/./i

const blogSchema = new Schema({ //checkValues
    title: {
        type: String, required: true,
        minlength: [5, "Title should be at least 5 characters long"],
        maxlength: [50, "Title should be at most 50 characters long"]
    },
    imageUrl: {
        type: String, required: true,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: "Invalid URL"
        }
    },
    content: {
        type: String, required: true,
        minlength: [10, "Content should be at least 10 characters long"]
    },
    category: {
        type: String, required: true,
        minlength: [3, "Category should be at least 3 characters long"]
    },
    followList: { type: [Types.ObjectId], ref: "User", default: [] },
    owner: { type: [Types.ObjectId], ref: "User" }
})

blogSchema.index({ title: 1 }, {
    collation: {
        locale: "en",
        strength: 2
    }
})

const Blog = model("Blog", blogSchema)

module.exports = Blog