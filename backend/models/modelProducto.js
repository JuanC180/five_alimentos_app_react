import { db } from "../db/database.js";


const allProducts = () =>{
    return new Promise((resolve, reject) => {

        db.query('SELECT * FROM productos', (error, results, fields) => {
          if (error) {
            reject(error);
          } else {
          //   console.log('The solution is: ', results);
            resolve({
              // message: 'Controlador contacto',
              data: results
            });
          }
        });
  
      });
}

const getProductoOne = (id) => {
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM productos WHERE id = '${id}'`, (error, results, fields) => {
            if (error) {
              reject(error);
            } else {
            //   console.log('The solution is: ', results);
              resolve({
                // message: 'Controlador contacto',
                data: results
              });
            }
          });
    })
}

export {
    allProducts,
    getProductoOne
}