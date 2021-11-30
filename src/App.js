import React from 'react';
import './App.css';
import { CoverData } from './Cover/CoverData';
import CatagoryList from './Catagory/CatagoryList';
import FooterSection from './Footer/Footer.js';
import OrderPage from './OrderPage/OrderPage.js';
import ProductList from './ProductList/ProductList.js';
import Cover from './Cover/Cover';
import ContentBar2 from './Navigation/SideNav2/ContentBar2/ContentBar';
import ProductPage from './ProductPage/ProductPage.js';
import TitleBar from './Navigation/TitleBar';

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

      <TitleBar onRouteChange={this.onRouteChange}/>
      <ContentBar2/>
      { 
        this.state.route ==='home'
        ?<div>
            <Cover slides={CoverData}/>
            <CatagoryList onRouteChange={this.onRouteChange} />
            <FooterSection/>
          </div>
            :(
              this.state.route ==='catagory-product'
              ?<ProductList  onRouteChange={this.onRouteChange}/>
               :(this.state.route ==='cart'?
                  <OrderPage onRouteChange={this.onRouteChange}/>
                  :(
                  <ProductPage onRouteChange={this.onRouteChange}/>
                  )
                 )
              )
      }  
    </div>
    
  );
}
}
export default App;
