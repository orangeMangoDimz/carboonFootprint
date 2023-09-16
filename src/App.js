  import './App.css';
  import Topbar from './Components/Topbar.js'
  import ArticlePictureSection from './Components/ArticlePictureSection';
  import { useState } from 'react';
  import Footer from './Components/Footer';
  import Rank from './Components/Rank';
  import Map from './Components/Map';
  import Calculator from './Components/Calculator';

  function App() {

    return (
      <div className="App">
        <header>
          <Topbar />
        </header>
        <div className="article-picture" id='article-picture'>
          <ArticlePictureSection />
        </div>
        <div className="calc" id='calc'>
          <Calculator />
        </div>
        <div className='container-fluid row p-5 justify-content-center align-items-center map-n-rank' id='navigation'>
          <div className="map col-4">
            <Rank />
          </div>
          <div className='rank col-8'>
            <Map />
          </div>
        </div>
        <div id="about-us">
          <Footer />
        </div>
      </div>
    );
  }

  export default App;
