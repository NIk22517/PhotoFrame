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
          <img
            src='https://eci.gov.in/uploads/monthly_2022_06/logo.png.d0e6aee2d64193769bffbc6e720bbe96.png'
            alt='logo'
          />
        </Link>
      </div>
      <div className='nav-link'>
        <Link to='/' onClick={handleClick}>
          <p>Home</p>
        </Link>
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  height: 10vh;
  background-color: #edf4f2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 300px;
  }

  .nav-logo {
    margin-left: 5rem;
  }
  .nav-link {
    margin-right: 5rem;
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
