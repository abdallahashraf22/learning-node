const path = require("path");
const express = require("express");
const rootDirectoryPath = require("./../utils/path");
const router = express.Router();
const addProcutController = require("../controllers/addProductController");

router.get("/add-product", addProcutController.getAddProduct);

router.post("/add-product", addProcutController.postAddProduct);

module.exports = router;
