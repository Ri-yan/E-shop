import React, { useState } from 'react';
import './Cover.css';
import {CoverData} from './CoverData.js';

const Cover=({slides})=>{
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
  <div className="c">
    <button class="slideright" onClick={prevSlide}>&#10094;</button>
    <button class="slideleft"  onClick={nextSlide}>&#10095;</button>
     {CoverData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='image' />
            )}
          </div>
        );
      })}
    
  </div>
	);
   
}
export default Cover;