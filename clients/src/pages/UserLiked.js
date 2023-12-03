import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, fetchMovies, getUserLikedMovies } from "../store";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import Cards from "../components/Cards";

const UserLiked = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const [email, setEmail] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if (email) {
      dispatch(getUserLikedMovies(email));
    }
  }, [email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <TopNav isScrolled={isScrolled} />
      <div className="content ">
        <h1>My List</h1>
        <div className="grid ">
          {movies.map((movie, index) => {
            return (
              <Cards
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    h1 {
      margin-left: 3rem;
      color: white;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(198px,1fr)); 
      gap: 1rem; 
    }
  }
`;


export default UserLiked;
