create: async (req, res)=>{
    const user = req.body.user;
    const name = req.body.name;
    const rol = req.body.rol;
    const pass = req.body.pass;
    let passwordHaash = await bcryptjs.hash(pass,8);
    connection.query('INSERT INTO users SET ?', {
        user:user, 
        name:name, 
        rol:rol, 
        pass:passwordHaash}, 
        async (error, results) => {
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
}

access: async (req, res)=>{
    const user= req.body.user;
    const pass= req.body.pass;
    let passwordHaash = await bcryptjs.hash(pass,8);
     if (user && pass){
        connection.query('SELECT * FROM users WHERE user = ?', [user], async(error, results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(pass,results[0].pass))){
                res.render('Login',{
                 alert: true,
                 alertTitle: "Error",
                 alertMassage: "Credenciales incorrectas",
                 alertIcon: 'error',
                 showConfirmButton: true,
                 timer:'',
                 ruta:'login'
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
}


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