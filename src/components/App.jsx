import Header from "./Header";
import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";

const App = () => {
  const [calc, setCalc] = useState("0");

  return (
    <div className="container">
      <Header />
      <Display result={calc} />
      <Buttons calc={calc} setCalc={setCalc} />
    </div>
  );
};

export default App;
