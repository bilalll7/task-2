import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Surat from "./pages/Surat";
import Favorite from "./pages/Favorite";
import { FavoriteProvider } from "./components/FavoriteContext";

function App() {
  return (
    <div className="App">
      <FavoriteProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Surat />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Router>
      </FavoriteProvider>
    </div>
  );
}

export default App;
