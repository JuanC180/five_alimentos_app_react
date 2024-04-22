import express from 'express'

import { 
        getContacto, 
        addContacto,
        getContactoOne
    } from '../controllers/controllerContacto.js';

const router = express.Router();

router.get('/contactos', getContacto)
router.get('/contactos/:id', getContactoOne)
router.post('/contactos', addContacto)

export default router