//TODO------IMPORT MODULES--------
const express = require("express");
let db = require("../db");
const app = express.Router();
//*TABLE PRIORITE (security)

//TODO------CREATE METHOD(POST)--------
app.post("/", function (req, res) {
  let selectionPriorite = "INSERT INTO EQUIPE SET ?";
  let post = {
    nom_equipe: req.body.nom_equipe,
  };
  db.query(selectionPriorite, post, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
    } else {
      res.end("Team has been created!");
    }
  });
});

module.exports = app;
