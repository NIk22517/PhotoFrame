import { Link } from "react-router-dom";
import styled from "styled-components";

const ShowUploadedImage = ({ file }) => {
  return (
    <>
      <ImageContainer>
        <img src={URL.createObjectURL(file)} alt='profile' />
        <div className='button'>
          <Link to='/choose-frame'>
            <button>Choose Frame</button>
          </Link>
        </div>
      </ImageContainer>
    </>
  );
};

export default ShowUploadedImage;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 40vh;
    border-radius: 20px;
    box-shadow: 0px 0px 0px 10px #000000a3;
    transition: transform 0.3s ease;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
  .button button {
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
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    border: none;
    padding: 1rem 4rem;
    border-radius: 25px;
    cursor: pointer;
    color: #342ead;
    font-weight: bolder;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
  }

  .button button:hover {
    background-image: linear-gradient(
      to right bottom,
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
    color: #342ead;
  }
`;
