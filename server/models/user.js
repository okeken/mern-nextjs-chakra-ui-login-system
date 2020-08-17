const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const persSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
  },
  { timestamps: true }
);

//Exporting the schema
module.exports = mongoose.model('Person', persSchema);
