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

type SpotifySearchProps = {
  search: string;
};

//using my already hosted backend to request a new token if the current one expired
const api = `https://dragpersonalproj.xyz/chat-app/spotify`;

export const SearchOnSpotify = ({ search }: SpotifySearchProps) => {
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

  const artistImg =
    spotifyData && spotifyData?.images.length > 0
      ? spotifyData!.images[0].url
      : "none";

  return (
    <div onClick={handleClick} className="spotify-cont">
      <img src={artistImg} alt="spotify-img" className="spotify-img" />
      <img src={spotifyLogo} alt="spot" className="spot" />
    </div>
  );
};
