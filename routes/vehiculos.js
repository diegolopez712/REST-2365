const { Router } = require('express')
const router = Router() //Obtener la función Router

const {getVehiculo, postVehiculo, deleteVehiculo, putVehiculo, patchVehiculo } = require('../controllers/vehiculo')

router.get('/', getVehiculo)

router.post('/', postVehiculo)

router.put('/', putVehiculo)

router.patch('/', patchVehiculo)

router.delete('/', deleteVehiculo)

//exportar modulo
module.exports = router