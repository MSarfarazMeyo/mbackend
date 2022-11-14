const Admin = require("../model/AdminModel");

const addadmin = async (req, res, next) => {
  let appdata;
  try {
    admindata = new Admin({
      email: req.body.email,
      password: req.body.password,
    });
    await admindata.save();
  } catch (err) {
    console.log(err);
  }

  if (!admindata) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ admindata });
};

const getadmin = async (req, res, next) => {
  let data;
  try {
    data = await Admin.find();
  } catch (err) {
    console.log(err);
  }

  if (!data) {
    return res.status(404).json({ message: "No data found" });
  }
  return res.status(200).json({ data });
};

// const getAll = async () => {
//   return AppData.find({})
//     .then((data) => {})
//     .catch((error) => {
//       throw error;
//     });
// };

exports.getadmin = getadmin;
exports.addadmin = addadmin;
