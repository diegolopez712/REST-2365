const express = require('express')
const cors = require('cors')

const { dbConnection } = require('../database/config') //Vincular la conexión

class Server{

    constructor(){

        this.app = express()

        this.port = process.env.port //El puerto de la aplicación
         
        this.usuariosPath = '/api/usuarios'
        this.vehiculosPath = '/api/vehiculos'

        //Método para la conexión a la db
        this.conectarDB()

        //incluir otras funcionalidades a la aplicación
        this.middlewares()
       
        //Incluir rutas
        this.routes()
    }

    async conectarDB(){ //Esperando la respuesta del servidor
        await dbConnection() //Sin await no funciona
    }

    middlewares(){//Otras funcionalidades
        this.app.use( cors() )
        this.app.use( express.static('public'))
        this.app.use( express.json() ) //Permitir recibir peticiones JSON
    }

    routes(){//Rutas de la aplicación
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
        this.app.use( this.vehiculosPath, require('../routes/vehiculos'));
    }

    listen(){//Escuchar el puerto
        this.app.listen(this.port, (req, res) => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
}

module.exports = Server


//¿Cuáles son los métodos http?
