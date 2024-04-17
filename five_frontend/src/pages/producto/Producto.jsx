import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// import '../../pages/producto/css/producto.css'
// import '../../assets/css/style.css'

import  imgUno from '../../assets/img/1.jpg'
import  imgDos from '../../assets/img/2.jpg'
import  imgTres from '../../assets/img/3.webp'
import  imgCuatro from '../../assets/img/4.jpg'
import  imgCinco from '../../assets/img/5.jpg'
import  imgSeis from '../../assets/img/6.jpg'
import  imgSiete from '../../assets/img/7.avif'
import  imgOcho from '../../assets/img/8.avif'

const Producto = () => {
  return (
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


              <section className="section__productos">
                  <div className="contenedor">
                      <h2 className="section__producto-titulo">Productos</h2>
                      <div className="contenedor_cards">

                          <div className="card">
                              <div className="card__imagen">
                                  <img src={imgUno} alt="producto-1" />
                              </div>
                              
                              <div className="card__texto">
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                      Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas
                              </div>

                              <div className="card__precio">
                                  <span className="card__precio-signo">$</span> 1,200
                              </div>
                          </div>

                          <div className="card">
                              <div className="card__imagen">
                                  <img src={imgDos} alt="producto-1" />
                              </div>

                              <div className="card__texto">
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                      Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas
                              </div>

                              <div className="card__precio">
                                  <span className="card__precio-signo">$</span> 1,200
                              </div>
                          </div>

                          <div className="card">
                              <div className="card__imagen">
                                  <img src={imgTres} alt="producto-1" />
                              </div>

                              <div className="card__texto">
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                      Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas
                              </div>

                              <div className="card__precio">
                                  <span className="card__precio-signo">$</span> 1,200
                              </div>
                          </div>

                          <div className="card">
                              <div className="card__imagen">
                                  <img src={imgCuatro} alt="producto-1" />
                              </div>

                              <div className="card__texto">
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                      Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas
                              </div>

                              <div className="card__precio">
                                  <span className="card__precio-signo">$</span> 1,200
                              </div>
                          </div>

                          <div className="card">
                              <div className="card__imagen">
                                  <img src={imgCinco} alt="producto-1" />
                              </div>

                              <div className="card__texto">
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                      Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas
                              </div>

                              <div className="card__precio">
                                  <span className="card__precio-signo">$</span> 1,200
                              </div>
                          </div>

                          <div className="card">
                              <div className="card__imagen">
                                  <img src={imgSeis} alt="producto-1" />
                              </div>

                              <div className="card__texto">
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                      Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas
                              </div>

                              <div className="card__precio">
                                  <span className="card__precio-signo">$</span> 1,200
                              </div>
                          </div>

                          <div className="card">
                              <div className="card__imagen">
                                  <img src={imgSiete} alt="producto-1" />
                              </div>

                              <div className="card__texto">
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                      Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas
                              </div>

                              <div className="card__precio">
                                  <span className="card__precio-signo">$</span> 1,200
                              </div>
                          </div>

                          <div className="card">
                              <div className="card__imagen">
                                  <img src={imgOcho} alt="producto-1" />
                              </div>

                              <div className="card__texto">
                                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                      Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas
                              </div>

                              <div className="card__precio">
                                  <span className="card__precio-signo">$</span> 1,200
                              </div>
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

export default Producto
