//TODO------IMPORT MODULES--------
const express = require("express");
let db = require("../db");
const app = express.Router();
//*TABLE PRIORITE (security)

//TODO------CREATE METHOD(POST)--------
app.get("/:id", function (req, res) {
  let selectionPriorite = "SELECT * FROM EQUIPE WHERE `EQUIPE`.`id_equipe`=  ?";
  let param = [req.params.id];
  db.query(selectionPriorite, param, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(rows);
    }
  });
});

module.exports = app;
