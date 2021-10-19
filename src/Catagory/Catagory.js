import React from 'react';
import './Catagory.css';

const Catagory=({onRouteChange})=>{
    return(
        <div className='card'>
            <div className='Cname'>CatagoryName</div>
            <div className=''>
            <div onClick={()=>onRouteChange('catagory-product')} className='Cknow'>Enter</div>
            </div>
        </div>
    );
}
export default Catagory;