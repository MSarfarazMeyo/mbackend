const express = require("express");
const router = express.Router();
const appData = require("../model/User_App_Model");
const User_App_controller = require("../controllers/User_App_controller");

const admincontroller = require("../controllers/AdminController");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./logos");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("applogo"), User_App_controller.addAppData);
router.get("/", User_App_controller.getAll);

router.post("/admin", admincontroller.addadmin);
router.get("/admin", admincontroller.getadmin);

module.exports = router;
