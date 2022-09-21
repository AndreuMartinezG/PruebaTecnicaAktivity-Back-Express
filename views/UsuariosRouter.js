const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

//CRUD


//Login
router.post('/login', UsuarioController.logUsuario);


module.exports = router;