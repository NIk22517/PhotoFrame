import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FrameData } from "../frameData";

const ChooseFrames = () => {
  return (
    <ChooseFrameStyle>
      <div className='grid-section'>
        {FrameData.map((data) => {
          return (
            <section key={data.id}>
              <Link to={`/${data.frame_path}`}>
                <img src={data.frame_image} alt={data.frame_path} />
              </Link>
            </section>
          );
        })}
      </div>
    </ChooseFrameStyle>
  );
};

export default ChooseFrames;

const ChooseFrameStyle = styled.main`
  position: relative;
  .grid-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 3rem;
    margin: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -8;
    filter: blur(2px);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000d20;
  }
  section {
    position: relative;
    max-width: 20rem;
  }

  section::before {
    content: "";
    width: 105%;
    height: 105%;
    background-color: transparent;
    position: absolute;
    z-index: -5;
    left: -8px;
    top: -8px;
    border: 2px solid white;
    border-radius: 0.5rem;
    box-shadow: 0 0 5px 5px grey;
  }
  img {
    width: 100%;
  }

  @media (max-width: 1050px) and (min-width: 700px) {
    .grid-section {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 699px) {
    .grid-section {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
