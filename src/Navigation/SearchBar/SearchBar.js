import React, { useState } from "react";
import './SearchBar.css';
const SearchBar=({placeholder,data,onRouteChange,handlesearch})=>{
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
return(		
  <div className="x">
        {/* <img src='https://freeiconshop.com/wp-content/uploads/edd/search-flat.png' className='' onClick={()=>handlesearch()} alt="back" /> */}
        <form role="search" id="form" className="search">
            <input className="nav-logo search" 
              type="search" 
              id="query" 
              name="q"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
              aria-label="Search through site content"
            />
            
            <button className='searchsub'>
              <svg viewBox="0 0 1024 1024">
                <path className="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path>
              </svg>
            </button>
            </form>

              {
                filteredData.length !== 0 && (
                <div className="dataResult">
                  {
                    filteredData.slice(0, 15).map((value, key) => {
                      return (
                        <a className="dataItem"  rel="noreferrer" href={value.link} target="_blank">
                          <p>{value.title} </p>
                        </a>
                      );
                   })
                 } 
               </div>
      )}
      </div>
	);
   
}
export default SearchBar;