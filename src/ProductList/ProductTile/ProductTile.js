import React from "react";
import product from './ProductTile.module.css';
import  {Link}  from "react-router-dom";

const ProductTile=({onRouteChange})=>{
    return(
        <Link to={'product'}> <div onClick={()=>onRouteChange('product')} className={product.Ptile}>
        <img className={product.Pimg} alt='product' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
        <div className={product.Pdis}>
                <div className={product.Pname}>Abc's The Ordinary Pen</div>
                <div className={product.Manufac}>Abc ltd</div>
                <div className={product.Pdissmall}>A high standard pencil with a stylish and classy design.....</div>
                <div className={product.Pstars}><div style={{color:'gold'}}>&#9733;&#9733;&#9733;</div>(20056)</div>
                <div className={product.Pprice}>$20<strike>$50</strike></div>
                <div className={product.Pdelivery}>*Delivery charges may apply</div>
            </div>
    </div>
    </Link>
    );
}
export default ProductTile;