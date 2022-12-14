import styled from "styled-components";
import ShowUploadedImage from "../components/ShowUploadedImage";

const ImageUploader = ({ file, setFile }) => {
  const handleChange = (e) => {
    const data = e.target.files[0];
    setFile(data);
  };
  return (
    <FileUpload>
      <input
        type='file'
        id='file'
        className='file'
        accept='image/*'
        onChange={handleChange}
      />
      <label htmlFor='file'>Add Your Photo</label>

      {file && <ShowUploadedImage file={file} />}
    </FileUpload>
  );
};

export default ImageUploader;

const FileUpload = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 80%;
    z-index: -2;
    background-image: url("https://i.pinimg.com/736x/f7/e9/0a/f7e90adb4024280973203534beca25f7.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    filter: blur(1.8px);
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 80%;
    left: 0;
    right: 0;
    z-index: -5;
    background-color: #000d20;
  }

  .file {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
    border: none;
  }
  label {
    display: block;
    position: relative;
    border-radius: 25px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-out;
    color: #342ead;
    padding: 0.8rem 1.5rem;
    margin-bottom: 3rem;
  }

  input:hover + label,
  input:focus + label {
    transform: scale(1.02);
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
  input:focus + label {
    outline: 1px solid #342ead;
    outline: -webkit-focus-ring-color auto 2px;
  }

  @media (max-width: 676px) {
    &::before {
      background-size: cover;
    }
  }
`;
