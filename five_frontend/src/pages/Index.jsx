import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import arrozImge from '../assets/img/bowl-food-solid.svg'
import frazcoImge from '../assets/img/jar-solid.svg'
import cubiertosImge from '../assets/img/utensils-solid.svg'

import slider1 from '../assets/img/alimentos_empacados.jpg'
import slider2 from '../assets/img/carne2.png'
import slider3 from '../assets/img/presentacion_salsa2.png'

import video2 from '../assets/img/fivevideo2.mp4'

import '../assets/css/style.css'

const Index = () => {
  return (
    <>
        <Header/>

            {/* <img src={svg} width="100"></img> */}

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


                  {/* <div className="section__imagen__uno"></div>
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
                  </div> */}
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
                                  {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                  Inventore deserunt eius odio expedita labore molestias quaerat, 
                                  beatae aut harum, architecto vitae reiciendis non! Iste quibusdam  */}
                                  Las salsas artesanales son una forma maravillosa de realzar tus comidas.
                                  {/* Las salsas artesanales se elaboran con ingredientes frescos y de primera calidad, cuidadosamente seleccionados. */}
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
                          {/* <iframe class="section__iframe" src="https://www.instagram.com/b6c48f3d-4db5-433d-b4f7-0beadc5f9dac" title="Instagram Embed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                          <video className="section__video__multimedia" muted autoplay   controls height="500px">
                                  <source src={video2} type='video/mp4'></source>
                          </video>

                        {/* <video  muted autoplay loop>
                            <source src={video2} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video> */}

                      </div>
                  </div>

                  <div className="section__texto__multimedia">
                      <div className="contenedor">
                          <h2 className="section__texto__subtitulo__multimedia">
                          Una merienda deliciosa para complementar tus tardes. <span className='section__texto__span'>¡preparada en un instante!</span>
                          </h2>
                          <p className="section__texto__texto-multimedia">
                              {/* Tener a mano estos alimentos no solo te ahorrará tiempo,  */}
                              {/* sino que harán que sea mucho más fácil comer los alimentos adecuados. */}
{/* 
                              Comer bien no siempre es fácil o divertido. En el programa de televisión 'Consumer 101', 
                              la experta de Consumer Reports, Amy Keating, se dirige a la tienda de comestibles para mostrarles 
                              cómo tomar decisiones saludables cuando se trata de los alimentos. */}
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
