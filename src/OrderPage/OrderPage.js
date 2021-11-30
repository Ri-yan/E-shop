import React from 'react';
import './OrderPage.css';
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
                <div className='oordered'>
                    <div className="oopreview">
                        <img className='oopre' alt='product' src={ProductData[0].image}/>
                        <div className="ovalue">
                            <input onClick={decrease} type='submit' value='-' className='oq'/>
                            <input type='text' value='0' className='oquantity'/>
                            <input onClick={increase} type='submit' value='+' className='oq'/>

                        </div>
                    </div>
                    <div className="oorderabout">
                        <div className="oodis">
                            <div>The Pen</div>
                            <div>By AbC</div>
                            <div>$100</div>
                            <div className='ovalue2'>
                                <div>Remove</div>
                                <div> Save for later</div>
                            </div>
                        </div>
                        <div className="oavail">
                            <div className='ooinput'>
                                <input className='ooin' placeholder='enter area pincode' type='text' size='20px'/>
                                <input className='oosub' type='submit' size='20px'/>  
                            </div>
                            <div>Delivery By 20 jan 2021</div>
                        </div>
                    </div>
                </div>
                <div className='oordered'>
                <div className="oopreview">
                        <img className='oopre' alt='product' src={ProductData[0].image}/>
                        <div className="ovalue">
                            <input onClick={decrease} type='submit' value='-' className='q'/>
                            <input type='text' value='0' className='quantity'/>
                            <input onClick={increase} type='submit' value='+' className='q'/>

                        </div>
                    </div>
                    <div className="oorderabout">
                        <div className="oodis">
                            <div>The Pen</div>
                            <div>By AbC</div>
                            <div>$100</div>
                            <div className='ovalue2'>
                                <div>Remove</div>
                                <div> Save for later</div>
                            </div>
                        </div>
                        <div className="oavail">
                            <div className='ooinput'>
                                <input className='ooin' placeholder='enter area pincode' type='text' size='20px'/>
                                <input className='oosub' type='submit' size='20px'/>  
                            </div>
                            <div>Delivery By 20 jan 2021</div>
                        </div>
                    </div>
                </div>
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