//Llamamos al .json con la info de los usuarios en el leaderboard para devolverla al front cuando el usuario realice el Login a modo de respuesta de la BD.
const data = require('../data/users.json');

const UsuarioController = {};

//Funciones del controlador de usuarios

//Login de un usuario registrado
UsuarioController.logUsuario = (req, res) => {

    let correo = req.body.email;
    let password = req.body.password;
    let correoGuardado = "jhon.smith@akapp.test";
    let passwordGuardado = "enjoyfirst";

    if ( correoGuardado != correo || passwordGuardado != password) {

        //Credenciales incorrectas, enviamos "401 unauthorized" mas un msg y el codigo de estatus 0 al deberse a un error.
        res.status(401).json({ 
            msg: "Usuario o contraseña inválidos", 
            status: 0 
        });

    } else {

        //Las credenciales son correctas
        res.status(200).json({
            data: data,
            name : "Jhon",
            surname : "Smith",
            status : 1
        })

    };

};


module.exports = UsuarioController;