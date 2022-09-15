import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <Link to='/privacy-policy'>
        <p>Privacy policy</p>
      </Link>
      <p className='copy-right'>&copy; Copyright 2022</p>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  height: 10vh;
  background-color: #edf4f2;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0.5rem 0rem;
    color: grey;
  }
  .copy-right {
    font-size: 10px;
  }
`;
