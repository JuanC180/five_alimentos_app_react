import React from 'react';
import '../../pages/producto/css/producto.css';

const ProductCard = ({ product }) => {
    const {img,title,description,price} = product;
    const handleButtonClick = () => {
        const whatsappUrl = `https://wa.me/3143922490?text=Estoy%20interesado%20en  : %20*_${title}_* Con valor de: *$${price}*`;
        window.open(whatsappUrl, '_blank');
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
                
                <div className='contenedor__bottom'>
                
                <button className='product-card__button' onClick={handleButtonClick}>
                    ¡Lo quiero!
                </button></div>
                </div>
            

    );
};

export default ProductCard;