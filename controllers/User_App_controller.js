const AppData = require("../model/User_App_Model");

const addAppData = async (req, res, next) => {
  let appdata;
  try {
    appdata = new AppData({
      apptheme: req.body.apptheme,
      applogo: req.file.path,
      appname: req.body.appname,
      appcolor: req.body.appcolor,
      appheadline: req.body.appheadline,
      appcaption: req.body.appcaption,
      appsubdomain: req.body.appsubdomain,
    });
    await appdata.save();
  } catch (err) {
    console.log(err);
  }

  if (!appdata) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ appdata });
};

const getAll = async (req, res, next) => {
  let data;
  try {
    data = await AppData.find();
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

exports.getAll = getAll;
exports.addAppData = addAppData;
