import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total=0;
    let shipping=0;
    for (const product of cart) {
        total=total+product.price;
        shipping=shipping+product.shipping;
    }

    let vat = (total*0.015).toFixed(2);
    let discount;

    if (total>999) {
        discount = total*0.01;
    }
    else{
        discount = 0;
    }

    let grandTotal = (total+shipping+parseInt(vat)-discount);
    return (
        <div className="h-screen p-10 sticky top-0">
            <h5 className='text-center text-2xl font-bold mb-5'>Order Summery</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: $ {total}</p>
            <p>Total Shipping cost: $ {shipping} </p>
            <p>Vat: $ {vat}</p>
            <p>Discount: $ {discount}</p>
            <p>Grand total: ${grandTotal}</p>
            <button className='bg-orange-600 text-white py-2 px-10 my-3 w-full hover:bg-orange-800'>Clear Cart</button>
            <button className='bg-yellow-400 text-white py-2 px-10 w-full hover:bg-yellow-600'>Review order</button>
        </div>
    );
};

export default Cart;