const mongoose = require('mongoose');

const soldierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
});

const Soldier = mongoose.model('soldier', soldierSchema);

module.exports = Soldier;