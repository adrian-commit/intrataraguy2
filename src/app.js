//Invocamos a express
const express = require('express');
const app = express();
//Requerimos el metodo resolve desectructurando del modulo path
const {resolve} = require("path");
//Requerimiento de session
const session = require('express-session');

//llamado middlewares
const userLogged = require('./middlewares/userLogged');

//Se corre el puerto
app.listen(5000, (req, res)=>{
    console.log('SERVER RUNNING IN http://localhost:5000');
})
//establecemos en motor de plantillas ejs
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname , './views'));


//el directorio public
app.use('/resources', express.static(resolve('public')));


/* app.use('/resources', express.static(resolve(__dirname + 'public'))); */
//seteamos urlencoded para CAPTURAR los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Configuracion de las variables de session
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

//middlewares aplicacion
app.use(userLogged);


//Estableciendo las rutas
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/tareas', require('./routes/works'));
app.use('/clientes', require('./routes/clientes'));


//3-Invocamos a dotenv
/*const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});*/


//función para limpiar la caché luego del logout
/* app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
}); */





