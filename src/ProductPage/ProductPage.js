import ProductPreview from "./ProductPreview/ProductPreview";
import './ProductPage.css';
import AboutProduct from "./ProductAbout/About/About";
import Discription from "./ProductAbout/Description/Discription";

const ProductPage=({onRouteChange})=>{
    return(
<div className='Product'> 
<div className="history">
                <div onClick={()=>onRouteChange('home')}>Home{">"}</div>
                <div onClick={()=>onRouteChange('catagory-product')}>Catagory{">"}</div>
                <div onClick={()=>onRouteChange('catagory-product')}>Stationay{">"}</div>
                <div>pen{">"}</div>
                </div>
    <div className='first'>
    <ProductPreview onRouteChange={onRouteChange}/>
    <AboutProduct onRouteChange={onRouteChange}/>
    </div>
    <div className='page'><Discription/></div>
    </div> 
    );
}
export default ProductPage;