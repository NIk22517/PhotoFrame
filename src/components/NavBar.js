import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = ({ setFile }) => {
  const handleClick = () => {
    setFile(null);
  };
  return (
    <Nav>
      <div className='nav-logo'>
        <Link to='/' onClick={handleClick}>
          <h5>
            <span className='sdm'>SDM</span>{" "}
            <span className='rural'>RURAL</span>{" "}
            <span className='shimla'>SHIMLA</span>{" "}
          </h5>
        </Link>
      </div>
      <div className='nav-link'>
        <Link to='/' onClick={handleClick}>
          <h5>Home</h5>
        </Link>
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  height: 10%;
  background-color: #edf4f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  img {
    width: 250px;
  }

  .nav-logo {
    margin-left: 5rem;
  }
  .nav-link {
    margin-right: 5rem;
  }
  a h5 {
    color: #342ead;
    position: relative;
    z-index: 2;
  }

  h5 {
    text-align: center;
    position: relative;
    cursor: pointer;
    padding: 0.5rem;
  }

  h5::before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      #ff9933,
      #ff9c7c,
      #ffadb9,
      #ffc7e7,
      #ffe2fe,
      #ebe1ff,
      #d5e0ff,
      #bfdffc,
      #68ceea,
      #00bcbc,
      #00a572,
      #138808
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    inset: 0 0 0 0;
    z-index: -1;
    transition: transform 0.3s ease;
    border-radius: 0.5rem;
  }

  h5::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  @media (hover: hover) {
    h5:hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  @media (max-width: 676px) {
    img {
      width: 200px;
    }
    .nav-logo {
      margin-left: 1rem;
    }
    .nav-link {
      margin-right: 1rem;
    }
  }
`;
