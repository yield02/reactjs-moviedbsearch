import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext({});

function AppContext({children}){

    const [searchResults, setSearchResults] = useState([]);    
    const [movieData, setMovieData] = useState('');

    const runSearch = function(value) {
            axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=cfe422613b250f702980a3bbf9e90716`)
            .then((response) => setSearchResults(response.data.results))
            .catch((error) => console.log(error));
    }


    const getMovieData = function(movieid) {
        axios.get(`https://api.themoviedb.org/3/movie/${movieid}?&api_key=cfe422613b250f702980a3bbf9e90716`)
        .then((response) => setMovieData({...response.data}))
        .catch(error => console.log(error));
    }


    return (
        <DataContext.Provider value={{searchResults, movieData, getMovieData,runSearch}}>
            {children}
        </DataContext.Provider>
    )
}

export default AppContext;