import React from 'react';
import './OrderPage.css';
import OrderTile from './OrderTile/OrderTile';
import {ProductData} from './ProductData.js';

const  OrderPage=({onRouteChange})=>{
    const increase=()=>{
        document.getElementsByClassName('quantity')[0].value++;
    }
    const decrease=()=>{
        if(document.getElementsByClassName('quantity')[0].value>0)
           { document.getElementsByClassName('quantity')[0].value--;}
           else{
               console.log("cart value cannot be negative")
           }
    }
    return(
        <div>
            <div className="history hh">
                <div onClick={()=>onRouteChange('home')}>Home{">"}</div>
                <div onClick={()=>onRouteChange('cart')}>Cart{">"}</div>
            </div>
        <div className='oorder'>
            <div className='oitems'>
            <OrderTile/>
            <OrderTile/>
            <OrderTile/>  
        </div>
            <div className='oprice'>
                <table border='1'>
                    <tr>
                        <td  colspan='3'>Price detail</td>
                    </tr>
                    <tr>
                        <td>Price(item)</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td>free</td>
                    </tr>
                    <tr>
                        <td>Delivery</td>
                        <td>free</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$100</td>
                    </tr>
                </table>
                <div className='oorderbutton'>Place Order</div>
            </div>
        </div>
        </div>
    );
}
export default OrderPage;