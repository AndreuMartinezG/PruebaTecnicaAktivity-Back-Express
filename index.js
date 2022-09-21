const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3001;

const router = require('./router');

//CONFIGURO OPCIONES DE CORS PARA EVITAR BLOQUEO DEL NAVEGADOR
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware

app.use(express.json()); //PUEDO OBTENER JSON DEL BODY ENVIADO POR EL FRONTEND
app.use(cors(corsOptions));  //USO CORS
app.use(router);


//Seteando el puerto de escucha del backend
app.listen(PORT, ()=> {
    console.log(`Servidor arriba y funcionando en el puerto ${PORT}`);
});