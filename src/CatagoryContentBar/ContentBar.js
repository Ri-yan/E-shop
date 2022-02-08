import React from 'react';
import './ContentBar.css';
import  {Link}  from "react-router-dom";
import { ContentBarData } from './ContentBarData';
const ContentBar2=({onRouteChange})=>{

return(		
    <div className="Pbar">
        {
            ContentBarData.map((items,index)=>{
                 return(  
                 <Link to={items.route}>           
                    <div className='PP' onClick={()=>onRouteChange('catagory-product')}  key={index}>
                        {items.title}  
                    </div>
                </Link>
                         )
                        })
                    }
                {/* <div className='PP'>Offers</div>
                <div className='PP'>Electronics</div>
                <div className='PP'>Fashion</div>
                <div className='PP'>Groceries</div>
                <div className='PP'>Home Furnishings</div>
                <div className='PP'>More</div> */}
    </div>
	);
   
}
export default ContentBar2;