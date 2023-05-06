import React, { useState } from "react";
import Slider from "./Slider";
import "./Home.css";

const images = [
  {
    url:
      "https://w0.peakpx.com/wallpaper/211/478/HD-wallpaper-mahou-shoujo-miki-sayaka-angry-akemi-homura-magical-girl-pointing-group-gun-anime-sakura-kyouko-hot-anime-girl-weapon-long-hair-team-mahou-shoujo-madoka-magica-fighting-female-sexy.jpg",
    alt: "Image 1",
  },
  {
    url:
      "https://w0.peakpx.com/wallpaper/558/361/HD-wallpaper-sister-s-maid-pretty-dress-cg-kantai-beautiful-adorable-sweet-nice-group-anime-hot-beauty-anime-girl-apron-long-hair-black-hair-female-kantai-collection-lovely-brown-hair-purple.jpg",
    alt: "Image 2",
  },
  {
    url:
      "https://w0.peakpx.com/wallpaper/339/441/HD-wallpaper-it-s-good-to-be-king-pretty-dress-stunning-guy-anime-girls-thigh-highs-beautiful-group-hot-beauty-long-hair-black-hair-beauties-tattoo-sexy-brown-eyes-cute.jpg",
    alt: "Image 3",
  },
];

function Home() {
  const [showPrompt, setShowPrompt] = useState(false);

  const handleAddToPlaylist = () => {
    if (showPrompt) {
      alert("Please enter a search query first.");
    } else {
      // Code to add to playlist
    }
  };

  return (
    <div className="home">
      <Slider images={images} />
      <div className="home-content">
        <div className="spotlight-header">
          <h1>#SpotLight</h1>
        </div>
        <p>
          Tokyo Revengers:
          <br />
          Christmas Showdown
        </p>
        <p>
          Watching the news, Takemichi Hanagaki learns that his girlfriend from
          way back in middle school, Hinata Tachibana, has died. The only
          girlfriend he ever had was just killed by a villainous group known as
          the Tokyo Manji Gang. He lives in a crappy apartment with t...More
        </p>
        <button onClick={() => setShowPrompt(true)}>Watch Now</button>
        <button onClick={handleAddToPlaylist}>Add To Playlist</button>
        {showPrompt && (
          <div className="search-prompt">
            <p>Please enter a search query before adding to playlist.</p>
            <button onClick={() => setShowPrompt(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
