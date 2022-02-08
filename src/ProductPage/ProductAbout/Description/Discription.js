import React from "react";
import ReviewList from "../../ReviewSection/ReviewList/ReviewList";
import './Discription.css';

const Discription=({onRouteChange})=>{
    return(
        <div className="about-pages">
         <div className='dis'>
         <div className='pdis'>Product Discription Or Details</div>
         <table  height='500' width='90%' className='detail'>
            <tr>
                <th>Model</th>
                <td>13promax</td>
            </tr>
            <tr>
                <th>Features</th>
                <td>It writes</td>
            </tr>
            <tr>
                <th>Color</th>
                <td>Black,Blue,Red etc</td>
            </tr>
            <tr>
                <th>Dimensions</th>
                <td>20x3x20</td>
            </tr>
        </table> 
        
         </div>
         <div className='show'>show more</div>


<div>
<ReviewList/>

         {/* <div className='rating'>
             <div className=''>Rating and Reviews</div>
             <div className=''>&#9733;&#9733;&#9733;&#9733;</div>
             <div className='review'>
                <div className='r1'>Riyan </div>
                <div className=''>&#9733;&#9733;&#9733;&#9733;</div>
                <div className='r1'>This pen is very nice you can write your future with ifself.</div>
             </div>
             <div className='review'>
                <div className='r1'>Riyan </div>
                <div className=''>&#9733;&#9733;&#9733;&#9733;</div>
                <div className='r1'>This pen is very nice you can write your future with ifself.</div>
             </div>
             <div className='review'>
                <div className='r1'>Riyan </div>
                <div className=''>&#9733;&#9733;&#9733;&#9733;</div>
                <div className='r1'>This pen is very nice you can write your future with ifself.</div>
             </div>
            </div>
            <div className='show'>show more</div> */}
        </div>

        
         <div className='pdis sim'>Similar Product Section</div>

        
    
    </div>
    );
}
export default Discription;