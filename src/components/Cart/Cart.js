import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className="h-screen p-10 sticky top-0">
            <h5 className='text-center text-2xl font-bold mb-5'>Order Summery</h5>
            <p>Selected Items</p>
            <p>Total price</p>
            <p>Total Shipping cost</p>
            <p>Vat</p>
            <p>Grand total</p>
            <button className='bg-orange-600 text-white py-2 px-10 my-3 w-full hover:bg-orange-400'>Clear Cart</button>
            <button className='bg-yellow-400 text-white py-2 px-10 w-full hover:bg-yellow-600'>Review order</button>
        </div>
    );
};

export default Cart;