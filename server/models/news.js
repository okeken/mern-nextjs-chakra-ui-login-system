const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    title: { type: String },
    subTitle: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

//Exporting the schema
module.exports = mongoose.model('News', newsSchema);
