import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import ColorsPage from "./pages/ColorsPage";
import FavColorsPages from "./pages/FavColorsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="/colors/favorites" element={<FavColorsPages />} />
      </Routes>
    </div>
  );
}

export default App;
