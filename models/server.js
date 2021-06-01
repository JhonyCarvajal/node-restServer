const express = require('express')
var cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port =  process.env.PORT;
        this.middlewares();
        this.usuariosPath = '/api/usuarios'

        this.routes();
    }
    //Rutas Apliaccion

    routes(){
      this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }
    //Middelwares
    middlewares(){
        //CORS
        this.app.use(cors())


        //Lectura y parsero del body
        this.app.use( express.json() );

        //Directorio Publico
        this.app.use( express.static('public'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
          })
    }

}



module.exports = Server;