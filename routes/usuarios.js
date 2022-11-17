const { Router } = require('express')
const router = Router() //Obtener la función Router

router.get('/', (req, res) => {
    //Desestructuración de los parámetros enviados
    //con el método GET
    const { referencia, nombre } = req.query
    res.json({
        msg: 'GET API',
        referencia,
        nombre
    })
})

//post: enviar información(Regitrar)
router.post('/', (req, res) => {
    const { referencia, nombre, precio } = req.body
    res.json({
        msg: 'POST API',
        referencia,
        nombre,
        precio
    })
})

//put: modificar información
router.put('/', (req, res) => {
    res.json({
        msg: 'PUT API'
    })
})

//delete: eliminar información
router.delete('/', (req, res) => {
    res.json({
        msg: 'DELETE API'
    })
})

//patch: actualizar parcialmente información
router.patch('/', (req, res) => {
    res.json({
        msg: 'PATCH API'
    })
})

//exportar modulo
module.exports = router

