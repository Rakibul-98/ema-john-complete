import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ProductCart from '../ProductCard/ProductCard';
import { addToDb, getStoredCart } from '../utilities/manageDb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch("fakeData/products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart =[];
        for (const id in storedCart) {
            const addedProduct = products.find(product=>product.id === id);
            if (addedProduct) {
                const quantity=storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        
    },[products])

    const addToCart = (selectedProduct)=>{
        let newCart = [];
        const exists = cart.find(product=>product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product=>product.id !== selectedProduct.id);
            exists.quantity = exists.quantity+1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;