import React from "react";
import styled from "styled-components";
const Logo = () => {
  return (
    <LogoStyle>
      <div className='logo-color'>
        <div className='orange'></div>
        <div className='white'></div>
        <div className='green'></div>
      </div>

      <div className='logo-heading'>
        <h5>o/o SDM CUM RO RURAL SHIMLA</h5>
      </div>
    </LogoStyle>
  );
};

export default Logo;

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  .logo-color {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    /* padding: 1rem; */
    margin: 2rem 0rem;
    rotate: 320deg;
  }
  .logo-heading h5 {
    color: blue;
  }

  .orange,
  .white,
  .green {
    width: 30px;
    height: 8px;
    position: relative;
    border: 2px solid black;
  }
  .orange {
    background-color: orange;
  }
  .white {
    background-color: white;
  }
  .green {
    background-color: green;
  }

  .orange::before,
  .white::before,
  .green::before {
    content: "";
    width: 5px;
    height: 100%;
    position: absolute;
    background-color: grey;
    border: 3px solid grey;
    top: -2px;
    left: 30px;
    border-radius: 50%;
  }
`;
