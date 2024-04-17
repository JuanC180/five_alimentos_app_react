import Footer from '../components/Footer'
import Header from '../components/Header'

import '../assets/css/style.css'

const Index = () => {
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

              <section className="section__uno">
                  <div className="section__imagen__uno"></div>
                  <div className="section__texto__uno">
                    
                      <div className="contenedor">
                          <h2 className="section__texto__subtitulo__uno">
                              Compra como un nutricionista
                          </h2>
                          <p className="section__texto__texto">
                              Tener a mano estos alimentos no solo te ahorrará tiempo, 
                              sino que harán que sea mucho más fácil comer los alimentos adecuados

                              Comer bien no siempre es fácil o divertido. En el programa de televisión 'Consumer 101', 
                              la experta de Consumer Reports, Amy Keating, se dirige a la tienda de comestibles para mostrarles 
                              cómo tomar decisiones saludables cuando se trata de los alimentos.
                          </p>
                      </div>
                  </div>
              </section>

              <section className="section__dos">
                  <div className="contenedor">
                      <div className="section__dos__contenedor">
                          <div className="section__card">
                              <div className="section__card__titulo">Titulo</div>
                              <div className="section__card__texto">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                  Inventore deserunt eius odio expedita labore molestias quaerat, 

                              </div>
                          </div>

                          <div className="section__card">
                              <div className="section__card__titulo">Titulo</div>
                              <div className="section__card__texto">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                  Inventore deserunt eius odio expedita labore molestias quaerat, 
                                  beatae aut harum, architecto vitae reiciendis non! Iste quibusdam 
                                  eos mollitia incidunt itaque facere!
                              </div>
                          </div>

                          <div className="section__card">
                              <div className="section__card__titulo">Titulo</div>
                              <div className="section__card__texto">Lorem ipsum  molestias quaerat, 
                                  beatae aut, s non! Iste  
                                  eos   itaque facere!
                              </div>
                          </div>
                      </div>
                  </div>


              </section>

              <section className="section__multimedia">
                  <div className="section__imagen__multimedia">

                      <div className="contenedor">
                          <iframe className="section__iframe" src="https://www.youtube.com/embed/P8h3b_ICgSA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                      </div>
                  </div>

                  <div className="section__texto__multimedia">
                      <div className="contenedor">
                          <h2 className="section__texto__subtitulo__multimedia">
                              Compra como un nutricionista
                          </h2>
                          <p className="section__texto__texto-multimedia">
                              Tener a mano estos alimentos no solo te ahorrará tiempo, 
                              sino que harán que sea mucho más fácil comer los alimentos adecuados

                              Comer bien no siempre es fácil o divertido. En el programa de televisión 'Consumer 101', 
                              la experta de Consumer Reports, Amy Keating, se dirige a la tienda de comestibles para mostrarles 
                              cómo tomar decisiones saludables cuando se trata de los alimentos.
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


        <Footer />
    </>
  )
}

export default Index
