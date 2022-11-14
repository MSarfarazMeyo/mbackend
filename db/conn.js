const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.5byu2dz.mongodb.net/userapplication?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.log("database not connected"));
