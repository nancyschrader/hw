const mongoose = require("mongoose");

const animalsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  color: { type: String, required: true },
  upForAdoption: Boolean
});

const Animal = mongoose.model("Animal", animalsSchema);

module.exports = Animal;