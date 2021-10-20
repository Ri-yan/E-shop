import logo from './logo.svg';
import React from 'react';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import Navigation2 from './Navigation2/Navigation.js';
import Cover from './Cover/Cover.js';
import { CoverData } from './Cover/CoverData';
import { ProductData } from './Product/ProductData';
import CatagoryList from './Catagory/CatagoryList';
import FooterSection from './Footer/Footer.js';
import Product1 from './Product/Product1.js';
import ProductPage from './ProductPage/ProductPage.js';
import Catagory from './Catagory/Catagory';

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
                <Cover slides={CoverData}/>
                <CatagoryList onRouteChange={this.onRouteChange} />
                <FooterSection/>
                </div>
              :(
                 this.state.route ==='catagory-product'
                 ?<ProductPage  onRouteChange={this.onRouteChange}/>
                 :(<Product1 slides={ProductData}/>)
                )
            }


      {/* <div>
      <Cover slides={CoverData}/>
      <CatagoryList/>
      <FooterSection/>
      <Product1/>
      <ProductPage/>
      </div> */}

    </div>
    
  );
}
}


export default App;
