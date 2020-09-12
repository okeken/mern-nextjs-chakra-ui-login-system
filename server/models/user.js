const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roles = ['superAdmin', 'admin', 'staff', 'journalist', 'user'];

const persSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: {
      type: String,
      enum: roles,
    },
  },
  { timestamps: true }
);

//Exporting the schema
module.exports = mongoose.model('Person', persSchema);
