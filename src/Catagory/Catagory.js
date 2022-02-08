import React from 'react';
import './Catagory.css';
import  {Link}  from "react-router-dom";

const Catagory=({cname,onRouteChange})=>{
    return(
        <div className='card'>
            <div className='Cname'>{cname}</div>
            <div className=''>
            <Link to={'catagory-product'}><div onClick={()=>onRouteChange('catagory-product')} className='Cknow'>Enter</div></Link>
            </div>
        </div>
    );
}
export default Catagory;