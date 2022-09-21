const router = require('express').Router();

// Ruta donde se encuentra el CRUD de los USUARIOS
const UsuariosRouter = require('./views/UsuariosRouter');

//Definicion de Url para usuarios y el CRUD disponible para el mismo
router.use('/usuarios', UsuariosRouter);

//Exportamos el modulo al final para que sea accesible para index.js
module.exports = router;