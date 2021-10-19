import './ProductPage.css';
import React from "react";

const ProductPage=({onRouteChange})=>{
    return(
    <div className="ppage">

        <div className="product">
            <img className='' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
            <div className="pd">
                <div className="name">Abc's The Ordinary Pen</div>
                <div className="RR">&#9733;&#9733;&#9733;(20056)</div>
                <div className="price"><strike>$50</strike>$20</div>
                <div onClick={()=>onRouteChange('product')} className="know">know more >></div>
            </div>
        </div>
        <div className="product">
            <img className='' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
            <div className="pd">
                <div className="name">Abc's The Ordinary Pen</div>
                <div className="RR">&#9733;&#9733;&#9733;(20056)</div>
                <div className="price"><strike>$50</strike>$20</div>
                <div onClick={()=>onRouteChange('product')} className="know">know more >></div>
            </div>
        </div>
        <div className="product">
            <img className='' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
            <div className="pd">
                <div className="name">Abc's The Ordinary Pen</div>
                <div className="RR">&#9733;&#9733;&#9733;(20056)</div>
                <div className="price"><strike>$50</strike>$20</div>
                <div onClick={()=>onRouteChange('product')} className="know">know more >></div>
            </div>
        </div>
        <div className="product">
            <img className='' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
            <div className="pd">
                <div className="name">Abc's The Ordinary Pen</div>
                <div className="RR">&#9733;&#9733;&#9733;(20056)</div>
                <div className="price"><strike>$50</strike>$20</div>
                <div onClick={()=>onRouteChange('product')} className="know">know more >></div>
            </div>
        </div>
        <div className="product">
            <img className='' src='https://www.montblanc.com/variants/images/34480784411791124/A/w570.jpg'/>
            <div className="pd">
                <div className="name">Abc's The Ordinary Pen</div>
                <div className="RR">&#9733;&#9733;&#9733;(20056)</div>
                <div className="price"><strike>$50</strike>$20</div>
                <div onClick={()=>onRouteChange('product')} className="know">know more >></div>
            </div>
        </div>
    </div>
    );
}
export default ProductPage;