import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ProductCart from '../ProductCard/ProductCard';
import './Shop.css';

const addToCart = (id)=>{
    
}

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("fakeData/products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='shop-section grid grid-cols-5'>
            <div className="product-section col-span-4">
                <span className='grid grid-cols-3'>
                    {
                        products.map(product=><ProductCart 
                            key={product.id} 
                            product={product}
                            addToCart={addToCart}
                            ></ProductCart>)
                    }
                </span>
            </div>
            <div className='cart-section'>
                <Cart/>
            </div>
        </div>
    );
};

export default Shop;