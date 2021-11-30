import React from "react";
import ContentBar from "./ContentBar/ContentBar";
import './SideNav0.css';
const SideNav=({onRouteChange})=>{
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
            <ContentBar/>

            <div className="logins">
                <svg className="svg-icon" viewBox="0 0 20 20">
					<path fill="none" d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
					<path fill="none" d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
				</svg>
                Login
            </div>
            {/* <div className="Pbar">
                <div className='PP'>Offers</div>
                <div className='PP'>Electronics</div>
                <div className='PP'>Fashion</div>
                <div className='PP'>Groceries</div>
                <div className='PP'>Home Furnishings</div>
                <div className='PP'>More</div>
            </div> */}


            <p className="loc"><svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
						</svg>India</p>

        </nav>
    );
}
export default SideNav;