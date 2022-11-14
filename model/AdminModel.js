const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminschema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("Admin", adminschema);

// books
