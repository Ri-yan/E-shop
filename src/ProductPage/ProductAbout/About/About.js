import { Link } from 'react-router-dom';
import './About.css';
import star from '../../../ICONS/InProductPage/star.svg';
const AboutProduct=({onRouteChange})=>{
    return(
    <div className='discription'>
   <div className='p1'> 
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
            <div className='add'>
                <div className='btn'>+</div>
                <div className='num'>2</div>
                <div className='btn'>-</div>
            </div>
        
         </div>
         </div>
         <div className='options'>
         <img src={star} className='fav'  name='favourite'  alt="star"/>
         <Link to={'cart'}><div onClick={()=>onRouteChange('cart')} className='btn-buy'>Add to Cart</div></Link>
         <Link to={'cart'}><div onClick={()=>onRouteChange('cart')} className='btn-buy'>Buy</div></Link>
         {/* <div className='btn-buy'>favourite</div> */}

         </div>

         </div>
         <div className='pavail'>
         <div className='avail'>Check Availability</div>
         <div className='pinput'>
           <input className='pin' placeholder='enter area pincode' type='text' size='20px'/>
            <input className='psub' type='submit' size='20px'/>  
         </div>
         
         </div>
         
         <div className='Varientpcolor'>
             <div className='pvarient'>Varients</div>
             <div className='varients'>
            <div className='vname'>
             <img className='preimg' alt='product' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
             <div className='vname'>Blue</div>
             </div>
             <div className='vname'>
             <img className='preimg' alt='product' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
             <div className='vname'>Black</div>
             </div>
             <div className='vname'>
             <img className='preimg' alt='product' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
             <div className='vname'>red</div>
             </div>           
             </div>
         
         </div>
    </div>
    );
}
export default AboutProduct;