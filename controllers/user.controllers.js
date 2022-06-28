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


const user = {
    saveDataForm: (req, res) => {
        let nombre = 'Javier';
        let email = 'javier@gmail.com';
        let urlImg = 'https://s0.wklcdn.com/image_45/1359708/photo.jpg?1614632131798';
        let contrasena = 'Javier123*';
        let about = 'Me encantan las motos';
        let longitud = '42.32343435';
        let latitud = '-5.32343435';


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
            contrasena,
            about,
            longitud,
            latitud
        ]);

        connection.query(query, (err, data) => {
            if (err) throw err;
            console.log(data);

        });

        res.send("ok");
    },
    login: (req, res) => {
        loginEmail = 'Javi';
        passLog = 'Javier123*';

        if (loginEmail == "admin@admin.com" && passLog == "Admin123*") {
            res.render("admin");
        }

        let nameCorrect = `SELECT email,contrasena FROM Usuarios where email = '${loginEmail}'`;

        connection.query(nameCorrect, (err, rows) => {
            if (err) throw err;

            console.log('Usuario: \n', rows);
            then(function (result) {
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
                        logApellido = data[0].apellido;
                        logDni = data[0].dni;
                        logEmail = data[0].email;
                        logTelefono = data[0].telefono;
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