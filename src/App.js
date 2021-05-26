import React, { useState } from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetFlixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      {/* <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovices} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
