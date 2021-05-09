import React, { useState } from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Te1" fetchUrl={requests.fetchNetFlixOriginals} isLargeRow />
      <Row title="Te1" fetchUrl={requests.fetchTrending} />
      <Row title="Te1" fetchUrl={requests.fetchTrending} />
      <Row title="Te1" fetchUrl={requests.fetchTrending} />
      <Row title="Te1" fetchUrl={requests.fetchTrending} />
      <Row title="Te1" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
