import React from 'react';
import './App.css';
// import { CoverData } from './Cover/CoverData';
import CatagoryList from './Catagory/CatagoryList';
import FooterSection from './Footer/Footer.js';
import OrderPage from './OrderPage/OrderPage.js';
import ProductList from './ProductList/ProductList.js';
import Cover from './Cover/Cover';
import ContentBar2 from './CatagoryContentBar/ContentBar';
import ProductPage from './ProductPage/ProductPage.js';
import TitleBar from './Navigation/TitleBar';
import {CatagoryData} from './Server/Catagory';
import {CoverData} from './Server/CoverData';
import {ProductData} from './Server/ProductData';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

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
    <Router>
    <div className="App">
    <TitleBar onRouteChange={this.onRouteChange}/>
    <ContentBar2/>
    <Routes>
          <Route exact path='/E-shop/' element={
          <div>
            <Cover slides={CoverData} CoverData={CoverData}/>
            <CatagoryList onRouteChange={this.onRouteChange} CatagoryData={CatagoryData} />
            <FooterSection/>
          </div>
        }>

      </Route>
          <Route exact path='/E-shop/catagory-product' element={<ProductList  onRouteChange={this.onRouteChange}/>}></Route>
          <Route exact path={'/E-shop/catagory-product/product/cart'||'/cart'} element={<OrderPage onRouteChange={this.onRouteChange}/>}></Route>
          <Route exact path='/E-shop/catagory-product/product' element={<ProductPage ProductData={ProductData} onRouteChange={this.onRouteChange}/>}></Route>
   </Routes>
   </div>
</Router>
  );
}
}

export default App;