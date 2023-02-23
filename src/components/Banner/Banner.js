import React from 'react';
import banner from '../../images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-section grid grid-cols-3 h-screen'>
            <div className="banner-title col-span-2 m-auto">
                <small>Sale up to 70% off</small>
                <p className='text-5xl font-bold mt-10'>New Collection For All</p>
                <p className='font-bold'>Discover all the new arrivals of ready-to-wear collection.</p>
                <button className='shop-btn mt-10'><a href="/shop">Shop now</a></button>
            </div>
            <div className="banner-image my-auto">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;