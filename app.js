const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
// express
const express = require("express");
// routers
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFound = require("./controllers/notFoundController");
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(notFound.returnNotFound);

app.listen(1200);
