const express = require("express");
const bodyParser = require("body-parser");

require("./db/conn");
const router = require("./routes/User_App_route");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api", router); // localhost:5000/appdata

app.use(express.static(__dirname + "/public"));
app.use("/logos", express.static("logos"));

app.listen(process.env.PORT || port, () => {
  console.log(`server start at port no ${port}`);
});
