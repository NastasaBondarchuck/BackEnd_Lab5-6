const express = require('express');
const router = express.Router();
const StolenCar = require('../models/StolenCar');

// Create
router.post('/', async (req, res) => {
    try {
        const newCar = new StolenCar(req.body);
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all
router.get('/', async (req, res) => {
    try {
        const cars = await StolenCar.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read one
router.get('/:id', async (req, res) => {
    try {
        const car = await StolenCar.findById(req.params.id);
        if (car == null) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const updatedCar = await StolenCar.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedCar == null) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const car = await StolenCar.findByIdAndDelete(req.params.id);
        if (car == null) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(204).json({ message: 'Deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
