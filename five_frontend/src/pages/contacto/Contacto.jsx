import ContactForm from "../../components/Formulario/Formulario.jsx"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
// import '../../assets/css/bootstrap.min.css'
import '../contacto/css/contacto.css'
const mensajeW = `https://api.whatsapp.com/send/?phone=573105446463&text=¡Hola! Estoy interesado en conocer más sobre Five Alimentos Empacados&type=phone_number&app_absent=0`
const Contacto =  () => {

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

                           <ContactForm/>

                            
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