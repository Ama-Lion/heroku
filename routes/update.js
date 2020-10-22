//TODO------IMPORT MODULES--------
const express = require("express");
let db = require("../db");
const app = express.Router();

//TODO------CREATE METHOD(PUT)--------
app.put("/", function (req, res) {
  let selectionPriorite =
    "UPDATE EQUIPE SET `nom_equipe`=? where `id_equipe`=?";
  let put = [req.body.nom_equipe, req.body.id_equipe];
  db.query(selectionPriorite, put, (err, results, fields) => {
    if (err) {
      res.send(err.message);
    } else {
      res.end("Team has been updated!");
    }
  });
});

app.put("/updateplayer", function (req, res) {
  let selectionPriorite =
    "UPDATE `JOUEUR` SET `nom_joueur` = ? where `id_joueur` = ?";
  let put = [req.body.nom_joueur, req.body.id_joueur];
  db.query(selectionPriorite, put, (err, results, fields) => {
    if (err) {
      res.send(err.message);
    } else {
      res.end("User has been updated!");
    }
  });
});

module.exports = app;
