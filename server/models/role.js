const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema(
  {
    role: { type: String },
  },
  { timestamps: true }
);

//Exporting the schema
module.exports = mongoose.model('role', roleSchema);
