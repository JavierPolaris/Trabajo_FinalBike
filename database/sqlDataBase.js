/**
 * Conexion con la base de datos MySql
 */
 const mysql = require("mysql");
 const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "root1234",
   database: "bikeRelacional",
 });
 
 connection.connect((err) => {
   if (!err) {
     console.log("Conexion con la base de datos MySql realizada");
     //connection.end();
   } else {
     console.log("Conexion fallida" + JSON.stringify(err, undefined, 2));
   }
 });
 module.exports=connection  