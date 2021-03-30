const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const Sockets = require('./sockets');

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT;

        //http server
        this.server = http.createServer( this.app );

        //configuracion de socket
        this.io = socketio( this.server,{
            /* configuraciones*/
        
        });
    }

    middlewares() {
            
        //pesplegar el directorio publico
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

    }

    execute() {

        //Inicializar middleware
        this.middlewares();

        this.configurarSockets();

        //inicializar server
        this.server.listen( this.port, () => {
            console.log('Server corriendo en puerto : ', this.port)
        });
    }


    configurarSockets(){

        new Sockets(this.io);
    }

    
}

module.exports = Server;