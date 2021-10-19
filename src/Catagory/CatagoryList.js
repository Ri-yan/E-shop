import react from 'react';
import './Catagory.css';
import Catagory from './Catagory.js';
const CatagoryList=({onRouteChange})=>{
    return(
        <div className='grid'>
            <div className='card'>
            <div className='Cname'>CatagoryName</div>
            <div className=''>
            <div onClick={()=>onRouteChange('catagory-product')} className='Cknow'>Enter</div>
            </div>
        </div>
        <div className='card'>
            <div className='Cname'>CatagoryName</div>
            <div className=''>
            <div onClick={()=>onRouteChange('catagory-product')} className='Cknow'>Enter</div>
            </div>
        </div>
        <div className='card'>
            <div className='Cname'>CatagoryName</div>
            <div className=''>
            <div onClick={()=>onRouteChange('catagory-product')} className='Cknow'>Enter</div>
            </div>
        </div>
        <div className='card'>
            <div className='Cname'>CatagoryName</div>
            <div className=''>
            <div onClick={()=>onRouteChange('catagory-product')} className='Cknow'>Enter</div>
            </div>
        </div>
            <Catagory/>
            <Catagory/>
            <Catagory/>
            <Catagory/>
            <Catagory/>
            <Catagory/>
            <Catagory/>
            <Catagory/>
        </div>
    );
}
export default CatagoryList;