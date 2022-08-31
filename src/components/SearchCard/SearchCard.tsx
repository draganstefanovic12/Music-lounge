import "./searchcard.css";
import { Data } from "../../App";
import { SearchOnSpotify } from "../SearchOnSpotify/SearchOnSpotify";

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
      {data.Similar.Results.map((card: Recommendation, i: number) => (
        <div key={i} className="recommendation-cont">
          <SearchOnSpotify search={card.Name} />
          <div>
            <h1>{card.Name}</h1>
            <p>{card.wTeaser}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
