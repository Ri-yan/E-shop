import React from 'react';
import './Navigation3.css';
import SideNav from './SideNav/SideNav';
import SearchBar from './SearchBar/SearchBar';

import BookData from "../Data.json";
import TitleBar from '../TitleBar/TitleBar';

const Navigation3=({onRouteChange})=>{

return(		
    <header className="nav-fix">
        <TitleBar onRouteChange={onRouteChange}/>
        <SideNav onRouteChange={onRouteChange}/>
</header>
	);
   
}
export default Navigation3;