import { sendContactEmail } from "./mailer.js";

export const handleContactForm = async (req, res) => {
    const { nombre, correo, telefono, comentario } = req.body;
  
    try {
      await sendContactEmail(nombre, correo, telefono, comentario);
      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
        console.error('Error al enviar el correo:',error)
      res.status(500).json({ message: 'Error al enviar el correo', error });
    }
  };
// import { db } from "../db/database.js"
import { 
    allItems,
    newContacto,
    oneContacto
 } from "../models/modelContacto.js";

const getContacto = (req, res) => {

    allItems()
        .then(result => {
            // console.log(result)
            res.json(result)
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
};

const addContacto = (req, res) => {

    // console.log(req.body)

    newContacto(req.body)
        .then(result =>{
            res.json(result)
        })
        .catch(error =>{
            console.log(error)
        })
}

const getContactoOne = (req, res) => {
    const {id} = req.params
    // console.log(id)

    oneContacto(id)
        .then((result) => {
            res.json(result)
        })
        .catch(error => {
            console.log(error)
        })
}

export {
    getContacto,
    addContacto,
    getContactoOne
}

