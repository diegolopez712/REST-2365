const { Schema, model } = require('mongoose')

//Definir la estructura de la colección
const VehiculoSchema = Schema({
     placa: {
        type: String
     },
     color: {
        type: String
     },
     precio: {
        type: Number
     }
})


module.exports = model('Vehiculo', VehiculoSchema)