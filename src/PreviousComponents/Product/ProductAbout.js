import React from "react";
import './Product.css';

const ProductAbout=({onRouteChange})=>{
    return(
        <div className="about-pages">
            <div className="history">
                <div onClick={()=>onRouteChange('home')}>Home{">"}</div>
                <div onClick={()=>onRouteChange('catagory-product')}>Catagory{">"}</div>
                <div onClick={()=>onRouteChange('catagory-product')}>Stationay{">"}</div>
                <div>pen{">"}</div>
                </div>
    <div className='pdetails'>
         <div className='pname'>An Ordinary Pen</div>
         <div className='by'> By ABC</div>
         <div className='RR'>&#9733;&#9733;&#9733;&#9734;&#9734; 256 Rating, 120 Reviews</div>
         <div className='price'>$20/-</div>
         <div className=''>
         <div className='offer'>Offers</div>
         <ul className='offer1'>
             <li>2% off on online payment.</li>
             <li>5% off on abc bank cards.</li>
             <li>free register subscrption</li>
             <li>Free Delevery on oorders above $50/-.</li>
         </ul>
         </div>
         </div>

         <div className='pcolor'>
             <div className='pvarient'>Varients</div>
             <div className='varients'>
            <div className=''>
             <img className='preimg' alt='product' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
             <div className=''>Blue</div>
             </div>
             <div className=''>
             <img className='preimg' alt='product' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
             <div className=''>Black</div>
             </div>
             <div className=''>
             <img className='preimg' alt='product' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
             <div className=''>red</div>
             </div>           
             </div>
         
         </div>


         <div className='pavail'>
         <div className='avail'>Check Availability</div>
         <div className='pinput'>
           <input className='pin' placeholder='enter area pincode' type='text' size='20px'/>
            <input className='psub' type='submit' size='20px'/>  
         </div>
         
         </div>


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
         <div className='rating'>
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
            <div className='show'>show more</div>
        </div>

        
         <div className='pdis sim'>Similar Product Section</div>

        
    
    </div>
    );
}
export default ProductAbout;