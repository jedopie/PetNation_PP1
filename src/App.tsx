import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
