import { 
        allProducts,
        getProductoOne
    } from "../models/modelProducto.js"


const getProductos = (req,res) => {
    // res.json({"msg":"controlador productos productos"})
    allProducts()
        .then((response) => {
            return res.json(response)
        })
        .catch((error) => {
            res.json({
                message: error
            })
        })
}


const getProductoId = (req, res) => {
    // res.json({"msg": "obteniendo un producto por ID"})

    const {id} = req.params

    getProductoOne(id)
        .then(response => {
            return res.json(response)
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
}

export {
    getProductos,
    getProductoId
}