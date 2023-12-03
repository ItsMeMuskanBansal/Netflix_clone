import React from "react";
import styled from "styled-components";
import MovieSlider from "./MovieSlider";

const SliderComponent = ({ movies }) => {
  const getMoviesBetween = (start, end) => {
    return movies.slice(start, end);
  };
  // console.log(movies);
  return (
    <SliderWrraper>
      <MovieSlider data={getMoviesBetween(0, 10)} title="Only on Netflix" />
      <MovieSlider data={getMoviesBetween(10, 20)} title="Trending Now" />
      <MovieSlider data={getMoviesBetween(20, 30)} title="Popular on Netflix" />
      <MovieSlider data={getMoviesBetween(30, 40)} title="Netflix and Chill" />
      <MovieSlider data={getMoviesBetween(40, 50)} title="Epic" />
      <MovieSlider data={getMoviesBetween(50, 60)} title="New Releases" />
      <MovieSlider data={getMoviesBetween(60, 70)} title="Action Movies" />
    </SliderWrraper>
  );
};

const SliderWrraper = styled.div``;
export default SliderComponent;
