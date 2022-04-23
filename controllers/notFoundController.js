module.exports.returnNotFound = (req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "Ops...not found", path: "eqwef" });
};
