import React , { useState } from "react";
import './Product.css';
import {ProductData} from './ProductData.js';

const ProductOLD=({slides,onRouteChange})=>{
    const [current, setCurrent] = useState(0);
    let length = slides.length;
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
    return(
<div className='about-title'>
 
<div className='previews'>
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
    </div>
    </div> 
    );
}
export default ProductOLD;