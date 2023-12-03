// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Player from "./pages/Player";
import TvShowPage from "./pages/TvShowsPage";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/MoviePage";
import UserLiked from "./pages/UserLiked";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/player" element={<Player />} />
          <Route exact path="/tv" element={<TvShowPage />} />
          <Route exact path="/myList" element={<UserLiked />} />
          <Route exact path="/" element={<Netflix />} />
          <Route exact path="/movies" element={<MoviePage />} />
        </Routes>
        {/* <Header/> */}
        {/* <BakgroundImage/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
