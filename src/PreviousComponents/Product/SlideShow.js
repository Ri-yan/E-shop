import React, { useState } from "react";
import {ProductData} from './ProductData.js';
import "./SlideShow.css";

// const SlideShow=()=> {
// const [selectedImg, setSelectedImg]= useState(ProductData[0].image);
// return(
//   <div className="A">
//   <div className="Pcontainer">
//     <div className="imgContainer">
//       {
//         ProductData.map((img, index) => (
//         <img className="SP"
//           style={{ border: selectedImg === img ? "4px solid purple" : "" }}
//           key={index}
//           src={img.image}
//           alt="dog"
//           onClick={() => setSelectedImg(img.image)
//           }
//         />
//         ))}
//         </div>
//     <img src={selectedImg} alt="Selected" className="selected" />
    
//     </div>
//   </div>
//   );
// }
// export default SlideShow;


const delay = 2500;

const SlideShow=({slides,onRouteChange})=> {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === ProductData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

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

  return (
    <div className="slideshows">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
        {ProductData.map((slide, index) => {
        return (
              <div className= 'slides pre' key={index}>
              <img src={slide.image} alt='travel' className='image' />
              </div>
            
         
        );
      })}
  

      </div>
      <button className="sliderL" onClick={prevSlide}>&#10094;</button>
      <button className="sliderR"  onClick={nextSlide}>&#10095;</button>
      <div className="slideshowDots d">
        {ProductData.map((_, idx) => (
          <img key={idx}  onClick={() => {setIndex(idx);}}  src={ProductData[idx].image} alt='product' className='preimg `slideshowDot${index === idx ? " active" : ""}`' />
          // <div
          //   key={idx}
          //   className={`slideshowDot${index === idx ? " active" : ""}`}
          //   onClick={() => {
          //     setIndex(idx);
          //   }}
          // ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;