import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/AppContext";
import Item from "./Item";
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const data = useContext(DataContext);
    const [showResult, setShowResult] = useState(false);


    useEffect(() => {

        const timeOut = setTimeout(() => {
            data.runSearch(searchValue);
        }, 500);

        return () => clearTimeout(timeOut);
    }, [searchValue])


    return (
        <div className="search-container">
            <input className='input-search' onFocus={() => setShowResult(true)} onBlur={() => setTimeout(()=>{setShowResult(false)}, 300)} type='text' placeholder='Search Movie Title' value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}/>
            {data.searchResults.length > 0 && showResult && 
            <div className="results-container">
                {data.searchResults.map((item) => <Item onClick={() => {data.getMovieData(item.id)}} key={item.id} Title={item.original_title}></Item>)}
            </div>}
        </div>
    )
}

export default Search;