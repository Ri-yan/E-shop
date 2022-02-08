import React from 'react';
import './OrderTile.css';

const  OrderTile=({onRouteChange})=>{
    return(
        <div className="otile">
        <img className='oimg' alt='product' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
        <div className="odis">
            <div>
                <div className="oname">Abc's The Ordinary Pen</div>
                <div className="oManufac">Abc ltd</div>
                <div className="odissmall">
                    <div className='btn-add'>+</div>
                    <div className='btn-add'>0</div>
                    <div className='btn-add'>-</div>
                </div>
                </div>
                <div className='content'>
                <div className="ostars">
                    <div className='btn-ar'>remove</div>
                    <div className='btn-ar'>save for later</div>
                </div>
                <div className="ooprice">Delivery by 2022</div>
            </div>  
            </div>

    </div>
    );
}
export default OrderTile;