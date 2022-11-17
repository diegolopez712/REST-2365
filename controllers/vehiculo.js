const Vehiculo = require('../models/vehiculo')

const getVehiculo = async (req, res) => {
   
    //Consultar todos los documentos de la colección
    const vehiculos = await Vehiculo.find()

    res.json({
        msg: 'Vehiculo GET API',
        vehiculos
    })
}

const postVehiculo = async(req, res) =>{
    //Desestructuración de parámetros
    const { placa, color, precio } = req.body
    //crear el objeto
    const vehiculo1 = new Vehiculo({ placa, color, precio })
    await vehiculo1.save() //Guardar en mongodb

    res.json({
        msg:'Vehiculo POST API',
        vehiculo1
    })
}
//311 4525333
const putVehiculo = async(req, res) => {
    const { placa, color, precio } = req.body
    const vehiculo1 = await Vehiculo.findOneAndUpdate({placa : placa},{color: color, precio: precio})
    res.json({
        msg: 'Vehiculo API PUT',
        vehiculo1
    })
}

//Patch:Modicación Parcial
const patchVehiculo = async(req, res) => {
    const { placa, precio } = req.body
    const vehiculo1 = await Vehiculo.findOneAndUpdate({placa : placa},{precio: precio})
    res.json({
        msg: 'Vehiculo API PATCH',
        vehiculo1

    })
}


const deleteVehiculo  = async(req, res) =>{
    const { placa } = req.query

    //Buscar y borrar
    //Antes de las llaves es el atributo
    //DELETE FROM Vehiculo WHERE placa = $placa
    const vehiculo1 = await Vehiculo.findOneAndDelete({ placa : placa})

    res.json({
        msg:'Vehículo DELETE API',
        vehiculo1
    })

}

module.exports = {
    getVehiculo,
    postVehiculo,
    putVehiculo,
    patchVehiculo,
    deleteVehiculo
}