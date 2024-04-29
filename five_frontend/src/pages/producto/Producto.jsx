import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'

import '../../pages/producto/css/producto.css'
// import '../../assets/css/style.css'
import  imgCategoryCarnes from '../../assets/img/imagenesfive/carne_pollo.PNG'
import  imgCategoryPasteles from '../../assets/img/imagenesfive/pastel1.PNG'
import  imgCategorySalsas from '../../assets/img/imagenesfive/presentacion_salsa2.PNG'
import  imgSalsaMango from '../../assets/img/imagenesfive/salsa1.PNG'
import  imgSalsaCilantro from '../../assets/img/imagenesfive/salsa1.PNG'
import  imgSalsaPimenton from '../../assets/img/imagenesfive/salsa1.PNG'
import  imgSalsaGuacamole from '../../assets/img/imagenesfive/salsa1.PNG'
import  imgSalsaMaracuya from '../../assets/img/imagenesfive/salsa1.PNG'
import  imgHogado from '../../assets/img/imagenesfive/hogado1.PNG'
import  imgAlino from '../../assets/img/imagenesfive/alinos.PNG'
import  imgPastelCrudo from '../../assets/img/imagenesfive/croasanes_crudos2.png'
import  imgPalitoCrudo from '../../assets/img/imagenesfive/croasanes_crudos.PNG'
import  imgPastelHorneado from '../../assets/img/imagenesfive/pastel2.PNG'
import  imgPalitoHorneado from '../../assets/img/imagenesfive/palito1.PNG'
import  imgCarneVacio from '../../assets/img/imagenesfive/carne1.PNG'
import  imgPolloVacio from '../../assets/img/imagenesfive/carne2.PNG'



const Producto = () => {
    const products = {
        "salsas":[
        {
            title: "Salsa de mango",
            img: imgSalsaMango,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 4',
            price: 2000
        },
        {
            title: "Salsa de cilantro",
            img: imgSalsaCilantro,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 5',
            price: 2000
        },
        {
            title: "Salsa de maracuyá",
            img: imgSalsaMaracuya,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 6',
            price: 2000
        },
        {
            title: "Salsa de pimentón",
            img: imgSalsaPimenton,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 7',
            price: 3000
        },
        {
            title: "Guacamole",
            img: imgSalsaGuacamole,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 8',
            price: 3000
        },
        {
            title: "Hogao",
            img: imgHogado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 8',
            price: 6000
        },
        {
            title: "Aliños",
            img: imgAlino,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 8',
            price: 6000
        },],
        
        
        "pastelesCrudos":[
        {
            title: "Pastel de carne",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 2700
        },
        {
            title: "Pastel de pollo",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 2700
        },
        {
            title: "Pastel de jamón y queso",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 2500 
        },
        {
            title: "Pastel Hawaiano",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 2500
        },
        {
            title: "Pastel Ranchero",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 2500
        },
        {
            title: "Pastel de arequipe y queso",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 2300 
        },
        {
            title: "Pastel de arequipe",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 2300
        },
        {
            title: "Pastel de guayaba y queso",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 2300
        },
        {
            title: "Pastel de guayaba",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 2300 
        },
        {
            title: "Pastel Gloria",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 2500
        },
        {
            title: "Pastel de queso",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 2500
        },
        {
            title: "Palito",
            img: imgPalitoCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 2300
        },
        {
            title: "Croasanes",
            img:imgPastelCrudo,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 2500
        },],
        
        "pastelesHorneados":[
        {
            title: "Pastel de pollo",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 3500
        },
        {
            title: "Pastel de jamón y queso",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 3500
        },
        {
            title: "Pastel Ranchero",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 3500
        },
        {
            title: "Pastel de carne",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 3500
        },
        {
            title: "Pastel Hawaiano",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 3000 
        },
        {
            title: "Pastel de arequipe",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 3000
        },
        {
            title: "Pastel de arequipe y queso",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 3000
        },
        {
            title: "Pastel de guayaba",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 3000
        },
        {
            title: "Pastel de guayaba y queso",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 3000
        },
        {
            title: "Pastel Gloria",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 3000
        },
        {
            title: "Pastel de queso",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 3000
        },
        {
            title: "Palito",
            img: imgPalitoHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 2800
        },
        {
            title: "Croasanes",
            img: imgPastelHorneado,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 2800
        },],

        "carnes":[
        {
            title: "Pollo al vacío",
            img: imgPolloVacio,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas',
            price: 7500
        },
        {
            title: "Carne al vacío",
            img: imgCarneVacio,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit Unde ea quia nulla ipsa. Nesciunt magnam dolor incidunt quas 3',
            price: 8500 
        }]
        
    }
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
                <div className='container__categorys'>
                    <h1>Categorías</h1>
                    <div className='categorys'>
                        <div className='category'>
                            <p className='textoCategory'>SALSAS</p>
                            <img src={imgCategorySalsas} alt="" />
                        </div>
                        <div className='category'>
                        <p className='textoCategory'>PASTELES CRUDOS</p>
                            <img src={imgPastelCrudo} alt="" />
                        </div>
                        <div className='category'>
                        <p className='textoCategory'>PASTELES</p>
                            <img src={imgCategoryPasteles} alt="" />
                        </div>
                        <div className='category'>
                        <p className='textoCategory'>CARNES</p>
                            <img src={imgCategoryCarnes} alt="" />
                        </div>  
                    </div>
                    </div>
                  
                  <div className="contenedor">
                      
                     <h1 className='short'>Salsas</h1>
                    <div className='contenedor_cards'>
                            {products.salsas.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                      </div>
                      <h1 className='large'>Pasteles crudos</h1>
                      <div className='contenedor_cards'>
                            {products.pastelesCrudos.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                      </div>
                      <h1 className='large'>Pasteleshorneados</h1>
                      <div className='contenedor_cards'>
                            {products.pastelesHorneados.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                      </div>
                      <h1 className='short'>Carnes</h1>
                      <div className='contenedor_cards'>
                            {products.carnes.map((product, index) => (
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
