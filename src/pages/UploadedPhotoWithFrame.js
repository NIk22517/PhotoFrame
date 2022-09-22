import React, { useRef } from "react";
import styled from "styled-components";
import DownloadImage from "../components/DownloadImage";
import SelectedFrame from "../components/SelectedFrame";

const UploadedPhotoWithFrame = ({ file }) => {
  const downloadElement = useRef(null);

  return (
    <PhotoFrameWithDownlod>
      <Photo ref={downloadElement}>
        <PhotoFrameContainer>
          <div className='uploaded-image'>
            <img
              className='upload-img'
              src={URL.createObjectURL(file)}
              alt='profile'
            />
          </div>

          <div className='frame-image'>
            <SelectedFrame />
          </div>
        </PhotoFrameContainer>
      </Photo>
      <DownloadImage downloadElement={downloadElement} />
    </PhotoFrameWithDownlod>
  );
};

export default UploadedPhotoWithFrame;

const PhotoFrameWithDownlod = styled.div`
  margin-top: 2rem;
  margin-bottom: 10rem;
`;

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 1080px;

  @media (max-width: 676px) {
    height: 50vh;
  }
`;

const PhotoFrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .uploaded-image {
    position: absolute;
    top: 0%;
  }
  .frame-image {
    position: absolute;
    top: 0%;
  }
  .uploaded-image img {
    object-fit: cover;
  }
  img {
    width: 1080px;
    height: 1080px;
  }

  @media (max-width: 676px) {
    img {
      width: 380px;
      height: 380px;
    }
    .upload-img {
      object-fit: cover;
    }
  }
`;
