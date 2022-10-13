import React from "react";
import Intro from "./components/Intro";
import NavigationBar from "./components/Navigation";
import Superhero from "./components/Superhero";
import Trending from "./components/Trending";

export default function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero/>
      </div>
    </div>
  );
}
