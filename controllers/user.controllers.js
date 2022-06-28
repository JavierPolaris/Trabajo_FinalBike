/**
 * @author Javier García-Rojo
 */

/**
 * Llamamos a las librerias de mongoose y sql
 */

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const mongoose = require("mongoose");
const connection = require("../database/sqlDataBase");
const mysql = require("mysql");
const bcrypt = require("bcrypt");


const user = {
    saveDataForm: (req, res) => {
        let nombre = req.body.nombre;
        let email = req.body.email;
        let urlImg = req.body.urlImg;
        let contrasena = req.body.contrasena;
        let about = req.body.about;
        let longitud = req.body.longitud;
        let latitud = req.body.latitud;

        const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);
        const passExp = new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
        );
        /**
* Aqui comprobamos si los datos que introduce el usuario son correctos o no
* si lo son se introducen en la base de datos, y si no lo son le indicamos a el usuario que son
* incorrectos
*/
        if (
            !nameExp.test(nombre) ||
            !passExp.test(contrasena)

        ) {
            console.log("campos incorrectos"); //renderizar una pagina de campos incorrectos
        } else {
            bcrypt.hash(contrasena, 10, (err, palabraSecretaEncriptada) => {
                if (err) {
                    console.log("Error hasheando:", err);
                } else {
                    console.log("Y hasheada es: " + palabraSecretaEncriptada);
                    palabraEncriptada = palabraSecretaEncriptada;

                    let insertQuery = `INSERT INTO Usuarios
       (
           nombre, email, urlImg ,contrasena, about, longitud, latitud
       )
       VALUES
       (
           ?, ?, ?, ?, ?, ?, ?
       )`;

                    let query = mysql.format(insertQuery, [
                        nombre,
                        email,
                        urlImg,
                        palabraEncriptada,
                        about,
                        longitud,
                        latitud
                    ]);

                    connection.query(query, (err, data) => {
                        if (err) throw err;
                        console.log(data);

                    });

                    res.send("ok");
                }
            });
        }
    },


    login: (req, res) => {
        
        loginEmail = req.body.loginEmail;
        passLog = req.body.passLog;

        // if (loginEmail == "admin@admin.com" && passLog == "Admin123*") {
        //     res.render("admin");
        // }
        console.log(loginEmail);
        let nameCorrect = `SELECT email,contrasena FROM Usuarios where email = '${loginEmail}'`;

        connection.query(nameCorrect, (err, rows) => {
            if (err) throw err;

            console.log('Usuario: \n', rows);
            bcrypt.compare(passLog, rows[0].contrasena).then(function (result) {
            
                // result == true
                if (result && rows[0].email == loginEmail) {
                    console.log("Usuario correcto");
                    let selectQuery = "SELECT * FROM ?? WHERE ?? = ?";

                    let query3 = mysql.format(selectQuery, [
                        "Usuarios",
                        "email",
                        loginEmail,
                    ]);
                    console.log("selectQuery" + selectQuery);
                    console.log("query3" + query3);
                    connection.query(query3, (err, data) => {
                        if (err) throw err;
                        console.log(data);
                        logNombre = data[0].nombre;
                        logEmail = data[0].email;
                        logUrlImg = data[0].urlImg;
                        logContrasena = data[0].contrasena;
                        logAbout = data[0].about;
                        logLong = data[0].longitud;
                        logLat = data[0].latitud;
                    });

                } else {
                    console.log("contraseña incorrecta");
                }

            });
        })
        res.send("ok-Login");

    },





}

module.exports = user;