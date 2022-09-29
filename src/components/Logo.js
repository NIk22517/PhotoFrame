import React from "react";
import styled from "styled-components";
const Logo = () => {
  return (
    <LogoStyle>
      <div className='logo-img'>
        <img src="https://eci.gov.in/uploads/monthly_2018_10/eci-logo.png.2e8f591ce7b8147f8f3148bcd50de79e.png" alt="logo" />
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

  .logo-img img {
    width: 50px;
  }

`;
