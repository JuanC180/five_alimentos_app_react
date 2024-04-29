import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import '../somos/css/somos.css'

const Somos = () => {
  return (
    <>
        <Header/>
        

        <main>
            <div className="banner">

                <div className="contenedor">
                    <div className="banner__contenedor">
                        <h1 className="banner__titulo"><span className="banner__five">Five</span> Alimentos Empacados</h1>
                        <p className="banner__texto">Expertos en empacado y manipulado de productos alimentarios.</p>
                    </div>
                </div>
            </div>


            <section className="mision__dos">
               
                <div className="mision__texto__dos">
                    <div className="contenedor1">
                        <h2 className="mision__texto__subtitulo__dos">
                            ¿Quienes somos?
                        </h2>
                        <p className="mision__texto__texto__dos">
                            Somos exploradores en busca de alimentos saludables, orgánicos, nutritivos y deliciosos que 
                            promuevan un estilo de vida saludable sin privarnos de disfrutar la vida.

                            Nos motiva inspirar a las personas a cuidar de su salud a través de la alimentación mientras 
                            disfrutan la vida descubriendo nuevos sabores y nuevas experiencias.
                        </p>

                    </div>
                </div>
                 <div className="mision__imagen__dos"></div>
            </section>
            <section className="mision__uno">
                
                <div className="mision__texto__uno">
                    <div className="mision__imagen__uno"></div>
                        <div className="contenedor4">
                        <h2 className="mision__texto__subtitulo__uno">
                            Misión
                        </h2>
                        <p className="mision__texto__texto__uno">
                        Nos dedicamos a satisfacer las necesidades gastronómicas con una amplia oferta con un concepto de comida empacada para una preparación rápida y fácil.y fabricación de salsas de manera artesanal  con el fin de hacerle la cocina más fácil a nuestros clientes  y a través de ella transmitir una experiencia única.
                        </p>
                        </div>
                    </div>
                <div className='mision__texto__tres'>
                    <div className="mision__imagen__tres"></div>
                    <div className="contenedor2">
                        <h2 className="mision__texto__subtitulo__tres">
                            Visión
                        </h2>
                        <p className="mision__texto__texto__tres">
                        Movernos hacia un futuro en el sector alimentos llevando una experiencia deliciosa e innovadora con productos de alta calidad ,nutritivos aumentando así el consumo y preferencia de nuestros clientes creando así una manera fácil de alimentarse .
                        Queriendo cada día mejorar para poder expandir la empresa no solo a nivel regional sino nacional logrando cautivar cada vez el mercado de una manera innovadora.


                        </p>
                    
                    
                    </div>
                </div>
                
            </section>

            <section className="section__valores_contenedor">

                <div className="section__valores__contenedor contenedor">
                    <div className="section__valores__titulo">
                        Valores
                    </div>
                    <div className="Iconos">
                        
                        <div className='Icono'>
                            <div className='Icono_imagen2'></div>
                            <h3 className='Icono__titulo'>Trabajo En Equipo</h3>   
                        </div>
                        <div className='Icono'>
                            <div className='Icono__imagen1'></div>
                            <h3 className='Icono__titulo'>Calidad</h3>   
                        </div>
                        <div className='Icono'>
                            <div className='Icono_imagen3'></div>
                            <h3 className='Icono__titulo'>Innovación</h3>
                          
                        </div>
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

export default Somos
