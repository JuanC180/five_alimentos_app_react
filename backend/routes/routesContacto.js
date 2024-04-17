import express from 'express'

import { 
        getContacto, 
        addContacto,
        getContactoOne
    } from '../controllers/controllerContacto.js';

const router = express.Router();

router.get('/contacto', getContacto)
router.get('/contacto/:id', getContactoOne)
router.post('/contacto', addContacto)

export default router