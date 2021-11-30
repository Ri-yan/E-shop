import React from "react";
import './ProductTile.css';

const ProductTile=({onRouteChange})=>{
    return(
        <div onClick={()=>onRouteChange('product')} className="Ptile">
        <img className='Pimg' alt='product' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
        <div className="Pdis">
                <div className="Pname">Abc's The Ordinary Pen</div>
                <div className="Manufac">Abc ltd</div>
                <div className="Pdissmall">A high standard pencil with a stylish and classy design.....</div>
                <div className="Pstars"><div style={{color:'gold'}}>&#9733;&#9733;&#9733;</div>(20056)</div>
                <div className="Pprice">$20<strike>$50</strike></div>
                <div className="Pdelivery">*Delivery charges may apply</div>
                {/* <div onClick={()=>onRouteChange('product')} className="know">know more</div> */}
            </div>
    </div>
    );
}
export default ProductTile;