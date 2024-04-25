import express from 'express'

import { 
        getProductos,
        getProductoId
    } from '../controllers/controllerProducto.js';


const router = express.Router();

// productos
router.get('/productos', getProductos)
router.get('/productos/:id', getProductoId)



export default router