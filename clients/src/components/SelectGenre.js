import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchMoviesByGenre } from "../store";

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();

  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    dispatch(fetchMoviesByGenre({ genre: selectedGenre, type: type }));
  };

  return (
    <Select className="flex">
      <select onChange={handleGenreChange}>
        {genres.map((genre) => {
          return (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
    </Select>
  );
};

const Select = styled.div`
  select {
    margin-left: 5rem;
    cursor: pointer;
    font-size: 1.4rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
  }
`;

export default SelectGenre;
