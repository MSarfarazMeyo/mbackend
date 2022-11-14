const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appSchema = new Schema({
  apptheme: {
    type: String,
  },
  applogo: {
    type: String,
  },
  appname: {
    type: String,
  },
  appcolor: {
    type: String,
    default: null,
  },
  appheadline: {
    type: String,
  },
  appcaption: {
    type: String,
  },
  appsubdomain: {
    type: String,
  },
});

module.exports = mongoose.model("AppData", appSchema);

// books
