import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import routerContacto from './routes/routesContacto.js'

const app = express()
dotenv.config()
// app.use(cors())
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000


app.use('/api/v1/contactos', routerContacto)



// Configurar CORS con las opciones personalizadas
// const dominiosPermitidos = ['http://localhost:5173','http://localhost:4000']; // Agrega aquí los dominios permitidos
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (dominiosPermitidos.indexOf(origin) !== -1) {
//       // Origin permitido
//       callback(null, true);
//     } else {
//       callback(new Error('No permitido por CORS'));
//     }
//   }
// };
// app.use(cors(corsOptions));

app.get('/', (req, res)=>{
    res.send("hola")
})

app.listen(PORT, ()=>{
    console.log(`Corriendo por el puerto ${PORT}`)
})  