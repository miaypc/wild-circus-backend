const mongoose = require("mongoose");

const actSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
});

const ActSchema = mongoose.model("act", actSchema);
module.exports = ActSchema;
