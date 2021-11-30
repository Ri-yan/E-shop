import React from 'react';
import './ContentBar.css';
const ContentBar=({onRouteChange})=>{

return(		
    <div className="Pbar">
                <div className='PP'>Offers</div>
                <div className='PP'>Electronics</div>
                <div className='PP'>Fashion</div>
                <div className='PP'>Groceries</div>
                <div className='PP'>Home Furnishings</div>
                <div className='PP'>More</div>
    </div>
	);
   
}
export default ContentBar;