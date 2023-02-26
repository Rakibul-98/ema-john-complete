import React from 'react';
import './ProductCard.css';


const ProductCart = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const addToCart = props.addToCart;
    return (
        <div className='product-card mt-14 ml-14'>
            <img className='product-img py-1.5 m-auto' src={img} alt="" />
            <div className='p-5'>
                <h3>{name}</h3>
                <small>Price: ${price}</small>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>addToCart(props.product)} className='cart-btn absolute bottom-0 rounded-b py-2'>Add to cart</button>
            {/* <button onClick={()=>addToDb(id)} className='cart-btn absolute bottom-0 rounded-b py-2'>Add to cart</button>        */}
        </div>
    );
};

export default ProductCart;