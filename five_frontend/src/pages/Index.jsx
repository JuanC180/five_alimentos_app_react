import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import arrozImge from '../assets/img/bowl-food-solid.svg'
import frazcoImge from '../assets/img/jar-solid.svg'
import cubiertosImge from '../assets/img/utensils-solid.svg'

import video2 from '../assets/img/fivevideo2.mp4'

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
                          <p className="banner__texto">¡Listo para preparar y disfrutar en 5 minutos!</p>
                      </div>
                  </div>
              </div>

              <section className="section__uno">

                <div className='slider-box'>
                    <ul>
                        <li>
                            <div  className='imgBanner1' ></div>
                            {/* <div className='texto'>
                                <h2>Imagen 1</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut a eligendi quis provident, quisquam iste odit beatae. Dolore, itaque. Reiciendis id quod quisquam expedita optio voluptate doloremque, culpa adipisci ea.</p>
                            </div> */}
                        </li>

                        <li>
                            <div  className='imgBanner2' ></div>
                            {/* <div className='texto'>
                                <h2>Imagen 2</h2>
                            </div> */}
                        </li>

                        <li>
                            <div  className='imgBanner3' ></div>
                            {/* <div className='texto'>
                                <h2>Imagen 3</h2>
                            </div> */}
                        </li>
                        
                    </ul>
                </div>



              </section>

              <section className="section__dos">
                  <div className="contenedor">
                      <div className="section__dos__contenedor">
                          <div className="section__card">
                              <div className='section__card__contenedor_img'>
                                <img className='section__card__imagen' src={arrozImge} width="100"></img>
                              </div>
                              {/* <div className="section__card__titulo">Titulo</div> */}
                              <div className="section__card__texto">
                                Listos para disfrutar, solo debes sacarlos de la 
                                envoltura, calentar y tu preparación esta lista en cinco minutos 

                              </div>
                          </div>

                          <div className="section__card">
                          <img className='section__card__imagen' src={frazcoImge} width="100"></img>
                              {/* <div className="section__card__titulo">Titulo</div> */}
                              <div className="section__card__texto">

                                  Las salsas artesanales son una forma maravillosa de realzar tus comidas.
                                 
                              </div>
                          </div>

                          <div className="section__card">
                          <img className='section__card__imagen' src={cubiertosImge} width="100"></img>
                              {/* <div className="section__card__titulo">Titulo</div> */}
                              <div className="section__card__texto">
                                Nuestros productos son nutritivos, tienen altos niveles de vitaminas y minerales.
                              </div>
                          </div>
                      </div>
                  </div>


              </section>

              <section className="section__multimedia">
                  <div className="section__imagen__multimedia">

                      <div className="contenedor">
                          {/* <iframe className="section__iframe" src="https://www.youtube.com/embed/P8h3b_ICgSA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe> */}
                    
                          <video className="section__video__multimedia" muted autoPlay controls height="500px">
                                  <source src={video2} type='video/mp4'></source>
                          </video>

   

                      </div>
                  </div>

                  <div className="section__texto__multimedia">
                      <div className="contenedor">
                          <h2 className="section__texto__subtitulo__multimedia">
                          Una merienda deliciosa para complementar tus tardes. <span className='section__texto__span'>¡preparada en un instante!</span>
                          </h2>
                          <p className="section__texto__texto-multimedia"></p>
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
