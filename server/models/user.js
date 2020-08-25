const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const persSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'role',
      },
    ],
  },
  { timestamps: true }
);

//Roles
//Super Admin
//Admin
//Staff
//users

//Exporting the schema
module.exports = mongoose.model('Person', persSchema);
