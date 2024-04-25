import React from 'react';
import { FiShoppingCart, FiDollarSign } from 'react-icons/fi';
import '../../pages/producto/css/producto.css';

const ProductCard = ({ product }) => {
    const {img,title,description,price} = product;
    return (
            <div className='card'>
           
            <div className="card__imagen">
                <img src={img} alt="{description}" />
            </div> 
            <div className='card__title'>
                <h2>{title}</h2>
            </div>
            

                <div className='card__bottom'>
                <p className='card__precio'><FiDollarSign />{price}</p>
                <button className='product-card__button'>
                    <FiShoppingCart /> 
                </button>
                </div>
                </div>
            

    );
};

export default ProductCard;