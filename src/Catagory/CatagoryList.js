import React from 'react';
import Catagory from './Catagory';
import './Catagory.css';

const CatagoryList=({onRouteChange,CatagoryData})=>{
  const overF=()=>{
    document.getElementById("scroll").style.overflow = "visible";
    document.getElementById("scroll").style.height = "unset";
    document.getElementById("scrollA").style.display = "none";
  }
    return(
        <div>
        <div className='grid' id='scroll'>
        {
		            CatagoryData.map((cname, i) => {
		              return (
                        <Catagory 
                        key={i} 
                        cname = {CatagoryData[i].Catagory_name} 
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