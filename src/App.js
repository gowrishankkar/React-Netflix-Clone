import React, { useState } from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Row title="Te1" fetchUrl={requests.fetchNetFlixOriginals} />
      {/* <Row title="Te1" fetchUrl={requests.fetchTrending} />
      <Row title="Te1" fetchUrl={requests.fetchTrending} />
      <Row title="Te1" fetchUrl={requests.fetchTrending} />
      <Row title="Te1" fetchUrl={requests.fetchTrending} />
      <Row title="Te1" fetchUrl={requests.fetchTrending} /> */}
    </div>
  );
}

export default App;
