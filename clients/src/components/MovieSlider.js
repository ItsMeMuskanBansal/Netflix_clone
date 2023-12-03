import React, { useState, useRef, useEffect } from "react";
import Cards from "./Cards";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default React.memo(function MovieSlider({ data, title }) {
  const listRef = useRef();

  const [controlVisibility, setcontrolVisibility] = useState(false);
  const [sliderPosition, setsliderPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      listRef.current.style.transform = `translateX(0px)`;
    });
  }, []);

  const handleDirection = (direction) => {
    console.log(listRef);
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setsliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setsliderPosition(sliderPosition + 1);
    }
  };

  return (
    <Container
      $$controlVisibility={controlVisibility}
      onMouseEnter={() => setcontrolVisibility(true)}
      onMouseLeave={() => setcontrolVisibility(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${
            !controlVisibility ? "none" : ""
          }flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Cards movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`slider-action right ${
            !controlVisibility ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
});

const Container = styled.div`
  gap: 0.7rem;
  position: relative;
  padding: 2rem 0;

  h1 {
    margin-left: 5px;
    font-size: 25px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: white;
  }
  .wrapper {
    .slider {
      display: flex;
      width: max-content;
      gap: 0.6rem;
      transform: translateX(0px);
      transition: 1s ease-in-out;
      margin-left: 5px;
    }

    .slider-action {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 1rem;
      bottom: 0;
      width: 50px;
      transition: 1s ease-in-out;
      svg {
        font-size: 2rem;
        cursor: pointer;
        color: white;
      }
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
    .none {
      display: none;
    }
  }
`;
