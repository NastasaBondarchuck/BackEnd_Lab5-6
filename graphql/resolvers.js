const StolenCar = require('../models/StolenCar');

const resolvers = {
  getCar: async ({ id }) => {
    return await StolenCar.findById(id);
  },
  getCars: async () => {
    return await StolenCar.find();
  },
  createCar: async ({ number, brand, status, owner_last_name }) => {
    const newCar = new StolenCar({ number, brand, status, owner_last_name });
    return await newCar.save();
  },
  updateCar: async ({ id, number, brand, status, owner_last_name }) => {
    return await StolenCar.findByIdAndUpdate(id, { number, brand, status, owner_last_name }, { new: true });
  },
  deleteCar: async ({ id }) => {
    return await StolenCar.findByIdAndDelete(id);
  }
};

module.exports = resolvers;
