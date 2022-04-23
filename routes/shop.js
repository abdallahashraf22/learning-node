const path = require("path");
const express = require("express");
const router = express.Router();

const rootDirectoryPath = require("./../utils/path");
const productsController = require("../controllers/addProductController");

router.get("/", productsController.getProducts);

module.exports = router;
