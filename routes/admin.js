const path = require("path");
const express = require("express");
const rootDirectoryPath = require("./../utils/path");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
    path: "/admin/add-product",
  });
  console.log(req.body);
  res.redirect("/");
});

module.exports = {
  routes: router,
  products: products,
};
