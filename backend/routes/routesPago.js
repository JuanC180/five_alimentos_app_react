import express from 'express'

import { 
        demoCarritoPay,
        demoCreate,
        demoSuccess,
        demoCancel
    } from '../controllers/controllerCarrito.js';


const router = express.Router();

// productos
router.get('/pagos', demoCarritoPay)
router.get('/pagos/create-checkout', demoCreate)
router.get('/pagos/success', demoSuccess)
router.get('/pagos/cancel', demoCancel)




export default router