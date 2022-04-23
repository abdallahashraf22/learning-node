const path = require("path");
const express = require("express");
const rootDirectoryPath = require("./../utils/path");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDirectoryPath, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(req.body);
  res.redirect("/");
});

module.exports = {
  routes: router,
  products: products,
};
