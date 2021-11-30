// import React , { useState } from "react";
import Slider from "../Slider/Slider";
import './Product.css';
import ProductAbout from "./ProductAbout";
// import {ProductData} from './ProductData.js';
// import ProductOLD from "./ProductOLD";

const Product1=({slides,onRouteChange})=>{
    // const [current, setCurrent] = useState(0);
    // let length = slides.length;
    // const nextSlide = () => {
    //   setCurrent(current === length - 1 ? 0 : current + 1);
    // };
    // const prevSlide = () => {
    //   setCurrent(current === 0 ? length - 1 : current - 1);
    // };
  
    // if (!Array.isArray(slides) || slides.length <= 0) {
    //   return null;
    // }

    return(

<section className='about'>
    <div className='about-title'>
      <Slider onRouteChange={onRouteChange}/>
      {/* <ProductOLD slides={slides}/> */}
        {/* <div className='previews'>
          {
          ProductData.map((preimg, index) => {
          return (
                <div>
                  {
                  index === current 
                  ?<img src={ProductData[index].image} alt='product' className='preimg bo' />
                  :<img src={ProductData[index].image} alt='product' className='preimg ' />
                  }
              </div>
          );
        })
        }
          <button className="sliderup" onClick={prevSlide}>&uarr;</button>
          <button className="sliderdown" onClick={nextSlide}>&darr;</button>
        </div>

    <div className='pbuy'>
    {ProductData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='pre' />
            )}
          </div>
        );
      })}
    <button className="sliderL" onClick={prevSlide}>&#10094;</button>
    <button className="sliderR"  onClick={nextSlide}>&#10095;</button>
     
    <div className='buy'>
    <div className='b' onClick={()=>onRouteChange('cart')}>Add to cart</div>
    <div className='b'onClick={()=>onRouteChange('cart')}>Buy</div>
    </div>
    </div> */}
    </div>
    <ProductAbout onRouteChange={onRouteChange}/>
    </section> 
    );
}
export default Product1;