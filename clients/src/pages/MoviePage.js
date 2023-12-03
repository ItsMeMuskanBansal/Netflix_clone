import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, fetchMovies } from "../store";
import { MY_API_KEY } from "../utils/constants";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import SliderComponent from "../components/SliderComponent";
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";

const MoviePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in use effect");
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "movies" }));
    }
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) navigate("/");
  });

  return (
    <MovieContainer>
      <div className="navbar">
        <TopNav isScrolled={isScrolled} />
      </div>

      <div className="data">
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <SliderComponent movies={movies} /> : <NotAvailable />}
      </div>
    </MovieContainer>
  );
};

const MovieContainer = styled.div`
  .data {
    margin-top: 8rem;
    .Not_available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;

export default MoviePage;
