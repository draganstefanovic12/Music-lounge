import "./app.css";
import axios from "axios";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { Heading } from "./components/Heading/Heading";
import { useState } from "react";
import { Recommendation, SearchCard } from "./components/SearchCard/SearchCard";

export type Data = {
  Similar: {
    Results: Recommendation[];
  };
};

//fetching through heroku proxy because of cors
export const proxy = `https://course-search-proxy.herokuapp.com/`;

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({} as Data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleContent = async (url: string) => {
    const data = await axios(proxy, {
      method: "POST",
      data: {
        urlToGet: `https://tastedive.com/api/similar?q=${url}&verbose=1&k=441672-Medialou-E81PF3PL`,
      },
    });
    setData(data.data);
  };

  return (
    <div className="main-cont">
      <Heading />
      <div className="input-btn-cont">
        <Input onChange={handleChange} />
        <Button onClick={() => handleContent(search)}>Search</Button>
      </div>
      <SearchCard data={data} />
    </div>
  );
};

export default App;
