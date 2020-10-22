//TODO------IMPORT MODULES--------
var mysql = require("mysql");

//TODO------CONNECT TO DB--------
const dbConexion = mysql.createConnection({
  host: "localhost",
  database: "tournoi_foot",
  password: "root",
  user: "root",
  port: 8889,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  strict: false,
});

//TODO------DATA RESPONSE--------
dbConexion.connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connection à la base réussie");
  }
});
module.exports = dbConexion;
