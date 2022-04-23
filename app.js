const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
// express
const express = require("express");
// routers
const adminData = require("./routes/admin");
const shop = require("./routes/shop");
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);
app.use(shop);
app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "Ops...not found", path: "eqwef" });
});

app.listen(1200);
