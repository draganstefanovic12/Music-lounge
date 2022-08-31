import "./app.css";
import axios from "axios";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { Heading } from "./components/Heading/Heading";
import { useState } from "react";
import { Recommendation, SearchCard } from "./components/SearchCard/SearchCard";
import { ChangeTheme } from "./components/ChangeTheme/ChangeTheme";

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
        urlToGet: `https://tastedive.com/api/similar?q=${url}&verbose=1&type=music&k=441672-Medialou-E81PF3PL`,
      },
    });
    setData(data.data);
  };

  const handleClick = () => {
    handleContent(search);
  };

  //using no-clip-path class on search to animate clip path
  const mainStyles = data.Similar ? "main-cont no-clip-path" : "main-cont";

  return (
    <div className={mainStyles}>
      <Heading />
      <div className="input-cont">
        <Input onChange={handleChange} />
        <Button onClick={handleClick}>Search</Button>
      </div>
      {data.Similar && <SearchCard data={data} />}
      <ChangeTheme />
    </div>
  );
};

export default App;
