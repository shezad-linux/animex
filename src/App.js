import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Component/Header/Header';
import SearchBar from './Component/Searchbar/SearchBar';
import AnimeList from './Component/AnimeList/AnimeList';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import LoadingVideo from './Component/Loading/Loading';
const video = require('./video.mp4');


function App() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },4000); // Change this to the time you want to delay the rendering of main content in milliseconds
  }, []);

  const handleSearch = (query) => {
    fetch(`https://api.jikan.moe/v4/anime?q=${query}`, { cache: 'no-cache' })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
      })
      .then((response) => {
        const anime = response;
        setAnimeList(anime);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
       {isLoading ?  <LoadingVideo src={video}/> : 
       <main>
         <Header />
         <SearchBar onSearch={handleSearch} />
         <Home/>
         <AnimeList animeList={animeList} setAnimeList={setAnimeList} />
         <Footer/>
       </main>
       }
    </div>
  );
}

export default App;
