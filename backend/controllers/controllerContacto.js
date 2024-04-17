
import { db } from "../db/database.js"
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
    // res.json("Metodo Post")
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

