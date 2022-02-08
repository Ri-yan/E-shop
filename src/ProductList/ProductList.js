import './ProductList.css';
import React from "react";
import ProductTile from './ProductTile/ProductTile';

const ProductList=({onRouteChange})=>{
    return(

    <div className=''>
        <div className="history h">
                <div onClick={()=>onRouteChange('home')}>Home{">"}</div>
                <div onClick={()=>onRouteChange('catagory-product')}>Catagory{">"}</div>
        </div>
        <div className='Pgrid'>
            <ProductTile onRouteChange={onRouteChange}/>
            <ProductTile onRouteChange={onRouteChange}/>
            <ProductTile onRouteChange={onRouteChange}/>
            <ProductTile onRouteChange={onRouteChange}/>
            <ProductTile onRouteChange={onRouteChange}/>
            <ProductTile onRouteChange={onRouteChange}/>
            <ProductTile onRouteChange={onRouteChange}/>
            <ProductTile onRouteChange={onRouteChange}/>
        </div> 
       

    </div>
    );
}
export default ProductList;