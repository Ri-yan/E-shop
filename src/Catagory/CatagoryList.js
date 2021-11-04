import React from 'react';
import Catagory from './Catagory';
import './Catagory.css';
// import Catagory from './Catagory.js';
import {Cdata} from './CatagoryData.js';
const CatagoryList=({onRouteChange})=>{
  const overF=()=>{
    document.getElementById("scroll").style.overflow = "visible";
    document.getElementById("scroll").style.height = "unset";
    document.getElementById("scrollA").style.display = "none";

  }
    return(
        <div>
        <div className='grid' id='scroll'>
        {
		            Cdata.map((cname, i) => {
		              return (
                        <Catagory 
                        key={i} 
                        cname = {Cdata[i].cname} 
                        onRouteChange={onRouteChange}
                        />
		              );
		            })
		          }	
                  
        </div>
        <div className='showc' id='scrollA' onClick={()=>overF()}>Show More</div>
        </div>
    );
}
export default CatagoryList;