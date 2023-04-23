const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username: { // hasUsername?
        type: String, required: true, unique: true,
        //minlength: [4, "Username must be at least 4 characters long"]
    },
    email: { // hasEmail? 
        type: String, required: true,
        //minlength: [10, "Email must be at least 10 characters long"]
    },
    hashedPassword: { type: String, required: true }
})

userSchema.index({ username: 1 }, { // hasUsername?
    collation: {
        locale: "en",
        strength: 2
    }
})

userSchema.index({ email: 1 }, { // hasEmail?
    collation: {
        locale: "en",
        strength: 2
    }
})

const User = model("User", userSchema)

module.exports = User