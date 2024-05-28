const express = require('express');
const router = express.Router();
const StolenCar = require('../models/StolenCar');

// Виведення всіх записів у вигляді JSON
router.get('/cars', async (req, res) => {
    try {
        const cars = await StolenCar.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
