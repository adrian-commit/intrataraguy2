const mysql2 =require ('mysql2');


const connection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login_node'
});


connection.connect((error)=>{
    if(error){
        console.log('El error de conexion es'+error);
        return;
    }
    console.log('¡Conectado a la base de datos!'); 
});

module.exports = connection;