import React from "react";
import './SideNav.css';
const SideNav2=({onRouteChange})=>{
    const mobileMenu=()=> {
        document.querySelector(".hamburger").classList.toggle("active");
        document.querySelector(".nav-menu").classList.toggle("active");
    }
    function closeMenu() {
        document.querySelector(".hamburger").classList.remove("active");
        document.querySelector(".nav-menu").classList.remove("active");
        document.getElementById("products").checked = false;
    }
    
    document.querySelectorAll(".navi-link").forEach(n => n.addEventListener("click", closeMenu));
    
    return(
        <nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item">
                    <p className="nav-link nav-logo">My Profile</p>
                </li>
                <li className="nav-item" >
                    <nav className="navigation">
                    <ul className="mainmenu  nav-item">
                        <li className="navi-link" onClick={()=>onRouteChange('home')}><p>Home</p></li>
                        <li className="navi-link"><p>Offers Zone</p></li>
                        <li className="navi-link"><p>My Orders</p></li>
                        <li ><label htmlFor="products">Category</label><input type="checkbox" id="products"/>
                        <ul className="submenu nav-links">
                            <li className="navi-link" onClick={()=>onRouteChange('catagory-product')}><p>Mobiles and Tablets</p></li>
                            <li className="navi-link"  onClick={()=>onRouteChange('catagory-product')}><p >Fashion</p></li>
                            <li className="navi-link"  onClick={()=>onRouteChange('catagory-product')}><p >Consumer Electronics</p></li>
                            <li className="navi-link"  onClick={()=>onRouteChange('catagory-product')}><p >Footwear</p></li>
                            <li className="navi-link"  onClick={()=>onRouteChange('catagory-product')}><p >Home Furnishings</p></li>
                            <li className="navi-link"  onClick={()=>onRouteChange('catagory-product')}><p >Books</p></li>
                            <li className="navi-link"  onClick={()=>onRouteChange('catagory-product')}><p >Groceries</p></li>
                            <li className="navi-link"  onClick={()=>onRouteChange('catagory-product')}><p >Stationary and Craft</p></li>
                            <li className="navi-link"  onClick={()=>onRouteChange('catagory-product')}><p >Hardwares and essentials</p></li>
                            <li className="navi-link"  onClick={()=>onRouteChange('catagory-product')}><p >Baby Products</p></li>
            </ul>
            </li>
                <li onClick={()=>onRouteChange('cart')} className="navi-link" ><p href="none">My Cart</p></li>
                <li className="navi-link" ><p href="">Login</p></li>
                <li className="navi-link" ><p href="">Help Center</p></li>
                <li className="navi-link" ><p href="">About</p></li>
                <li className="navi-link" ><p href="">Contact us</p></li>
            </ul>
             </nav>

                </li>
            </ul>
            
            <div className="hamburger" onClick={()=>mobileMenu()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
           

        </nav>
    );
}
export default SideNav2;