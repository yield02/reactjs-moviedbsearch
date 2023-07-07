import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  return (
    <div className="container App">
      <div className='header row'>
        <div className='col-xs-12 col-sm-6 col-lg-5 text-start'>
          <a href='/'><img src={process.env.PUBLIC_URL + '/tmdb.svg'} className='logo'/></a>
        </div>
        <div className='col-xs-12 col-sm-6 col-lg-7 d-flex justify-content-center align-items-center'>
          <input className='input-search' type='text' placeholder='Search Movie Title'/>
        </div>
      </div>
      <div className='body row my-4'>
        <div className='body-img-container col-xs-12 col-sm-6 col-lg-5 text-start'>
          {/* image nè */}
          <img src="https://image.tmdb.org/t/p/w500/6SQQ5REuAz7k0FMQ9mSCT40T2LN.jpg" className='body-img'/>
        </div>
        <div className='body-content-container col-xs-12 col-sm-6 col-lg-7 d-flex align-items-start flex-column'>
          <div className='container text-start'>
            {/* title nè */}
            <h1 className='title'>봄 여름 가을 겨울 그리고 봄</h1>
            <span className='tagline'>What you like, others will also like.</span>
            <p className='tagline-description'>An isolated lake, where an old monk lives in a small floating temple. The monk has a young boy living with him, learning to become a monk. We watch as seasons and years pass by.</p>

            <span className='type'>Drama</span>
            <p className='type-description'>LJ Film, Korea Pictures, Cineclick Asia, Cinesoul, Mirae Asset Capital, Muhan Investment, Pandora Film</p>
          
            <div className='row'>
              <div className='detail col-lg-6 d-flex flex-column'>Original Release: <span className='meta-data'>2003-09-19</span></div>
              <div className='detail col-lg-6 d-flex flex-column'>Running Time: <span className='meta-data'>2003-09-19</span></div>
              <div className='detail col-lg-6 d-flex flex-column'>Running Time: <span className='meta-data'>2003-09-19</span></div>
              <div className='detail col-lg-6 d-flex flex-column'>Vote Average: <span className='meta-data'>2003-09-19</span></div>
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
