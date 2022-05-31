//1-Invocamos a express
const express = require('express');
const app = express();

//2-seteamos urlencoded para CAPTURAR los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//5 - establecemos en motor de plantillas ejs
app.set('view engine', 'ejs');

//6- invocamos al modulo para hacer el hashin de password, el modulo bcryptjs
const bcryptjs = require('bcryptjs');

//7-Configuracion de las variables de secion
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

//8-Invocamos al nodulo de conexion de la base de datos
const connection = require('./database/db')

//3-Invocamos a dotenv
/*const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});*/

//4-el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//9-Estableciendo las rutas

app.get('/login',(req, res)=>{
    res.render('login');
})

app.get('/register',(req, res)=>{
    res.render('register');
})

app.get('/tareas',(req, res)=>{
    res.render('tareas');
})

/*10-Registracion(sirve para captar datos de los formularios), 
se capturan los datos del formulario y se guardan en una constante, 
que debe coincidir con el combre de bd*/

app.post('/register', async (req, res)=>{
    const user = req.body.user;
    const name = req.body.name;
    const rol = req.body.rol;
    const pass = req.body.pass;
    let passwordHaash = await bcryptjs.hash(pass,8);
    connection.query('INSERT INTO users SET ?', {user:user, name:name, rol:rol, pass:passwordHaash}, async(error, results)=>{
        if(error){
            console.log(error);
        /* es donde se coloca las alertas para los formularios usando sweetalert*/
        }else{
            res.render('register',{
                    alert: true,
                    alertTitle: "Nuevo Registro",
                    alertMassage: "Se registro Correctamente!",
                    alertIcon: 'success',
                    showConfirmButton: false,
                    timer:2500,
                    ruta:''
            })
        }
    })
})

//11-Autenticacion
app.post('/auth', async (req, res)=>{
   const user= req.body.user;
   const pass= req.body.pass;
   let passwordHaash = await bcryptjs.hash(pass,8);
    if (user && pass){
       connection.query('SELECT * FROM users WHERE user = ?', [user], async(error, results)=>{
           if(results.length == 0 || !(await bcryptjs.compare(pass,results[0].pass))){
               res.render('Login',{
                alert: true,
                alertTitle: "Error",
                alertMassage: "Usuario y/o Password incorrectas",
                alertIcon: 'error',
                showConfirmButton: true,
                timer:'',
                ruta:'login',
               });
           } else {
                req.session.loggedin = true;
                req.session.name = results[0].name
                res.render('login', {
                    alert: true,
                    alertTitle: "Conexión Exitosa",
                    alertMassage: "¡LOGIN CORRECTO!",
                    alertIcon: 'succes',
                    showConfirmButton: false,
                    timer:2500,
                    ruta:''
       })
    }}
   )}else{
    res.send('por favor ingrese un password')
 }  
})

//12 - Método para controlar que está auth en todas las páginas
app.get('/', (req, res)=> {
	if (req.session.loggedin) {
		res.render('index',{
			login: true,
			name: req.session.name			
		});		
	} else {
		res.render('index',{
			login:false,
			name:'Debe iniciar sesión',			
		});				
	}
	res.end();
});

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



app.listen(5000, (req, res)=>{
    console.log('SERVER RUNNING IN http://localhost:5000');
})