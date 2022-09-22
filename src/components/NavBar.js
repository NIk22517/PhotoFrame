import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const NavBar = ({ setFile }) => {
  const handleClick = () => {
    setFile(null);
  };
  return (
    <Nav>
      <div className='nav-logo'>
        <Link to='/' onClick={handleClick}>
          <Logo />
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
  .nav-link a {
    color: blue;
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
