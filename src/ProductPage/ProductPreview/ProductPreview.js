import React, {useState} from 'react'
import './ProductPreview.css'
import BtnSlider from './BtnSlider'
// import {ProductData} from './ProductData.js';
export default function ProductPreview({ProductData}) {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if(slideIndex !== ProductData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === ProductData.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(ProductData.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className='S'>
            <div className="scontainer-slider">
                {ProductData.map((obj, index) => {
                    return (
                        <img
                        // key={obj.id} 
                        src={ProductData[index].image} alt='product' 
                        className={slideIndex === index + 1 ? "sslide sactive-anim" : "sslide"}
                        />     
                    )
                })}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            </div>

            <div className="scontainer-dots">
                    {Array.from({length: ProductData.length}).map((item, index) => (
                        <img 
                        src={ProductData[index].image} alt='product'
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "sdot active" : "sdot"}
                        />
                    ))}
            </div>
        </div>
    )
}
