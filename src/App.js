import React from "react";
import "./App.css";
import { loadMovies } from "./api";
import Chat from "./components/Chat";

function App() {
  loadMovies().then(movies => console.log(movies));
  return <Chat />;
}

export default App;
