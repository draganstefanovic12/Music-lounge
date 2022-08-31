import "./searchonspotify.css";
import axios from "axios";
import spotifyLogo from "../../assets/spotify.svg";
import { useEffect, useState } from "react";

type SpotifyData = {
  external_urls: {
    spotify: string;
  };
  images: Image[];
};

type Image = {
  url: string;
};

//Using my hosted backend to not show my spotify API key
const api = `https://chatapp-backend-kyo.herokuapp.com/spotify`;

export const SearchOnSpotify = ({ search }: { search: string }) => {
  const [spotifyData, setSpotifyData] = useState<SpotifyData>();

  useEffect(() => {
    const handleSpotify = async () => {
      const data = await axios.get(`${api}/${search}`);
      setSpotifyData(data.data);
    };
    handleSpotify();
  }, [search]);

  const handleClick = () => {
    window.open(spotifyData?.external_urls.spotify);
  };

  const artistImg = spotifyData && spotifyData.images[1].url;

  return (
    <div onClick={handleClick} className="spotify-cont">
      <img src={artistImg} alt="spotify-img" className="spotify-img" />
      <img src={spotifyLogo} alt="spot" className="spot" />
    </div>
  );
};
