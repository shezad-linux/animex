import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './Anilist.css';

function AnimeList({ animeList }) {
  const [imageUrls, setImageUrls] = useState([]);
  const [title, setTitle] = useState('');
  const [mal_id, setMal_id] = useState([]);
  const [trailerUrls, setTrailerUrls] = useState([]);
  const [sypnosis, setSypnosis] = useState('');
  const [showTrailer, setShowTrailer] = useState(false); // New state variable for showing/hiding trailer

  useEffect(() => {
    if (animeList && animeList.data && animeList.data.length > 0) {
      const urls = animeList.data.map((anime) => anime.images.jpg.large_image_url);
      setTitle(animeList.data.map((anime) => anime.titles[0].title));
      setImageUrls(urls);
      setMal_id(animeList.data.map((anime) => anime.mal_id));
      setTrailerUrls(animeList.data.map((anime) => anime.trailer.url));
      setSypnosis(animeList.data.map((anime) => anime.synopsis));
    }
  }, [animeList]);

  return (
    <div>
      {mal_id.map((id, i) => (
        <div className="anime-container" key={id}>
          <h2>{title[i]}</h2>
          <img src={imageUrls[i]} alt={title[i]} />
          <button onClick={() => setShowTrailer(!showTrailer)}>Watch Trailer</button>{' '}
          {/* New button to toggle show/hide trailer */}
          {showTrailer && (
            <div className="trailer-wrapper">
              <ReactPlayer url={trailerUrls[i]} />
            </div>
          )}
          <p>{sypnosis[i]}</p>
        </div>
      ))}
    </div>
  );
}


export default AnimeList;
