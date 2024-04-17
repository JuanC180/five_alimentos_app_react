import Footer from "../../components/Footer"
import Header from "../../components/Header"
import '../../assets/css/bootstrap.min.css'
import '../contacto/css/contacto.css'
import { useState } from "react"

const Contacto =  () => {

    const [nombre, setNombre]         = useState('')
    const [correo, setCorreo]         = useState('')
    const [telefono, setTelefono]     = useState('')
    const [comentario, setComentario] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if([nombre,correo,telefono,comentario].includes(''))
        {
            console.log("No pueden haber campos vacios")
            return
        }
        console.log("Enviando datos")

        const url = '127.0.0.1:4000/api/v1/contactos/contacto'

        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error); // Manejar errores de la solicitud fetch
        })
        .catch(() => {
            // Si la respuesta no es JSON, puedes manejarla de otra manera
            console.log("La respuesta no es un JSON válido. Podría ser HTML u otro tipo de contenido.");
        });
    }

    return(
        <>
            <Header />


            <main>
                <div className="banner">
                    <div className="contenedor">
                        <div className="banner__contenedor">
                            <h1 className="banner__titulo"><span className="banner__five">Five</span> Alimentos Empacados</h1>
                            <p className="banner__texto">Expertos en empacado y manipulado de productos alimentarios.</p>
                        </div>
                    </div>
                </div>

                <section className="section__contacto">
                    <h2 className="section__contacto__titulo-principal">Contactanos</h2>
                    <div className="section__contacto__contenedor ">
                        <div className="section__contacto__imagen">
                            
                        </div>
                        <div className="section__contacto__formulario">

                            <form action="" 
                                onSubmit={handleSubmit}
                            >
                                <div className="mb-2">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="nombre" 
                                        placeholder="Nombres" 
                                        value={nombre}
                                        onChange={e => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="correo" 
                                        placeholder="Correo"
                                        value={correo}
                                        onChange={(e)=> setCorreo(e.target.value)} 
                                    />
                                </div>
                                <div className="mb-2">
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="telefono" 
                                        placeholder="Teléfono" 
                                        value={telefono}
                                        onChange={e => setTelefono(e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <textarea 
                                        className="form-control" 
                                        id="comentario" 
                                        rows="4" 
                                        placeholder="Comentario"
                                        value={comentario}
                                        onChange={e => setComentario(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary btn-enviar btn-margin" type="submit">Enviar</button>
                                </div>
                            </form>

                            
                        </div>
                    </div>
                </section>

                <div className="tbn-whatsapp">
                  <a href="https://api.whatsapp.com/send/?phone=573153646529&text=Holaa estoy interezado en el producto&type=phone_number&app_absent=0" target="_blank">
                      <div className="tbn-whatsapp__icono "></div>
                  </a>
              </div>

            </main>


            <Footer/>
        </>
    )
}

export default Contacto