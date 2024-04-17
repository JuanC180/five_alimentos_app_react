import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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

            <section className="mision__uno">
                <div className="mision__imagen__uno"></div>
                <div className="mision__texto__uno">
                    <div className="contenedor">
                        <h2 className="mision__texto__subtitulo__uno">
                            Misión y Visión
                        </h2>
                        <p className="mision__texto__texto__uno">
                            <span className="colorGris--texto">Misión: </span> a mano estos alimentos no solo te ahorrará tiempo, 
                            sino que harán que sea mucho más fácil comer los alimentos adecuados
                        </p>
                        <p className="mision__texto__texto__dos">
                            <span className="colorGris--texto">Visión: </span>Comer bien no siempre es fácil o divertido. En el programa de televisión 'Consumer 101', 
                            la experta de Consumer Reports, Amy Keating, se dirige a la tienda de comestibles para mostrarles 
                            cómo tomar decisiones saludables cuando se trata de los alimentos.
                        </p>
                    </div>
                </div>
            </section>


            <section className="mision__dos">
               
                <div className="mision__texto__dos">
                    <div className="contenedor">
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

            <section className="section__valores">

                <div className="section__valores__contenedor contenedor">
                    <div className="section__valores__titulo">
                        Valores
                    </div>
                    <div className="section__valores__texto">
                        <p className="section__valores__parrafo">
                            <span className="colorGris--texto">Responsabilidad:</span> Cumplimos las obligaciones con proveedores, clientes, consumidores y la comunidad.
                        </p>
                        <p className="section__valores__parrafo">
                            <span className="colorGris--texto">Confianza:</span> Ofrecemos seguridad y firmeza en nuestro actuar.
                        </p>
                        <p className="section__valores__parrafo">
                            <span className="colorGris--texto">Calidad:</span> Nuestros productos suplen las necesidades y expectativas de nuestros clientes y consumidores.
                        </p>
                        <p className="section__valores__parrafo">
                            <span className="colorGris--texto">Respeto:</span> Nos preocupamos por que nuestras acciones tengan un impacto positivo que incluyan y acepten a los demás en sus diferencias.
                        </p>    
                        <p className="section__valores__parrafo">
                            <span className="colorGris--texto">Innovación:</span> Buscamos la innovación constante que marque la diferencia en nuestra propuesta de valor.
                        </p>
                        <p className="section__valores__parrafo">
                            <span className="colorGris--texto">Trabajo en Equipo:</span> Trabajamos organizadamente como uno solo para brindar soluciones efectivas.
                        </p>
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
