import React from "react";
import ReactDOM from "react-dom";
import Hover from "./components/Hover";
import Info from "./components/Info";
import Title from "./components/Title";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Hover>{hovering => <Title hovering={hovering} />}</Hover>
      <Hover>{hovering => <Info hovering={hovering} />}</Hover>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
