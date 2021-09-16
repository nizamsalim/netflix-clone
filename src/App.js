import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";
import { originals, action, horror, comedy, romance } from "./urls";
import { Route } from "react-router";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Banner />
        <RowPoster url={originals} title="Netflix Originals" />
        <RowPoster url={action} title="Action" isSmall />
        <RowPoster url={horror} title="Horror" isSmall />
        <RowPoster url={comedy} title="Comedy" isSmall />
        <RowPoster url={romance} title="Romance" isSmall />
        <p style={{ color: "#6b6b6b" }}>Designed by Nizam Salim</p>
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </div>
  );
}

export default App;
