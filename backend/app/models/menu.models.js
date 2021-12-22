const mongoose = require('mongoose');

const Menu = mongoose.model('Menu', new mongoose.Schema({

    meal1: { type: String, required: true },
    meal2: { type: String, required: true },
    meal3: { type: String, required: true },
    meal4: { type: String, required: true },
    type: { type: String, required: true },
    //description: { type: String },
    dateM: { type: Date, required: [true, "Date filed is required"] }

}), )


module.exports = { Menu };