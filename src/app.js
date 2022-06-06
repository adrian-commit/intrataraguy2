//1-Invocamos a express
const express = require('express');
const app = express();

//2-Requerimos el metodo resolve desectructurando del modulo path
const {resolve} = require("path");

//llamado middlewares
const userLogged = require('./middlewares/userLogged');

//3-seteamos urlencoded para CAPTURAR los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//4-el directorio public
app.use('/resources', express.static(resolve('public')));
/* app.use('/resources', express.static(resolve(__dirname + 'public'))); */

//5 - establecemos en motor de plantillas ejs
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname , './views'));

//6- invocamos al modulo para hacer el hashin de password, el modulo bcryptjs
const bcryptjs = require('bcryptjs');

//7-Configuracion de las variables de seccion
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

//Se corre el puerto
app.listen(5000, (req, res)=>{
    console.log('SERVER RUNNING IN http://localhost:5000/login');
})

//9-Estableciendo las rutas
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/tareas', require('./routes/works'));


//middlewares aplicacion
app.use(userLogged);



//8-Invocamos al nodulo de conexion de la base de datos
/* const connection = require('../database/db') */

//3-Invocamos a dotenv
/*const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});*/

/* app.get('/login',(req, res)=>{
    res.render('login');
})

app.get('/register',(req, res)=>{
    res.render('register');
})

app.get('/tareas',(req, res)=>{
    res.render('tareas');
}) */


//función para limpiar la caché luego del logout
app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

 //Logout
//Destruye la sesión.
app.get('/logout', function (req, res) {
	req.session.destroy(() => {
	  res.redirect('/') // siempre se ejecutará después de que se destruya la sesión
	})
});



