import React from 'react';
import './Catagory.css';

const Catagory=({cname,onRouteChange})=>{
    return(
        <div className='card'>
            <div className='Cname'>{cname}</div>
            <div className=''>
            <div onClick={()=>onRouteChange('catagory-product')} className='Cknow'>Enter</div>
            </div>
        </div>
    );
}
export default Catagory;