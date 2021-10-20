import React from 'react';
import './Navigation2.css';

const Navigation2=({onRouteChange})=>{

    

const mobileMenu=()=> {
    document.querySelector(".hamburger").classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
}
function closeMenu() {
    document.querySelector(".hamburger").current.classList.remove("active");
    document.querySelector(".nav-menu").classList.remove("active");
}
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", closeMenu));

return(		
    <header className="nav-fix">
        <div className="header1" id='nav'>
        <a href="#nav" className="logo">E-shop</a>
        <div >
            <input className="nav-logo search" type="text" name="search"/>
            <input className='searchsub' type="submit" value="&#128269;"></input></div>
            <div className="nav-logo">&#128722;</div>

        </div>

        <nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item">
                    <p className="nav-link nav-logo">My Profile</p>
                </li>
                {/* <li  className="nav-item" >
                    <p onClick={()=>onRouteChange('home')} className="nav-link">Home</p>
                </li> */}
                <li className="nav-item" >
                    {/* <p className="nav-link">Category */}

                            <nav className="navigation">
                            <ul className="mainmenu  nav-item">
                                <li  onClick={()=>onRouteChange('home')}><a>Home</a></li>
                                <li><a>Offers Zone</a></li>
                                <li><a>My Orders</a></li>
                                <li><label for="products">Category</label><input type="checkbox" id="products"/>
                                <ul className="submenu nav-links">
                                    <li onClick={()=>onRouteChange('catagory-product')}><a>Mobiles and Tablets</a></li>
                                    <li onClick={()=>onRouteChange('catagory-product')}><a >Fashion</a></li>
                                    <li onClick={()=>onRouteChange('catagory-product')}><a >Consumer Electronics</a></li>
                                    <li onClick={()=>onRouteChange('catagory-product')}><a >Footwear</a></li>
                                    <li onClick={()=>onRouteChange('catagory-product')}><a >Home Furnishings</a></li>
                                    <li onClick={()=>onRouteChange('catagory-product')}><a >Books</a></li>
                                    <li onClick={()=>onRouteChange('catagory-product')}><a >Groceries</a></li>
                                    <li onClick={()=>onRouteChange('catagory-product')}><a >Stationary and Craft</a></li>
                                    <li onClick={()=>onRouteChange('catagory-product')}><a >Hardwares and essentials</a></li>
                                    <li onClick={()=>onRouteChange('catagory-product')}><a >Baby Products</a></li>

                                </ul>
                                </li>
                                <li><a href="">My Cart</a></li>
                                <li><a href="">Login</a></li>
                                <li><a href="">Help Center</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact us</a></li>
                            </ul>
                            </nav>

                    {/* </p> */}
                </li>
                {/* <li className="nav-item">
                    <p className="nav-link">Offer Zone</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">My orders</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link">About</p>
                </li> */}
            </ul>
            
            <div className="hamburger" onClick={()=>mobileMenu()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            
            <p className="logo">&#x2316;India</p>

        </nav>
</header>
	);
   
}
export default Navigation2;