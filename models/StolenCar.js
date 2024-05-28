const mongoose = require('mongoose');

const StolenCarSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    owner_last_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('StolenCar', StolenCarSchema);
