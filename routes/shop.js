const path = require("path");
const express = require("express");
const router = express.Router();

const rootDirectoryPath = require("./../utils/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDirectoryPath, "views", "shop.html"));
});

module.exports = router;
