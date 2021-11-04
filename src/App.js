import React from 'react';
import './App.css';
import Navigation2 from './Navigation2/Navigation.js';
// import Cover from './Cover/Cover.js';
import { CoverData } from './Cover/CoverData';
import { ProductData } from './Product/ProductData';
import CatagoryList from './Catagory/CatagoryList';
import FooterSection from './Footer/Footer.js';
import Product1 from './Product/Product1.js';
import ProductPage from './ProductPage/ProductPage.js';
import OrderPage from './OrderPage/OrderPage.js';
import Slideshow from './PP/PP';
import ProductList from './ProductPage/ProductList';
import SlideShow from './Product/SlideShow';
import Slider from './Slider/Slider';


class App extends React.Component { 
  constructor(){
    super();
  this.state={
    route:'home'
  }
}
  onRouteChange = (route) =>{
    this.setState({route:route});
  }
  render(){  
    return (
    <div className="App">
      <Navigation2 onRouteChange={this.onRouteChange}/>
     

      { 
        this.state.route ==='home'
        ?<div>
            {/* <Cover slides={CoverData}/> */}
            <Slideshow slides={CoverData}/>
            <CatagoryList onRouteChange={this.onRouteChange} />
            <FooterSection/>
             
          </div>
            :(
              this.state.route ==='catagory-product'
              ?<ProductList  onRouteChange={this.onRouteChange}/>
              //  <ProductPage  onRouteChange={this.onRouteChange}/>
               :(this.state.route ==='cart'?
                  <OrderPage onRouteChange={this.onRouteChange}/>
                  :(<Product1 slides={ProductData} onRouteChange={this.onRouteChange}/>)
                 )
              )
      }  
            

    </div>
    
  );
}
}
export default App;
