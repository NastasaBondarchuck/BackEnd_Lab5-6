const express = require('express');
const router = express.Router();
const StolenCar = require('../models/StolenCar');

// Головна сторінка з переліком автомобілів
router.get('/', async (req, res) => {
    try {
        const cars = await StolenCar.find();
        res.render('index', { cars });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Сторінка з інформацією про один автомобіль
router.get('/car/:id', async (req, res) => {
    try {
        const car = await StolenCar.findById(req.params.id);
        if (!car) {
            return res.status(404).send('Car not found');
        }
        res.render('car', { car });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/add', async (req,res) => {
    res.render('add')
})

router.post('/add', async (req, res) => {
    try {
        const new_car = await StolenCar.create(req.body);
        res.redirect(`/car/${new_car._id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// Сторінка редагування автомобіля
router.get('/car/:id/edit', async (req, res) => {
    try {
        const car = await StolenCar.findById(req.params.id);
        if (!car) {
            return res.status(404).send('Car not found');
        }
        res.render('editCar', { car });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Обробка редагування автомобіля
router.post('/car/:id/edit', async (req, res) => {
    try {
        const updatedCar = await StolenCar.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect(`/car/${updatedCar._id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Сторінка видалення автомобіля
router.get('/car/:id/delete', async (req, res) => {
    try {
        const car = await StolenCar.findById(req.params.id);
        if (!car) {
            return res.status(404).send('Car not found');
        }
        res.render('deleteCar', { car });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Обробка видалення автомобіля
router.post('/car/:id/delete', async (req, res) => {
    try {
        await StolenCar.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
