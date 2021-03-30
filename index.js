const Server = require('./models/server');
require('dotenv').config();
const server = new Server();
server.execute();



/*

//Desplegar el directorio publico
app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => { 
    //console.log(socket.id);
    //emite un evento
   /* socket.emit('mensaje-bienvenida',{
        msg:'Bienvenido al server',
        fecha: new Date()
    }); 
    socket.on('mensaje-cliente',(data)=>{
        console.log(data); 
        socket.emit('mensaje-to-cliente',data);
    });

    

 });

server.listen(8080, ()=>{
    console.log("server corriendo en el puerto :8080");
});*/