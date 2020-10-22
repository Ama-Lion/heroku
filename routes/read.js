//TODO------IMPORT MODULES--------
const express = require("express");
let db = require("../db");
const app = express.Router();

//TODO------CRETE METHOD(GET)--------
app.get("/", function (req, res) {
  let selectionPriorite = "SELECT * FROM EQUIPE";
  db.query(selectionPriorite, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(rows);
    }
  });
});

module.exports = app;
