import React from 'react'
import { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'

import '../../pages/producto/css/producto.css'
// import '../../assets/css/style.css'
import imgcilantro from '../../assets/img/imagenesfive/five7.jpg'
import imgguacamole from '../../assets/img/imagenesfive/five5.jpg'
import imgmango from '../../assets/img/imagenesfive/five6.jpg'
// import  imgCategorySalsas from '../../assets/img/imagenesfive/presentacion_salsa2.PNG'
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
    const [products, setProducts] = 
    useState({
        "salsas":[
        {
            title: "Salsa de mango",
            img: imgmango,
            description: '(Descripción)',
            quantity: 0,
            price: 2000
        },
        {
            title: "Salsa de cilantro",
            img: imgcilantro,
            description: '(Descripción)',
            quantity: 0,
            price: 2000
        },
        {
            title: "Salsa de maracuyá",
            img: imgSalsaMaracuya,
            description: '(Descripción)',
            quantity: 0,
            price: 2000
        },
        {
            title: "Salsa de pimentón",
            img: imgSalsaPimenton,
            description: '(Descripción)',
            quantity: 0,
            price: 3000
        },
        {
            title: "Guacamole",
            img: imgguacamole,
            description: '(Descripción)',
            quantity: 0,
            price: 3000
        },
        {
            title: "Hogao",
            img: imgHogado,
            description: '(Descripción)',
            quantity: 0,
            price: 6000
        },
        {
            title: "Aliños",
            img: imgAlino,
            description: '(Descripción)',
            quantity: 0,
            price: 6000
        },],
        
        
        "pastelesCrudos":[
        {
            title: "Pastel de carne",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2700
        },
        {
            title: "Pastel de pollo",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2700
        },
        {
            title: "Pastel de jamón y queso",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2500 
        },
        {
            title: "Pastel Hawaiano",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2500
        },
        {
            title: "Pastel Ranchero",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2500
        },
        {
            title: "Pastel de arequipe y queso",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2300 
        },
        {
            title: "Pastel de arequipe",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2300
        },
        {
            title: "Pastel de guayaba y queso",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2300
        },
        {
            title: "Pastel de guayaba",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2300 
        },
        {
            title: "Pastel Gloria",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2500
        },
        {
            title: "Pastel de queso",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2500
        },
        {
            title: "Palito",
            img: imgPalitoCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2300
        },
        {
            title: "Croasanes",
            img:imgPastelCrudo,
            description: '(Descripción)',
            quantity: 0,
            price: 2500
        },],
        
        "pastelesHorneados":[
        {
            title: "Pastel de pollo",
            img: imgPastelHorneado,
            description: '(Descripción)',
            quantity: 0,
            price: 3500
        },
        {
            title: "Pastel de jamón y queso",
            img: imgPastelHorneado,
            description: '(Descripción)',
            quantity: 0,
            price: 3500
        },
        {
            title: "Pastel Ranchero",
            img: imgPastelHorneado,
            description:'(Descripción)',
            quantity: 0,
            price: 3500
        },
        {
            title: "Pastel de carne",
            img: imgPastelHorneado,
            description:'(Descripción)',
            quantity: 0,
            price: 3500
        },
        {
            title: "Pastel Hawaiano",
            img: imgPastelHorneado,
            description: '(Descripción)',
            quantity: 0,
            price: 3000 
        },
        {
            title: "Pastel de arequipe",
            img: imgPastelHorneado,
            description:'(Descripción)',
            quantity: 0,
            price: 3000
        },
        {
            title: "Pastel de arequipe y queso",
            img: imgPastelHorneado,
            description: '(Descripción)',
            quantity: 0,
            price: 3000
        },
        {
            title: "Pastel de guayaba",
            img: imgPastelHorneado,
            description: '(Descripción)',
            quantity: 0,
            price: 3000
        },
        {
            title: "Pastel de guayaba y queso",
            img: imgPastelHorneado,
            description: '(Descripción)',
            quantity: 0,
            price: 3000
        },
        {
            title: "Pastel Gloria",
            img: imgPastelHorneado,
            description: '(Descripción)',
            quantity: 0,
            price: 3000
        },
        {
            title: "Pastel de queso",
            img: imgPastelHorneado,
            description:'(Descripción)',
            quantity: 0,
            price: 3000
        },
        {
            title: "Palito",
            img: imgPalitoHorneado,
            description: '(Descripción)',
            quantity: 0,
            price: 2800
        },
        {
            title: "Croasanes",
            img: imgPastelHorneado,
            description: '(Descripción)',
            quantity: 0,
            price: 2800
        },],

        "carnes":[
        {
            title: "Pollo al vacío",
            img: imgPolloVacio,
            description: '(Descripción)',
            quantity: 0,
            price: 7500
        },
        {
            title: "Carne al vacío",
            img: imgCarneVacio,
            description: '(Descripción)',
            quantity: 0,
            price: 8500 
        }],
        
});
const handleButtonAdd=(category,index)=>{
    const newProducts ={ ...products};
    newProducts[category][index].quantity++;
    setProducts(newProducts);
};
const handleButtonSubtract=(category,index)=>{
    const newProducts ={ ...products};
    newProducts[category][index].quantity--;
    setProducts(newProducts);
};
  return (
    <>
    
      <Header />


      
        <main>
              <div className="bannerx">
                  <div className="contenedorx">
                      <div className="banner__contenedor">
                          <h1 className="banner__titulox"> PRODUCTOS</h1>
                      </div>
                  </div>
              </div>


              <section className="section__productos">
                <div className='container__categorys'>
                    <h1>Categorías</h1>
                    <div className='categorys'>
                        <div className='category ' >
                            <p className='textoCategory'>SALSAS</p>
                            <a href="#salsas" className='imgSalsa'></a>
                        </div>
                        <div className='category'>
                        <p className='textoCategory'>PASTELES CRUDOS</p>
                            <a href="#pasteles_crudos" className='imgPastelC'></a>
                        </div>
                        <div className='category'>
                        <p className='textoCategory'>PASTELES</p>
                           <a href="#pasteles_horneados" className='imgPatel'></a>
                        </div>
                        <div className='category'>
                        <p className='textoCategory'>CARNES</p>
                           <a href="#carnes" className='imgCarnes'></a>
                        </div>  
                    </div>
                    </div>
                  
                  <div className="contenedor">
                      
                     <h1 className='short'>Salsas</h1>
                    <div className='contenedor_cards' id='salsas'>
                            {products.salsas.map((product, index) => (
                                <ProductCard key={index} product={product} onAdd={()=> handleButtonAdd('salsas',index)} onSub={()=> handleButtonSubtract('salsas',index)}/>
                            ))}
                      </div>
                      <h1 className='large'>Pasteles Crudos</h1>
                      <div className='contenedor_cards'id='pasteles_crudos'>
                            {products.pastelesCrudos.map((product, index) => (
                                <ProductCard key={index} product={product} onAdd={()=> handleButtonAdd('pastelesCrudos',index)} onSub={()=> handleButtonSubtract('salsas',index)}/>
                            ))}
                      </div>
                      <h1 className='large'>Pasteles Horneados</h1>
                      <div className='contenedor_cards' id='pasteles_horneados'>
                            {products.pastelesHorneados.map((product, index) => (
                                <ProductCard key={index} product={product} onAdd={()=> handleButtonAdd('pastelesHorneados',index)} onSub={()=> handleButtonSubtract('salsas',index)}/>
                            ))}
                      </div>
                      <h1 className='short'>Carnes</h1>
                      <div className='contenedor_cards' id='carnes'>
                            {products.carnes.map((product, index) => (
                                <ProductCard key={index} product={product} onAdd={()=> handleButtonAdd('carnes',index)} onSub={()=> handleButtonSubtract('salsas',index)}/>
                            ))}
                      </div>
                      
                  </div>
              </section>
                
                <div className="tbn-whatsapp">
                  <a href="https://api.whatsapp.com/send/?phone=573105446463&text=¡Hola! Estoy interesado en conocer más sobre Five Alimentos Empacados&type=phone_number&app_absent=0" target="_blank">
                      <div className="tbn-whatsapp__icono "></div>
                  </a>
              </div>

        </main>


      <Footer/>
    </>
  )
};

export default Producto
