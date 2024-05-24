import express from 'express'
import { handleContactForm } from '../controllers/controllerContacto.js';
import { 
        getContacto, 
        addContacto,
        getContactoOne,
    } from '../controllers/controllerContacto.js';


const router = express.Router();

router.get('/contactos', getContacto)
router.get('/contactos/:id', getContactoOne)
router.post('/contactos', addContacto)
router.post('/contact', handleContactForm)



export default router