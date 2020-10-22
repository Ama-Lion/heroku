//TODO------IMPORT MODULES--------
const express = require("express");
const app = express();
const cors = require("cors");
const mysqlApostrophe = require("mysql-apostrophe");
const bodyParser = require("body-parser");

//TODO------IMPORT ROUTES--------
const getteams = require("./routes/read");
const createteam = require("./routes/create");
const updateteam = require("./routes/update");
const deleteteam = require("./routes/delete");
const readOneTeam = require("./routes/read-1");

//TODO------CREATE SERVER--------
var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});

//TODO------MIDDLEWARES--------
app.use(bodyParser.json());
app.use("/read", getteams);
app.use("/create", createteam);
app.use("/update", updateteam);
app.use("/delete", deleteteam);
app.use("/read/", readOneTeam);
app.use(mysqlApostrophe);
app.use(cors());

//TODO------------------------------------------//
//*  Lignes qui servent pour le déploiement  //
//TODO------------------------------------------//
// 1°) Créer une contante qui reçoit le module path
const path = require("path");
// 2°) Préciser que Express va chercher des infos dans le dossiers build
app.use(express.static(path.join(__dirname, "/build")));
// app.use(express.static("public"));
// 3°) Préciser que Express va chercher des app en utilisant le préfixe "/""
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//TODO------------------------------------------//
//*    Fin des lignes pour le déploiement    //
//TODO------------------------------------------//

//TODO------PORT LISTENING TO--------
app.listen(3002);
