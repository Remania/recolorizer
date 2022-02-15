import { Routes, Route } from "react-router-dom"
import ColorsPage from "./pages/ColorsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colors" element={<ColorsPage />} />
      </Routes>
    </div>
  );
}

export default App;
