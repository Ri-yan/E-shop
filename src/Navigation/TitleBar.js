import {useState} from "react";
import  {Link}  from "react-router-dom";
import nav from './TitleBar.module.css';
import SearchBar from "./SearchBar/SearchBar";
import BookData from "../Data.json";
import SideNav from "./SideNav/SideNav";
import search from '../ICONS/InNavigation/search.svg';
import login from '../ICONS/InNavigation/login.svg';
import cart from '../ICONS/InNavigation/cart.svg';
import back from '../ICONS/InNavigation/back.svg';

const TitleBar=({onRouteChange})=>{ 
    const [searchactive,setsearchActive] = useState(false);
    const handlesearch=()=>{
        setsearchActive(!searchactive)
        document.getElementsByClassName('dataResult')[0].style.display = 'none';    
    };
    const [searchButton,setSearchButton]=useState(true);
    const showButton=()=>{
        if(window.innerWidth<=960){
            setSearchButton(false);
        }else{
            setSearchButton(true);
            setsearchActive(false)
        }
    }
    window.addEventListener('resize',showButton);
    return(
        <div  className={`${nav.navbar} ${nav.modern}` }>
             {/* SideBar and Title */}
            <div className={nav.navbar}>
                <SideNav onRouteChange={onRouteChange}/>
                <Link to={'/E-shop/'}><div  className={nav.Site_logo}>E-shop</div></Link>
            </div>
            {/* Pc Search Bar */}
            <div className={searchButton?nav.search_bar :nav.search_bar_active}>
                <SearchBar placeholder="Enter Something..." data={BookData} />
            </div>
            <div className={nav.navbar} style={{'z-index':'5'}}>
                {/* mobile search button */}
                <img className={searchButton?nav.search_button :nav.search_button_active} onClick={()=>handlesearch()} src={search} alt="fav"/>
                {/* login and location button */}
                <div className={nav.search_logo_container}>
                    <img className={nav.search_logo} src={login} alt="login"/>
                    <label htmlFor="">Login</label> 
                </div>
                <div className={nav.search_logo_container}>
                    <Link to={'/E-shop/catagory-product/product/cart'}>
                    <img className={nav.search_logo} src={cart} alt="cart"/>
                    </Link>
                    <label htmlFor="" >cart </label>
                    
                </div>
            </div>
            {/* mobile search bar */}
            <div className={searchactive?nav.search_active:nav.nav_search}>
                <div className={nav.search_container}>
                    <img src={back} className='' onClick={()=>handlesearch()} alt="back" />
                    <SearchBar handlesearch={handlesearch} placeholder="Enter Something..." data={BookData} />
                </div>
            </div>
        </div>
);
}
export default TitleBar;