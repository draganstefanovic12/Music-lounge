import "./app.css";
import { Input } from "./components/Input/Input";
import { Button } from "./components/Button/Button";
import { Heading } from "./components/Heading/Heading";

const App = () => {
  return (
    <div className="main-cont">
      <Heading />
      <div className="input-btn-cont">
        <Input />
        <Button>Judge my taste</Button>
      </div>
    </div>
  );
};

export default App;
