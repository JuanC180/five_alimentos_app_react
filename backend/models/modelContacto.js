import { db } from "../db/database.js";


const allItems = () => {
    return new Promise((resolve, reject) => {

      db.query('SELECT * FROM contacto', (error, results, fields) => {
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


  const newContacto = (datos)=> {
    const {nombre, correo, telefono, comentario} = datos

    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO contacto (nombres, correo, telefono, comentario) VALUES ('${nombre}', '${correo}', '${telefono}', '${comentario}')`, 
        (error, results, fields) => {
            if(error){
                reject(error)
            }
            else{
                resolve({
                    message: 'success'
                })
            }
        })        
    })

    // db.query(`INSERT INTO contacto (nombres, correo, telefono, comentario) VALUES ('${nombre}', '${correo}', '${telefono}', '${comentario}')`, 
    //     (error, results, fields) => {
    //         if(error){
    //             throw error
    //         }
    //     })
  }

  const oneContacto = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM contacto WHERE id = '${id}'`, 
        (error, results, fields) => {
            if(error){
                reject(error)
            }
            else{
                resolve({
                    message: 'success',
                    data: results
                })
            }
        })        
    })
  }


export { 
    allItems,
    newContacto,
    oneContacto
 };