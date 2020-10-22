//TODO------IMPORT MODULES--------
const express = require("express");
let db = require("../db");
const app = express.Router();

//TODO------CREAT METHOD(DELETE)--------
app.delete("/", function (req, res) {
  let selectionPriorite = "DELETE FROM `EQUIPE` WHERE `EQUIPE`.`id_equipe` =?";
  let del = [req.body.id_equipe];
  db.query(selectionPriorite, del, (err, results, fields) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(results);
    }
  });
});

module.exports = app;
