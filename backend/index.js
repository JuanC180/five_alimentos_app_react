import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import routerContacto from './routes/routesContacto.js'


const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000


app.use('/api/v1', routerContacto)


app.get('/', (req, res)=>{
    res.send("hola")
})

app.listen(PORT, ()=>{
    console.log(`Corriendo por el puerto ${PORT}`)
})  