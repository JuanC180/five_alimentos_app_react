import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'

import '../../pages/producto/css/producto.css'
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
    const products = [
        {
            title: "Producto 1",
            img: imgUno,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 1200
        },
        {
            title: "Producto 2",
            img: imgDos,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 1200
        },
        {
            title: "Producto 3",
            img: imgTres,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 1200 
        },
        {
            title: "Producto 4",
            img: imgCuatro,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 4',
            price: 1200
        },
        {
            title: "Producto 5",
            img: imgCinco,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 5',
            price: 1200
        },
        {
            title: "Producto 6",
            img: imgSeis,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 6',
            price: 1200
        },
        {
            title: "Producto 7",
            img: imgSiete,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 7',
            price: 1200
        },
        {
            title: "Producto 8",
            img: imgOcho,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 8',
            price: 1200
        }
    ]
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
                      
                     
                    <div className='contenedor_cards'>
                            {products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
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
