import "./searchcard.css";
import ytLogo from "../../assets/youtube-icon.svg";
import { Data } from "../../App";

type SearchCardProps = {
  data: Data;
};

export type Recommendation = {
  Name: string;
  Type: string;
  wTeaser: string;
  yUrl?: string;
};

export const SearchCard = ({ data }: SearchCardProps) => {
  return (
    <div className="search-grid-cont">
      {data.Similar &&
        data.Similar.Results.map((card: Recommendation, i: number) => (
          <div key={i} className="recommendation-cont">
            <div>
              <h1>{card.Name}</h1>
              <a href={card.yUrl}>
                <img src={ytLogo} alt="" className="yt-logo" />
              </a>
            </div>
            <p>{card.wTeaser}</p>
          </div>
        ))}
    </div>
  );
};
