import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <Link to='/privacy-policy'>
        <p className='privacy'>Privacy policy</p>
      </Link>
      <p className='copy-right'>&copy; Copyright 2022</p>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  height: 10%;
  background-color: #edf4f2;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  p {
    color: grey;
  }
  .privacy {
    font-size: 15px;
    padding-bottom: 0.5rem;
  }

  .copy-right {
    font-size: 8px;
  }
`;
