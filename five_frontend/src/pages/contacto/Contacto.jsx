import { useState } from "react"
import swal from 'sweetalert';

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
// import '../../assets/css/bootstrap.min.css'
import '../contacto/css/contacto.css'
const mensajeW = `https://api.whatsapp.com/send/?phone=573105446463&text=¡Hola! Estoy interesado en conocer más sobre Five Alimentos Empacados&type=phone_number&app_absent=0`
const Contacto =  () => {
    
    const [nombre, setNombre]         = useState('')
    const [correo, setCorreo]         = useState('')
    const [telefono, setTelefono]     = useState('')
    const [comentario, setComentario] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        if([nombre,correo,telefono,comentario].includes(''))
        {
            console.log("No pueden haber campos vacios")

            swal({
                // title: "Advertencia",
                title: "Todos los campos son obligatorios!",
                icon: "warning",
                button: "Aceptar"
              });
            return
        }
        if(telefono.length < 10) {
            console.log("El número de teléfono debe tener al menos 10 dígitos.")
    
            swal({
                title: "El número de teléfono debe tener al menos 10 dígitos!",
                icon: "warning",
                button: "Aceptar"
            });
            return
        }
        // console.log("Enviando datos")

        // const url = 'http://127.0.0.1:4000/api/v1/contactos'
        const url = `${import.meta.env.VITE_URL_BASE}api/v1/contactos`

        const objDatos = {
            nombre,
            correo,
            telefono,
            comentario
        }

        // const formData = new FormData()
        
        // formData.append('nombre', nombre)
        // formData.append('correo', correo)
        // formData.append('telefono', telefono)
        // formData.append('comentario', comentario)
        // formData.append('nuevoObjetoDatos', JSON.stringify(objDatos))
        
        // console.log(formData)
        // console.log(objDatos)

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(objDatos)
            });

            if (res.ok) {
                const data = await res.json();

                console.log(data);

                // Limpia los campos del formulario después de enviar con éxito
                setNombre('');
                setCorreo('');
                setTelefono('');
                setComentario('');

                swal({
                    title: "Se han enviado los datos correctamente!",
                    icon: "success",
                    button: "Aceptar"
                });
            } else {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        } catch (error) {
            console.error('Ocurrió un error:', error);
        }

            // .then(response => {
            //     if (!response.ok) {
            //         throw new Error(`HTTP error! status: ${response.status}`);
            //     }
            //     return response.json();
            // })
            // .then(data => {
            //     console.log(data);
            //     // Limpia los campos del formulario después de enviar con éxito
            //     setNombre('');
            //     setCorreo('');
            //     setTelefono('');
            //     setComentario('');

            //     swal({
            //         // title: "Advertencia",
            //         title: "Se han envido los dato correctamente!",
            //         icon: "success",
            //         button: "Aceptar"
            //       });
            // })
            // .catch(error => {
            //     console.log(error)
            // })
         
    }
   
    return(
        <>
            <Header />


            <main>

                <section className="section__contacto">
                    <h2 className="section__contacto__titulo-principal">Contáctanos</h2>
                    <div className="section__contacto__contenedor ">
                        <div className="section__contacto__imagen">
                            
                        </div>
                        <div className="section__contacto__formulario">

                            <form action="" 
                                onSubmit={handleSubmit}
                            >
                                <div className="div-c">
                                    <input required
                                        type="text" 
                                        className="input-c" 
                                        id="nombre" 
                                        placeholder="Nombres" 
                                        value={nombre}
                                        onChange={e => { 
                                            const inputValue = e.target.value;
                                            const formattedValue = inputValue.replace(/\s+/g, ' ');
                                            setNombre(formattedValue)
                                            }}
                                    />
                                </div>
                                <div className="div-c">
                                    <input required
                                        type="email" 
                                        className="input-c" 
                                        id="correo" 
                                        placeholder="Correo"
                                        value={correo}
                                        onChange={(e)=> setCorreo(e.target.value)} 
                                    />
                                </div>
                                <div className="div-c">
                                    <input required
                                        type="text" 
                                        className="input-c" 
                                        id="telefono" 
                                        minLength="10"
                                        maxLength="10"
                                        pattern="\d*"
                                        placeholder="Teléfono" 
                                        value={telefono}
                                        onChange={e =>{
                                            const val= e.target.value.replace(/\D/g, '');if (val.length<=10){setTelefono(val)}}}
                                    />
                                </div>
                                <div className="div-c">
                                    <textarea 
                                        className="text-container" 
                                        id="comentario" 
                                        rows="4" 
                                        placeholder="Comentario"
                                        value={comentario}
                                        onChange={e => setComentario(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="container-bt">
                                    <button className="btn btn-primary btn-enviar btn-margin" type="submit">Enviar</button>
                                </div>
                            </form>

                            
                        </div>
                    </div>
                </section>

                <div className="tbn-whatsapp">
                  <a href= {mensajeW} target="_blank">
                      <div className="tbn-whatsapp__icono "></div>
                  </a>
              </div>

            </main>


            <Footer/>
        </>
    )
}

export default Contacto