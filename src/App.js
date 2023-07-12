import { useContext, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Search from './resources/components/Search';
import { DataContext } from './resources/context/AppContext';

function App() {

  const data = useContext(DataContext);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  useEffect(() => {
    data.getMovieData(113);
  },
  [])

  const body = document.querySelector('body');
  body.style.backgroundImage = `url("https://image.tmdb.org/t/p/w500${data.movieData?.backdrop_path}")`;

  return (
    <div className="container App">
      <div className='header row'>
        <div className='col-xs-12 col-sm-6 col-lg-5 text-start'>
          <a href='/'><img src={process.env.PUBLIC_URL + '/tmdb.svg'} className='logo'/></a>
        </div>
        <div className='col-xs-12 col-sm-6 col-lg-7 d-flex justify-content-center align-items-center'>
          <Search></Search>
        </div>
      </div>
      <div className='body row my-4'>
        <div className='body-img-container col-xs-12 col-sm-6 col-lg-5 text-start'>
          {/* image nè */}
          <img src={data.movieData && `https://image.tmdb.org/t/p/w500${data.movieData?.poster_path}` || "https://image.tmdb.org/t/p/w500/6SQQ5REuAz7k0FMQ9mSCT40T2LN.jpg"} className='body-img'/>
        </div>
        <div className='body-content-container col-xs-12 col-sm-6 col-lg-7 d-flex align-items-start flex-column'>
          <div className='container text-start'>
            {/* title nè */}
            <h1 className='title'>{ data.movieData && data.movieData?.original_title}</h1>
            <span className='tagline'>{data.movieData && data.movieData?.tagline}</span>
            <p className='tagline-description'>{ data.movieData && data.movieData?.overview}</p>

            <span className='type'>{data.movieData && data.movieData.genres.map(item => item.name).join(', ')}</span>
            <p className='type-description'>{data.movieData && data.movieData.production_companies.map(item => item.name).join(', ')}</p>
          
            <div className='row'>
              <div className='detail col-lg-6 d-flex flex-column'>Original Release: <span className='meta-data'>{data.movieData.release_date}</span></div>
              <div className='detail col-lg-6 d-flex flex-column'>Running Time: <span className='meta-data'>{data.movieData.runtime}</span></div>
              <div className='detail col-lg-6 d-flex flex-column'>Box Office: <span className='meta-data'>{formatter.format(data.movieData.revenue)}</span></div>
              <div className='detail col-lg-6 d-flex flex-column'>Vote Average: <span className='meta-data'>{`${data.movieData.vote_average}/10`}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
      </div>
    </div>
  );
}

export default App;
