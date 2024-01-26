const { Schema, model } = require('mongoose');

module.exports.Profile = model('Profile', Schema({
    user: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref: "User"
    },
    phone: String,
    address1: String,
    address2: String,
    city: String,
    postcode: Number,
    country: String,
}))