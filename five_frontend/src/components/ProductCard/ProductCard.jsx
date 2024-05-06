import React from 'react';
import { useState } from 'react';
import '../../pages/producto/css/producto.css';

const ProductCard = ({ product }) => {
    const {img,title,quantity,description,price} = product;
    const [productQuantity, setProductQuantity] = useState(product.quantity);
    const handleButtonClick = () => {
        const whatsappUrl = `https://wa.me/3143922490?text=Estoy%20interesado%20en%20:%20${productQuantity}%20*_${title}_*%20*-*%20Valor%20total%20de%20la%20compra:%20*$${price*productQuantity}*`;
        window.open(whatsappUrl, '_blank');
    };

    const handleButtonAdd = () => {
        setProductQuantity(productQuantity + 1);
    };
    const handleButtonSubtract = () => {
        if (productQuantity > 0)
        {setProductQuantity(productQuantity - 1);}
        
    };

    return (
            <div className='card'>
           
            <div className="card__imagen">
                <img src={img} alt="{description}" />
            </div>
            
            <div className='card__title'>
                <h2>{title}</h2>
            </div>
            <div className='contenedor__precio'> 
                <p className='card__precio'>$ {price}</p>
            </div>
            <p className='description'>{description}</p>
            <div className='cantidad'><p>Cantidad:  </p>  <p><button className='product-card__buttonm' onClick={handleButtonSubtract}>
                    -
                </button> {productQuantity} <button className='product-card__buttonM' onClick={handleButtonAdd}>
                    +
                </button> </p></div>
            
                
                <div className='contenedor__bottom'>
                    
                
                <button className='product-card__button' onClick={handleButtonClick}>
                    ¡Lo quiero!
                </button>
                </div>
                </div>
            

    );
};

export default ProductCard;