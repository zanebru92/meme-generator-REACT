import React, { useEffect, useState } from "react";
import "./style.css";

export default function Meme() {
  // const [memeImage, setMemeImage] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const [memeImage, setMemeImage] = useState([]);

  useEffect(() => {
    async function getImages() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemeImage(data.data.memes);
    }
    getImages();
  }, []);

  function getMemeImage(e) {
    e.preventDefault();
    const random = Math.floor(Math.random() * 100);
    const url = memeImage[random].url;
    setRandomImage(url);
  }

  return (
    <div className="form-container">
      <form>
        <div className="form-control">
          <input
            className="form-input"
            placeholder="Top Text"
            type="text"
            onChange={(e) => setTopText(e.target.value)}
            value={topText}
          />
          <input
            className="form-input"
            placeholder="Bottom Text"
            type="text"
            onChange={(e) => setBottomText(e.target.value)}
            value={bottomText}
          />
        </div>
        <button onClick={getMemeImage} className="submit-btn" type="submit">
          get a new meme image
        </button>
      </form>
      {randomImage && (
        <div className="meme">
          <img src={randomImage} className="meme--image" />
          <h2 className="meme--text top">{topText}</h2>
          <h2 className="meme--text bottom">{bottomText}</h2>
        </div>
      )}
    </div>
  );
}
